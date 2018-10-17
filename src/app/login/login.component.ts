import { Component, OnInit } from '@angular/core';
import { CompCommunicationService } from '../comp-communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: CompCommunicationService) { }

  ngOnInit() {
  }

   validate() {
     console.log('inside validate');
     this.service.change('logged');
     return true;
   }
}
