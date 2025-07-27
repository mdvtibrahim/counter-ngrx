import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
// import {  } from "@ngrx/store";
import * as IndicatorAction from "./counter.action"
import { catchError, delay, interval, map, of, pipe, repeat, Subject, switchMap, takeUntil, tap } from "rxjs";


@Injectable()
export class IndicatorByCounterEffects{
    constructor(private action$ : Actions, private http : HttpClient){}
  
    poll$ = createEffect(()=>
    this.action$.pipe(
        ofType(IndicatorAction.indicator),
        switchMap(()=>
      interval(1000).pipe( 
        takeUntil(this.stop$), 
      switchMap(() =>
        this.http.get<{ value: number }>('https://ngrxapi-jwl7i5vwr-ibrahims-projects-988849cf.vercel.app/api/binary').pipe(
          map(res => {
            console.log('[Effect] API hit');
            return  IndicatorAction.pollIndicatorSuceess({ value: res.value })}),
          catchError(err => of(IndicatorAction.pollIndicatorFailure({ err }))),
          takeUntil(this.action$.pipe(ofType(IndicatorAction.stopIndicator)))
        )
      )
    )
  )
));
// stop the api subscribe
private stop$ = new Subject<void>();
stopListener$ = createEffect(() =>
  this.action$.pipe(
    ofType(IndicatorAction.stopIndicator),
    tap(() => {
      console.log('[Effect] stopIndicator received cancelling');
      this.stop$.next();
    })
  ), { dispatch: false }
);

}