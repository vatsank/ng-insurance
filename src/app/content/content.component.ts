import { PolicyAPIService } from './../policy-api.service';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {PolicyDetails} from '../policy-details';
import { TestimonyComponent } from '../testimony/testimony.component';
import {Comment} from '../comment';
import { Agent } from '../agent';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']

})
export class ContentComponent implements OnInit, AfterViewInit {


  show = false;
  popularPolicy: PolicyDetails;
  popularList: PolicyDetails[];
  agentList: Agent[]
  comments: Comment[];
  bgColor = 'yellow';
  info: string;

  srchString = '';

  @ViewChild(TestimonyComponent) testimony: TestimonyComponent;
  heading: string[];

  constructor(private service: PolicyAPIService, private detector: ChangeDetectorRef) {

    this.popularPolicy = {'policyName': 'Jeevan Bhima',
      'description': ' Survival Beenfit Bonus plus 500000 on maturity'};
   }

  ngOnInit() {

     this.service.getPopularPolicies().
              subscribe(resp => this.popularList = resp);

              this.service.getAgents().subscribe(resp =>{
                this.agentList = resp;
                this.heading = Object.keys(this.agentList[0]);
              });
  }

  showInfo(idx: number) {

   const selected = ++idx;


    this.info = 'Contact our Agent Ramesh 9494949889';

  }

  ngAfterViewInit(): void {

   this.comments =  this.testimony.getLatestComments();
    this.detector.detectChanges();
  }
}
