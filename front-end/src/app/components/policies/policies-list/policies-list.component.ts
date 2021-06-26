import { Component, OnInit } from '@angular/core';
import { Vechicle } from 'src/app/models/vechicle';
import { PolicyService } from 'src/app/services/policy/policy.service';
import { VechicleService } from 'src/app/services/vechicle/vechicle.service';

@Component({
  selector: 'app-policies-list',
  templateUrl: './policies-list.component.html',
  styleUrls: ['./policies-list.component.css']
})
export class PoliciesListComponent implements OnInit {

  constructor(private policyService: PolicyService, private vechicleService: VechicleService) { }

  policiesList: any = [];
  modalTitle: string;
  activateAddButton: boolean = false;
  vechicleDetailsButton: boolean = false;
  policy: any;
  vechicle: any;

  ngOnInit(): void {
    this.refreshPoliciesList();
  }

  addClick() {
    this.policy = {
      id: 0,
      number: '',
      company: '',
      startDate: '',
      endDate: '',
      vechicleId: ''
    }
    this.modalTitle = "Dodaj Polisę";
    this.activateAddButton = true;
  }

  vechicleDetails(id: number) {
    this.vechicleService.getVechicle(id).subscribe(data => {
      console.log(data);
    this.vechicle = data;
    this.modalTitle = "Szczegóły pojazdu";
    this.vechicleDetailsButton = true;
    });
  }

  editClick(item) {
    this.policy = item;
    this.modalTitle = "Edytuj polisę";
    this.activateAddButton = true;
  }

  deleteClick(id: number) {
    if(confirm('Czy na pewno skasować?')) {
      this.policyService.removePolicy(id).subscribe(response => {
        console.log(response);
        this.refreshPoliciesList();
        },
        error => console.log(error));
    }
  }

  closeClick(){
    this.activateAddButton = false;
    this.vechicleDetailsButton = false;
    this.refreshPoliciesList();
  }

  refreshPoliciesList(){
    this.policyService.getAllPolicies().subscribe(data => {
      this.policiesList = data;
    });
  }

}
