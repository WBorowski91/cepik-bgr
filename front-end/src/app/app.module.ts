import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddDriverComponent } from './components/drivers/add-driver/add-driver.component';
import { DriverDetailsComponent } from './components/drivers/driver-details/driver-details.component';
import { DriverListComponent } from './components/drivers/driver-list/driver-list.component';
import { AddPolicyComponent } from './components/policies/add-policy/add-policy.component';
import { PoliciesListComponent } from './components/policies/policies-list/policies-list.component';
import { PolicyDetailsComponent } from './components/policies/policy-details/policy-details.component';
import { AddVehicleComponent } from './components/vehicles/add-vehicle/add-vehicle.component';
import { VehicleDetailsComponent } from './components/vehicles/vehicle-details/vehicle-details.component';
import { VehiclesListComponent } from './components/vehicles/vehicles-list/vehicles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddDriverComponent,
    DriverDetailsComponent,
    DriverListComponent,
    AddPolicyComponent,
    PoliciesListComponent,
    PolicyDetailsComponent,
    AddVehicleComponent,
    VehicleDetailsComponent,
    VehiclesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
