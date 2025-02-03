import * as actionsTypes from ".actionTypes"

const counterReducer=(state=0,action)=>{
    let newState;
    switch(action.type){
        case actionsTypes.INCREASE_COUNTER:
            return (newStatestate+action.payload

        case actionsTypes.DECREASE_COUNTER:
            return state-action.payload
        case actionsTypes.INCREASE_BY_TWO_COUNTER:
            return state+action.payload
        default:
            return state
    }
}