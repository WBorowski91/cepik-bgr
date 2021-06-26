import { Component, Input, OnInit } from '@angular/core';
import { VechicleService } from 'src/app/services/vechicle/vechicle.service';

@Component({
  selector: 'app-vechicle-details',
  templateUrl: './vechicle-details.component.html',
  styleUrls: ['./vechicle-details.component.css']
})
export class VechicleDetailsComponent implements OnInit {

  constructor(private vechicleService: VechicleService) { }

  @Input() vechicle:any;
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  registrationNumber: string;
  ownerId: number;
  policyId: number;

  ngOnInit(): void {
    this.id = this.vechicle.Id;
    this.brand = this.vechicle.Brand;
    this.model = this.vechicle.Model;
    this.year = this.vechicle.Year;
    this.color = this.vechicle.Color;
    this.registrationNumber = this.vechicle.RegistrationNumber;
    this.ownerId = this.vechicle.OwnerId;
    this.policyId = this.vechicle.PolicyId;
  }

}
