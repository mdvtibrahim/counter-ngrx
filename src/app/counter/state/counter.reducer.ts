import { createAction, createReducer, on } from "@ngrx/store";
import { indicatorStateValue, initialState } from "./counter.state";
import * as CounterAction from "./counter.action"
import * as IndicatorAction from "./counter.action"
import { state } from "@angular/animations";

// Reducer for Counter State
export const counterReducer = createReducer(
    initialState,
    on(CounterAction.increment, state => ({...state, count : state.count + 1})), // Increase counter
    on(CounterAction.decrement, (state) => ({...state, count:state.count - 1})),  // Decrease counter
    on(CounterAction.reset, state => ({...state , count:0})) // Reset counter to 0
)

// Reducer for Polling Indicator State
export const IndicatorReducer = createReducer(
    indicatorStateValue,
    on(IndicatorAction.pollIndicatorSuceess, (state, {value})=>({
        ...state,
        value,  // Update value from polling result
        err:null
    })),
    on(IndicatorAction.pollIndicatorFailure, (state,{err})=>({
        ...state,
        err // Update error state
    }))
)