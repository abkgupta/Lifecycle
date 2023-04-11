import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-intervalc',
  templateUrl: './intervalc.component.html',
  styleUrls: ['./intervalc.component.css']
})
export class IntervalcComponent implements OnInit, OnDestroy {
  counter=0;
  subscription: any;
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
    this.subscription = observable.subscribe(result=>console.log('Subscriber count '+result))
  }
  ngOnDestroy() {
    // clearInterval(this.counter) 
    // console.log(this.num1)
    // this.numIncrement
   this.subscription.unsubscribe();           //doubt
  }

}
