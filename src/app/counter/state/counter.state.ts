// Interface for Counter state
export interface counterState{
    count: number
}

export const initialState : counterState = {
    count:0
}

// Interface for Indicator (polling result) state
export interface indicatorValue{
    value:number,
    err:any // Ideally use a better type
}
export const indicatorStateValue : indicatorValue = {
    value:0,
    err:'' // empty string to represent no error
}