import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
// import {  } from "@ngrx/store";
import * as IndicatorAction from "./counter.action"
import { catchError, delay, interval, map, of, pipe, repeat, switchMap } from "rxjs";


@Injectable()
export class IndicatorByCounterEffects{
    constructor(private action$ : Actions, private http : HttpClient){}
  
    poll$ = createEffect(()=>
      interval(1000).pipe(  
      switchMap(() =>
        this.http.get<{ value: number }>('https://ngrxapi-jwl7i5vwr-ibrahims-projects-988849cf.vercel.app/api/binary').pipe(
          map(res => IndicatorAction.pollIndicatorSuceess({ value: res.value })),
          catchError(err => of(IndicatorAction.pollIndicatorFailure({ err })))
        )
      )
    )
  );
}