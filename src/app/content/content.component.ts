import { PolicyAPIService } from './../policy-api.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {PolicyDetails} from '../policy-details';
import { TestimonyComponent } from '../testimony/testimony.component';
import {Comment} from '../comment';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']

})
export class ContentComponent implements OnInit, AfterViewInit {


  show = false;
  popularPolicy: PolicyDetails;
  popularList: PolicyDetails[];

  info: string;

  @ViewChild(TestimonyComponent) testimony: TestimonyComponent;
  comments: Comment[];

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

  ngAfterViewInit(): void {

   this.comments =  this.testimony.getLatestComments();
  }
}
