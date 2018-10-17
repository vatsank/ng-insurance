import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-process-quote',
  templateUrl: './process-quote.component.html',
  styleUrls: ['./process-quote.component.css']
})
export class ProcessQuoteComponent implements OnInit {

   @Input() requestedPolicy: string;
   @Output() quote: EventEmitter<string> = new EventEmitter();

   policyDetails: Map<string, string> = new Map();

    constructor() {
     this.policyDetails.set('jeevananand', 'one time premium');
     this.policyDetails.set('jeevanaasha', 'coverage for dependents');
     this.policyDetails.set('jeevanakashy', 'life coverage and bonus');


   }

  ngOnInit() {

  }

  sendQuote() {
      this.quote.emit(this.policyDetails.get(this.requestedPolicy));            );
  }
}
