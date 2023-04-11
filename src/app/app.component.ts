import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval,Observable,Subscription } from 'rxjs';

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
   counter =0;
  intervalId: any = null; 
//  private subscription: Subscription;

  ngOnInit(): void {
    // setInterval(() => {
    //   console.log('1 minute has passed');
    // }, 60000);
    // this.subscription =   this.source.subscribe(()=> this.numIncrement(this.num1))
    //2nd method
    const observable = new Observable(sub=>{
      console.log('observable call...'); 
      // setTimeout(()=>{
      //   sub.next('Observable working1');
      //   sub.next('Observable working2');
      //   sub.next('Observable working3');
      //   sub.next('Observable working4');
      // },1000)
      // let counter =0;
      setInterval(()=>{
        this.counter= this.counter+1;
        sub.next(this.counter);           
      },1000)
    })
    // this.subscription = observable.subscribe(result=>console.log('Subscriber count '+result))
  }

  // ngOnDestroy(): void {
  //   // clearInterval(this.intervalId);
  //   this.subscription.unsubscribe();
  // }
  //2nd sol.
  // ngOnInit(): void {
  //   setInterval(() => 
  //     // console.log('1 minute has passed');
  //       this.num1= this.num1+1, 1000);  
  // // this.subscription =   this.source.subscribe(()=> this.numIncrement(this.num1))
  // }
  // numIncrement(numRecieved: number){
  //   this.num1++;
  //   console.log(this.num1)
  // }
  ngOnDestroy() {
    // clearInterval(this.num1) 
    // console.log(this.num1)
    // this.numIncrement
  //  this.subscription.unsubscribe();           //doubt
  }
}
