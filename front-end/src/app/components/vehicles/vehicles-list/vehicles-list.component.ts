import { Component, OnInit } from '@angular/core';
import { Vechicle } from 'src/app/models/vechicle';
import { DriverService } from 'src/app/services/driver/driver.service';
import { PolicyService } from 'src/app/services/policy/policy.service';
import { VechicleService } from 'src/app/services/vechicle/vechicle.service';

@Component({
  selector: 'app-vechicles-list',
  templateUrl: './vechicles-list.component.html',
  styleUrls: ['./vechicles-list.component.css']
})
export class VechiclesListComponent implements OnInit {

  constructor(private vechicleService: VechicleService, private driverService: DriverService, private policyService: PolicyService) { }

  vechiclesList: any = [];
  modalTitle: string;
  activateAddButton: boolean = false;
  driverDetailsButton: boolean = false;
  policyDetailsButton: boolean = false;
  vechicle: any;
  driver: any;
  policy: any;

  ngOnInit(): void {
    this.refreshVechiclesList();
  }

  addClick() {
    this.vechicle = {
      id: 0,
      brand: '',
      model: '',
      year: '',
      color: '',
      registrationNumber: '',
      ownerId: '',
      policyId: ''
    }
    this.modalTitle = "Dodaj Pojazd";
    this.activateAddButton = true;
  }

  driverDetails(id: number) {
    this.driverService.getDriver(id).subscribe(data => {
      console.log(data);
    this.driver = data;
    this.modalTitle = "Szczegóły właściciela";
    this.driverDetailsButton = true;
    });
  }

  policyDetails(id: number) {
    this.policyService.getPolicy(id).subscribe(data => {
      console.log(data);
    this.policy = data;
    this.modalTitle = "Szczegóły polisy";
    this.policyDetailsButton = true;
    });
  }

  editClick(item) {
    this.vechicle = item;
    this.modalTitle = "Edytuj pojazd";
    this.activateAddButton = true;
  }

  deleteClick(item) {
    if(confirm('Czy na pewno skasować?')) {
      this.vechicleService.removeVechichle(item.Id).subscribe(response => {
        console.log(response);
        this.refreshVechiclesList();
        },
        error => console.log(error));
    }
  }

  closeClick(){
    this.activateAddButton = false;
    this.driverDetailsButton = false;
    this.policyDetailsButton = false;
    this.refreshVechiclesList();
  }

  refreshVechiclesList(){
    this.vechicleService.getAllVechicles().subscribe(data => {
      this.vechiclesList = data;
    });
  }

}
