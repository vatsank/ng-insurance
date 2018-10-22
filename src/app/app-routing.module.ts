import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';
import { ProcessQuoteComponent } from './process-quote/process-quote.component';
import { LogoutComponent } from './logout/logout.component';
import { PolicyManagerComponent } from './policy-manager/policy-manager.component';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanDeactivate } from '@angular/router';
import { ShowBranchDetailsComponent } from './show-branch-details/show-branch-details.component';
import { UniversalGuard } from './universal.guard';
import { VehcileInsuranceComponent } from './vehcile-insurance/vehcile-insurance.component';

const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegistrationComponent , canActivate:[UniversalGuard], canDeactivate: [UniversalGuard]},
  {path: 'home' , component: ContentComponent, canActivate: [UniversalGuard]},
  {path: 'policy', component: ViewpolicyComponent, canActivate: [UniversalGuard],children: [
     {path: 'health',component: HealthInsuranceComponent },
     {path:'health/:name', component: HealthInsuranceComponent},
     {path: 'life',component: PolicyManagerComponent },
     {path: 'vehcile', component: VehcileInsuranceComponent}]},
  {path: 'logout', component: LogoutComponent },
  {path: 'quote', component: ProcessQuoteComponent ,canActivate:[UniversalGuard]},
  {path: '**' , redirectTo: 'login'}





];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
