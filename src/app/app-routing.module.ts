import { ProcessQuoteComponent } from './process-quote/process-quote.component';
import { LogoutComponent } from './logout/logout.component';
import { PolicyManagerComponent } from './policy-manager/policy-manager.component';
import { ContentComponent } from './content/content.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegistrationComponent},
  {path: 'home' , component: ContentComponent},
  {path: 'policy', component: PolicyManagerComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'quote', component: ProcessQuoteComponent},
  {path: '**' , redirectTo: 'login'}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
