import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval,Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Lifecycle';
  num1 = 0;
  subscription: Subscription = new Subscription;
  // source =  interval(1000)
  intervalId: any = null;
  // subscription: Subscription;

  // ngOnInit(): void {
  //   this.intervalId = setInterval(() => {
  //     console.log('1 minute has passed');
  //   }, 60000);

  //   // this.subscription = someObservable.subscribe();
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalId);
  //   this.subscription.unsubscribe();
  // }
  //2nd sol.
  ngOnInit(): void {
    setInterval(() => 
      // console.log('1 minute has passed');
        this.numIncrement(this.num1), 1000);
  // this.subscription =   this.source.subscribe(()=> this.numIncrement(this.num1))
  }
  numIncrement(numrecived : number){
    this.num1++;
    console.log(this.num1)
  }
  ngOnDestroy(): void {
    clearInterval(this.num1) 
    console.log(this.num1)
  //  this.subscription.unsubscribe();       
  }
}
