import { createAction, props } from "@ngrx/store";


// form here taking action - Action for Counter feature - 'Increment' is the action type
export const increment = createAction('[Counter] Increment')

export const decrement = createAction('[Counter] Decrement')

export const reset = createAction('[Counter] Reset')

// form here taking action - 
// // Action for Indicator polling - 'Poll' is dispatched to trigger Effect
export const indicator = createAction('[Indictor] Poll')
// Action dispatched on successful polling response with value
export const pollIndicatorSuceess = createAction('[Indicator]PollSuccess',props<{value:number}>())
// Action dispatched on polling failure with error object
export const pollIndicatorFailure = createAction('[Indicator]PollFailure',props<{err:any}>())

// for stop the action
export const stopIndicator = createAction('[Indicator] Stop Polling');
