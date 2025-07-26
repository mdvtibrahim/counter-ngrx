import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState, indicatorValue } from "./counter.state";
import { state } from "@angular/animations";

// Select the 'counter' feature state
export const selectCounterState = createFeatureSelector<counterState>('counter')
// Select the 'indicate' feature state
export const selectIndicatorState = createFeatureSelector<indicatorValue>('indicate')

// Selector to get 'count' value from counter state
export const selectCount = createSelector(
    selectCounterState,
    (state:counterState) => state.count
)

// Selector to get 'value' from indicator polling state
export const selectIndicate = createSelector(
    selectIndicatorState,
    (state:indicatorValue) =>state.value
)