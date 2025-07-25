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
  count$!:Observable<number>
  animated$!:Observable<number>
  private poll! : Subscription
  indicator: any;
  isReset = false;
constructor(private store: Store, private http : HttpClient){}
ngOnInit(): void {
  this.count$ = this.store.select(selectCount)
  this.store.dispatch(IndicatorAction.indicator())
  this.animated$ = this.store.select(selectIndicate)
  // this.poll = interval(1000).pipe(
  //   switchMap(()=>this.http.get<{value:number}>('http://localhost:4000/api/toggle'))
  // ).subscribe(res=>{
  //  console.log(res.value);
  //   this.indicator = res.value
  // })
}

onIncrement(){
  this.store.dispatch(increment())
      this.poll.unsubscribe();
  // or
  // this.store.dispatch(CounterAction.increment())

}
OnDecrement(){
  this.store.dispatch(decrement())
      this.poll.unsubscribe();
    // or
  // this.store.dispatch(CounterAction.decrement())
}
onReset(){
  this.store.dispatch(CounterAction.reset())
  this.isReset = true
      this.poll.unsubscribe();
}
ngOnDestroy(): void {
      if (this.poll) {
      this.poll.unsubscribe();
    }
}
}
