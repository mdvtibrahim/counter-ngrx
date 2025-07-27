import { Component, OnDestroy, OnInit } from '@angular/core';
import { createAction, Store } from '@ngrx/store';
import { interval, Observable, Subscription, switchMap } from 'rxjs';
import { decrement, increment } from './state/counter.action';
import { selectCount, selectIndicate } from './state/counter.selector';
import * as CounterAction from "./state/counter.action"
import * as IndicatorAction from "./state/counter.action"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit , OnDestroy {
  count$!: Observable<number>;           // Observable for counter value from store
  animated$!: Observable<number>;        // Observable for polling indicator value from store
  private poll!: Subscription;           // Subscription for manual polling
  indicator: any;                        // UI animation
  isReset = false;

constructor(private store: Store, private http : HttpClient){}

ngOnInit(): void {
  // From select the current counter value from store
  this.count$ = this.store.select(selectCount)
  // From action - Dispatch action to start polling via NgRx Effect
  this.store.dispatch(IndicatorAction.indicator())
  // Subscribe to the latest indicator value from store
  this.poll = this.store.select(selectIndicate).subscribe(val => {
  this.indicator = val
  })

  // Optional: Manual polling example (if Effects are not used)
  // this.poll = interval(1000).pipe(
  //   switchMap(()=>this.http.get<{value:number}>('https://ngrxapi-jwl7i5vwr-ibrahims-projects-988849cf.vercel.app/api/binary'))
  // ).subscribe(res=>{
  //  console.log(res.value);
  //   this.indicator = res.value
  // })
}

 // Dispatch increment action and stop polling(if u want)
onIncrement(){
  this.store.dispatch(increment())
      // this.poll.unsubscribe(); // (if u want)
  // or
  // this.store.dispatch(CounterAction.increment())

}
  // Dispatch decrement action and stop polling(if u want)
OnDecrement(){
  this.store.dispatch(decrement())
      // this.poll.unsubscribe(); // (if u want)
    // or
  // this.store.dispatch(CounterAction.decrement())
}
  // Unsubscribe from polling on component destroy
onReset(){
  this.store.dispatch(CounterAction.reset());
  this.store.dispatch(CounterAction.stopIndicator()); // stops api polling
  this.isReset = true;
}
  // Unsubscribe from polling on component destroy
ngOnDestroy(): void {
  if (this.poll) {
  this.poll.unsubscribe();
 }
}
}
