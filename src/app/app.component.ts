import { ShowBranchDetailsComponent } from './show-branch-details/show-branch-details.component';
import { ComponentAdderService } from './component-adder.service';
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Insurance';
  userName = 'ramesh';
  currentDate = new Date();

  salary = 45000;


  @ViewChild('placeHolder', {read: ViewContainerRef}) viewRef: ViewContainerRef;
  branch: string;
  constructor(private service: ComponentAdderService) {

  }

  ngOnInit(): void {
}

showGrid(){

  this.service.setViewRef(this.viewRef);
  this.service.addComponent(ShowBranchDetailsComponent).subscribe(resp => {
    this.branch = resp;
     if( this.branch !== ''){
             this.service.remove();
         }
  });
}
}
