import {EMPLOYEE_FETCH} from '../Action/types'
const INITIAL_STATE = {}

export default (state = INITIAL_STATE,action ) => {
    switch(action.type){
        case EMPLOYEE_FETCH:  
            return action.payload
        default:
            return state

    }
}