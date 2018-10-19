import { Component, OnInit } from '@angular/core';
import { CompCommunicationService } from '../comp-communication.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  formConfig = [ {

    type: 'text', name: 'userName',
             constraint: Validators.required, label: 'User Name'
  }, {
    type: 'password', name: 'passWord' , constraint: Validators.required,
    label: 'Pass Word'
  }];


  constructor(private service: CompCommunicationService,
          private builder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.builder.group({});

    this.formConfig.forEach(eachControl => {
      this.loginForm.addControl(eachControl.name,
             new FormControl('', [eachControl.constraint]));
    });
  }

   validate() {

     let  result = false;
    console.log('inside validate');

     const uname = this.loginForm.controls.userName.value;
     const pword = this.loginForm.controls.passWord.value;

     if(uname === 'india' && pword=== 'india'){
            this.service.change('logged');
            localStorage.setItem('location', 'chennai');
        result = true;
     }
     return result;
   }
}
