import { Component, Input, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy/policy.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  constructor(private policyService: PolicyService) { }

  @Input() policy:any;
  id: number;
  number: string;
  company: string;
  startDate: Date;
  endDate: Date;
  vechicleId: number;

  ngOnInit(): void {
    this.id = this.policy.Id;
    this.number = this.policy.Number;
    this.company = this.policy.Company;
    this.startDate = this.policy.StartDate;
    this.endDate = this.policy.EndDate;
    this.vechicleId = this.policy.VechicleId;
  }

  addPolicy() {
    var data = {id:this.id,
                number:this.number,
                company:this.company,
                startDate: this.startDate,
                endDate: this.endDate,
                vechicleId: this.vechicleId};
    this.policyService.addPolicy(data).subscribe(response => {
        console.log(response);
        alert("Dodano nową polisę.");
      },
      error => console.log(error));
  }

  updatePolicy() {
    var data = {id:this.id,
      number:this.number,
      company:this.company,
      startDate: this.startDate,
      endDate: this.endDate,
      vechicleId: this.vechicleId};
    this.policyService.editPolicy(data.id, data).subscribe(response => {
      console.log(response);
      alert("Zapisano zmiany.");
      },
      error => console.log(error));
  }
}
