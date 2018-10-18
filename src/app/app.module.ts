import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { ProcessQuoteComponent } from './process-quote/process-quote.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HighLightDirective } from './high-light.directive';
import { GridComponent } from './grid/grid.component';
import { ShowBranchDetailsComponent } from './show-branch-details/show-branch-details.component';
import { FilterPipe } from './filter.pipe';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    RequestQuoteComponent,
    ProcessQuoteComponent,
    TestimonyComponent,
    LoginComponent,
    LogoutComponent,
    HighLightDirective,
    GridComponent,
    ShowBranchDetailsComponent,
    FilterPipe,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule , FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents:  [ShowBranchDetailsComponent]
})
export class AppModule { }
