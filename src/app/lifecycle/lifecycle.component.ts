import { Component, OnInit, Input, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit , OnChanges, OnDestroy {

    city: string;
    @Input() name: string;
    capital: string;
    constructor() {

      console.log('constructor called');

      console.log('name ======in constructor'+ this.name);
     }

    ngOnInit() {

      console.log('ng on init called');
      console.log('name ======in on Init'+ this.name);

      if(this.name === 'india'){
        this.capital = 'delhi';
      }
    }

    ngOnChanges (sc: SimpleChanges){

          const props = sc['name'];


          console.log('previous value' + props.previousValue);

             console.log('current value'+ props.currentValue);
    }
    ngOnDestroy(): void {

       console.log('Destroy called');
    }
  }

}
