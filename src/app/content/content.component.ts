import { PolicyAPIService } from './../policy-api.service';
import { Component, OnInit } from '@angular/core';
import {PolicyDetails} from '../policy-details';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']

})
export class ContentComponent implements OnInit {

  show = false;
  popularPolicy: PolicyDetails;
  popularList: PolicyDetails[];

  info: string;
  constructor(private service: PolicyAPIService) {

    this.popularPolicy = {'policyName': 'Jeevan Bhima',
      'description': ' Survival Beenfit Bonus plus 500000 on maturity'};
   }

  ngOnInit() {

     this.service.getPopularPolicies().
              subscribe(resp => this.popularList = resp);
  }

  showInfo(idx: number) {

   const selected = ++idx;


    this.info = 'Contact our Agent Ramesh 9494949889';

  }
}
