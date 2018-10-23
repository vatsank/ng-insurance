import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ShowBranchDetailsComponent } from './show-branch-details/show-branch-details.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  userOption: string;
  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  setViewRef(viewRef) {
    this.viewRef = viewRef;
  }

  addComponent(compToAdd: any) {

     let  branches = ['Kanchipuram','vellore','trichy','pondy'];
     const factory = this.resolver.resolveComponentFactory(compToAdd);
     const compRef =  factory.create(this.viewRef.parentInjector);


      const userLocation = localStorage.getItem('location');

      if(userLocation ==='chennai'){
          branches = ['chromepet','keelkattalai','madipakkam','annanagar','omr'];
      }


           (<ShowBranchDetailsComponent>compRef.instance).branchList = branches;


      this.viewRef.insert(compRef.hostView);

 return   (<ShowBranchDetailsComponent>compRef.instance).userEntry;

      // setTimeout(()=>{
      //   this.viewRef.detach();
      // },5000);
  }
  remove() {
    this.viewRef.detach();
  }
}
