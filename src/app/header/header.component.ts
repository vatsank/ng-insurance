import { PageLink } from './../page-link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  linkTxt = 'Home';

  linkList: PageLink[] = [
    {linkRef: 'register', linkText: 'Registration'},
    {linkRef: 'home', linkText: 'Home'},
    {linkRef: 'policy', linkText: 'View policy'},
    {linkRef: 'quote', linkText: 'Get Quote'}




  ];


  majheading: string;
  logo: string;
  constructor() {

    this.majheading = 'Insurance Corporation';
    this.logo = 'assets/images/logo.jpg';
   }

  ngOnInit() {
  }

}
