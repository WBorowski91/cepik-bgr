import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriversListComponent } from './components/drivers/drivers-list/drivers-list.component';
import { DriverDetailsComponent } from './components/drivers/driver-details/driver-details.component';
import { AddDriverComponent } from './components/drivers/add-driver/add-driver.component';
import { VechiclesListComponent } from './components/vechicles/vechicles-list/vechicles-list.component';
import { PoliciesListComponent } from './components/policies/policies-list/policies-list.component';
import { AddVechicleComponent } from './components/vechicles/add-vechicle/add-vechicle.component';
import { AddPolicyComponent } from './components/policies/add-policy/add-policy.component';
import { VechicleDetailsComponent } from './components/vechicles/vechicle-details/vechicle-details.component';
import { PolicyDetailsComponent } from './components/policies/policy-details/policy-details.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { VechicleService } from './services/vechicle/vechicle.service';
import { DriverService } from './services/driver/driver.service';
import { PolicyService } from './services/policy/policy.service';
 
@NgModule({
  declarations: [
    AppComponent,
    DriversListComponent,
    DriverDetailsComponent,
    AddDriverComponent,
    VechiclesListComponent,
    PoliciesListComponent,
    AddVechicleComponent,
    AddPolicyComponent,
    VechicleDetailsComponent,
    PolicyDetailsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DriverService,
    PolicyService,
    VechicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 