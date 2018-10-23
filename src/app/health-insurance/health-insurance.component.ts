import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-health-insurance',
  templateUrl: './health-insurance.component.html',
  styleUrls: ['./health-insurance.component.css']
})
export class HealthInsuranceComponent implements OnInit {

  names = ['Ramesh','Suresh','Shivani'];

  status :string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(param => {

      const srchName = param['name'];
      if (srchName !== undefined) {
      this.status = 'getting details of ' + srchName ;
      }
    });
  }

}
