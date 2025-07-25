import { createAction, props } from "@ngrx/store";



export const increment = createAction('[Counter] Increment')

export const decrement = createAction('[Counter] Decrement')

export const reset = createAction('[Counter] Reset')




















export const indicator = createAction('[Indictor] Poll')
export const pollIndicatorSuceess = createAction('[Indicator]PollSuccess',props<{value:number}>())
export const pollIndicatorFailure = createAction('[Indicator]PollFailure',props<{err:any}>())