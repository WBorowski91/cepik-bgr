import { Component, Input, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver/driver.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  constructor(private driverService: DriverService) { }

  @Input() driver:any;
  id: number;
  firstName: string;
  lastName: string;
  pesel: string;
  street: string;
  postalCode: string;
  city: string;
  drivingLicenceCategory: string;

  ngOnInit(): void {
    this.id = this.driver.Id;
    this.firstName = this.driver.FirstName;
    this.lastName = this.driver.LastName;
    this.pesel = this.driver.Pesel;
    this.street = this.driver.Street;
    this.postalCode = this.driver.PostalCode;
    this.city = this.driver.City;
    this.drivingLicenceCategory = this.driver.DrivingLicenceCategory;
  }

}
