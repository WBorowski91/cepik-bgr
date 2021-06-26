import { Component, Input, OnInit } from '@angular/core';
import { Vechicle } from 'src/app/models/vechicle';
import { VechicleService } from 'src/app/services/vechicle/vechicle.service';

@Component({
  selector: 'app-add-vechicle',
  templateUrl: './add-vechicle.component.html',
  styleUrls: ['./add-vechicle.component.css']
})
export class AddVechicleComponent implements OnInit {

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

  addVechicle() {
    var data = {id:this.id,
                brand:this.brand,
                model:this.model,
                year: this.year,
                color: this.color,
                registrationNumber: this.registrationNumber,
                ownerId: this.ownerId,
                policyId: this.policyId};
    this.vechicleService.addVechichle(data).subscribe(response => {
        console.log(response);
        alert("Dodano nowy pojazd.");
      },
      error => console.log(error));
  }

  updateVechicle() {
    var data = {id:this.id,
                brand:this.brand,
                model:this.model,
                year: this.year,
                color: this.color,
                registrationNumber: this.registrationNumber,
                ownerId: this.ownerId,
                policyId: this.policyId};
    this.vechicleService.editVechichle(data.id, data).subscribe(response => {
      console.log(response);
      alert("Zapisano zmiany.");
      },
      error => console.log(error));
  }
}
