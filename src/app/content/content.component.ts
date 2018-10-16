import { Component, OnInit } from '@angular/core';
import {PolicyDetails} from '../policy-details';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  popularPolicy: PolicyDetails;
  constructor() {

    this.popularPolicy = {'policyName': 'Jeevan Bhima',
      'description': ' Survival Beenfit Bonus plus 500000 on maturity'};
   }

  ngOnInit() {
  }

}
