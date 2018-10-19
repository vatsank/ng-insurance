import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit {

  health = 'assets/images/health.png';
  life = 'assets/images/life.png';
  vechile= 'assets/images/vechile.png'
  constructor() { }

  ngOnInit() {
  }

}
