import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver/driver.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  constructor(private driverService: DriverService) { }

  driversList: any = [];
  modalTitle: string;
  activateAddButton: boolean = false;
  driver: any;

  ngOnInit(): void {
    this.refreshDriversList();
  }

  addClick() {
    this.driver = {
      id: 0,
      firstName: '',
      lastName: '',
      pesel: '',
      street: '',
      postalCode: '',
      city: '',
      drivingLicenceCategory: ''
    }
    this.modalTitle = "Dodaj kierowcę";
    this.activateAddButton = true;
  }

  editClick(item) {
    this.driver = item;
    this.modalTitle = "Edytuj dane kierowcy";
    this.activateAddButton = true;
  }

  deleteClick(item) {
    if(confirm('Czy na pewno skasować?')) {
      this.driverService.removeDriver(item.Id).subscribe(response => {
        console.log(response);
        this.refreshDriversList();
        },
        error => console.log(error));
    }
  }

  closeClick(){
    this.activateAddButton = false;
    this.refreshDriversList();
  }

  refreshDriversList(){
    this.driverService.getAllDrivers().subscribe(data => {
      this.driversList = data;
    });
  }

}
