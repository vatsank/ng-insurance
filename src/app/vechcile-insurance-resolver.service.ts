import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Policy } from './policy';
import { Observable } from 'rxjs';
import { PolicyAPIService } from './policy-api.service';

@Injectable({
  providedIn: 'root'
})
export class VechcileInsuranceResolverService implements Resolve<Policy[]> {

  constructor(private service: PolicyAPIService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

           return this.service.getPolicies('vechicle');
  }

}

// let id = route.paramMap.get('person-id');
// console.log('Resolving for person id:' + id);

// return this.personService.getPerson(id).then(person => {

  // return this.personService.getPerson(id).then(person => {
  //   if (person) {
  //     return person;
  //   } else {
  //     this.router.navigate(['/person/personList']);
  //     return null;
  //   }
