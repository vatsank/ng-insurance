import { PolicyAPIService } from './../policy-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Policy } from '../policy';

@Component({
  selector: 'app-policy-manager',
  templateUrl: './policy-manager.component.html',
  styleUrls: ['./policy-manager.component.css']
})
export class PolicyManagerComponent implements OnInit {

  policyData: Policy;
  status: string;
   show = false;

   btnText = 'ADD';
  @ViewChild('f') frm: any;
  policyList: Policy[];
  pos: number;
  constructor(private service: PolicyAPIService) { }

  ngOnInit() {
     this.service.getPolicies('life').subscribe(resp => this.policyList = resp);
  }

   reset() {
    this.frm.reset();
   }
   change(){

    this.show =true;
   }
  submit(frmData) {

    this.policyData = frmData;

    if(this.btnText ='ADD') {
      this.service.addPolicy(this.policyData,'life').subscribe(resp => {
         this.status = 'One Policy Added';
         this.policyList.push(this.policyData);
      }, error => { console.log(error); });
    }
    if(this.btnText ='UPDATE') {
      this.service.updatePolicy(this.policyData, 'life').subscribe(resp=>{
        this.status = 'One Policy updated';
        this.policyList[this.pos] = resp;
      });
    }
  }
edit(policy){

  this.btnText = 'UPDATE';
  this.policyData = policy;
  this.show = true;
  this.pos = this.policyList.indexOf(policy);


}

  delete(policy){

    const pos = this.policyList.indexOf(policy);
    this.service.removePolicy(policy, 'life').subscribe(resp => {
      this.policyList.splice(pos, 1);
      this.status = 'One Policy Deleted';

    });
  }
}
