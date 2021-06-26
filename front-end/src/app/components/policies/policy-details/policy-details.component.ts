import { Component, Input, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy/policy.service';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {

  constructor(private policyService: PolicyService) { }

  @Input() policy:any;
  id: number;
  number: string;
  company: string;
  startDate: Date;
  endDate: Date;

  ngOnInit(): void {
    this.id = this.policy.Id;
    this.number = this.policy.Number;
    this.company = this.policy.Company;
    this.startDate = this.policy.StartDate;
    this.endDate = this.policy.EndDate;
  }

}
