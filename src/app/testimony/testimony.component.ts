import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment';
@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

   getLatestComments(): Comment[] {

      const latest: Comment[] = [
         {name: 'ramesh',
         comment: 'The Claims department was very prompt in resolving the issues'},
         {name: 'ganesh',
         comment: 'The Policy Document was received in record time'},
        ];


      return latest;
    }
}
