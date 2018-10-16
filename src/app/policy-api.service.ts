import { PolicyDetails } from './policy-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyAPIService {

  baseURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getPopularPolicies(): Observable<PolicyDetails[]> {

    return this.http.get<PolicyDetails[]>(this.baseURL + 'popular');
  }
}
