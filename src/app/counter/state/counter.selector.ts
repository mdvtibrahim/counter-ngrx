import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState, indicatorValue } from "./counter.state";
import { state } from "@angular/animations";


export const selectCounterState = createFeatureSelector<counterState>('counter')
export const selectIndicatorState = createFeatureSelector<indicatorValue>('indicate')

export const selectCount = createSelector(
    selectCounterState,
    (state:counterState) => state.count
)

export const selectIndicate = createSelector(
    selectIndicatorState,
    (state:indicatorValue) =>state.value
)