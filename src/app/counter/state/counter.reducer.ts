import { createAction, createReducer, on } from "@ngrx/store";
import { indicatorStateValue, initialState } from "./counter.state";
import * as CounterAction from "./counter.action"
import * as IndicatorAction from "./counter.action"
import { state } from "@angular/animations";

export const counterReducer = createReducer(
    initialState,
    on(CounterAction.increment, state => ({...state, count : state.count + 1})),
    on(CounterAction.decrement, (state) => ({...state, count:state.count - 1})),
    on(CounterAction.reset, state => ({...state , count:0}))
)






export const IndicatorReducer = createReducer(
    indicatorStateValue,
    on(IndicatorAction.pollIndicatorSuceess, (state, {value})=>({
        ...state,
        value,
        err:null
    })),
    on(IndicatorAction.pollIndicatorFailure, (state,{err})=>({
        ...state,
        err
    }))
)