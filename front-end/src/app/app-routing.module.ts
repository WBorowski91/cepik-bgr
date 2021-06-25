import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDriverComponent } from './components/drivers/add-driver/add-driver.component';
import { DriverDetailsComponent } from './components/drivers/driver-details/driver-details.component';
import { DriversListComponent } from './components/drivers/drivers-list/drivers-list.component';
import { AddVechicleComponent } from './components/vechicles/add-vechicle/add-vechicle.component';
import { VechicleDetailsComponent } from './components/vechicles/vechicle-details/vechicle-details.component';
import { VechiclesListComponent } from './components/vechicles/vechicles-list/vechicles-list.component';
import { AddPolicyComponent } from './components/policies/add-policy/add-policy.component';
import { PolicyDetailsComponent } from './components/policies/policy-details/policy-details.component';
import { PoliciesListComponent } from './components/policies/policies-list/policies-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
 
const routes: Routes = [
  {path: 'drivers', component: DriversListComponent},
  {path: 'drivers/:id', component: DriverDetailsComponent},
  {path: 'adddriver', component: AddDriverComponent},
  {path: 'vechicles', component: VechiclesListComponent},
  {path: 'vechicles/:id', component: VechicleDetailsComponent},
  {path: 'addvechicle', component: AddVechicleComponent},
  {path: 'policies', component: PoliciesListComponent},
  {path: 'policies/:id', component: PolicyDetailsComponent},
  {path: 'addpolicy', component: AddPolicyComponent},
  {path: 'mainpage', component: MainPageComponent},
  {path: '', redirectTo: 'mainpage', pathMatch: 'full'}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 