import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-branch-details',
  templateUrl: './show-branch-details.component.html',
  styleUrls: ['./show-branch-details.component.css']
})
export class ShowBranchDetailsComponent implements OnInit {

  branchList: string[];

  choice:BehaviorSubject<string> = new BehaviorSubject<string>('');

  userEntry = this.choice.asObservable();

  constructor() { }

  ngOnInit() {
  }

  sendBranch(branch: string){

    this.choice.next(branch);
     console.log(branch);
  }
}
