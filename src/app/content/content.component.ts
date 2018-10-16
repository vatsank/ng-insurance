import { PolicyAPIService } from './../policy-api.service';
import { Component, OnInit } from '@angular/core';
import {PolicyDetails} from '../policy-details';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']

})
export class ContentComponent implements OnInit {

  popularPolicy: PolicyDetails;
  popularList: PolicyDetails[];
  constructor(private service: PolicyAPIService) {

    this.popularPolicy = {'policyName': 'Jeevan Bhima',
      'description': ' Survival Beenfit Bonus plus 500000 on maturity'};
   }

  ngOnInit() {

     this.service.getPopularPolicies().
             subscribe(resp => this.popularList = resp);
  }

}
