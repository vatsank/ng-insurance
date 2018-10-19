import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate , CanDeactivate<Object> {

  canDeactivate(component: Object, currentRoute: ActivatedRouteSnapshot, currentState:
     RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {

      return confirm('are you sure');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if (sessionStorage.getItem('status') === 'logged'){
        return true;
      } else {
    return false;
      }
  }
}
