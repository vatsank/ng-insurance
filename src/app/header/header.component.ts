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
    {linkRef: 'home.html', linkText: 'Home'},
    {linkRef: 'Products.html', linkText: 'Products'},
    {linkRef: 'Claims.html', linkText: 'Claims'},
    {linkRef: 'Payment.html', linkText: 'Payments'},
    {linkRef: 'Payment.html', linkText: 'Payments'}

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
