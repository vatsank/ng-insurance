import { Component, OnInit } from '@angular/core';
import { CompCommunicationService } from '../comp-communication.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
          private builder: FormBuilder,private router: Router) { }

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

     if(uname === 'india' && pword === 'india'){
            this.service.change('logged');
            localStorage.setItem('location', 'chennai');
            sessionStorage.setItem('status', 'logged');
            this.router.navigate(['/home']);


        result = true;
     }
     return result;
   }
}
