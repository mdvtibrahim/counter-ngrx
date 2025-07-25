export interface counterState{
    count: number
}

export const initialState : counterState = {
    count:0
}
export interface indicatorValue{
    value:number,
    err:any
}
export const indicatorStateValue : indicatorValue = {
    value:0,
    err:''
}