import { Component, Input, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

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

  addDriver() {
    var data = {id:this.id,
                firstName:this.firstName,
                lastName:this.lastName,
                pesel: this.pesel,
                street: this.street,
                postalCode: this.postalCode,
                city: this.city,
                drivingLicenceCategory: this.drivingLicenceCategory};
    this.driverService.addDriver(data).subscribe(response => {
        console.log(response);
        alert("Zapisano nowego kierowcę.");
      },
      error => console.log(error));
  }

  updateDriver() {
    var data = {id:this.id,
      firstName:this.firstName,
      lastName:this.lastName,
      pesel: this.pesel,
      street: this.street,
      postalCode: this.postalCode,
      city: this.city,
      drivingLicenceCategory: this.drivingLicenceCategory};
    this.driverService.editDriver(data.id, data).subscribe(response => {
      console.log(response);
      alert("Zapisano zmiany.");
      },
      error => console.log(error));
  }
}
