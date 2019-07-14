import {EMAIL_CHANGED,PASSWORD_CHANGED,ON_LOADING,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from '../Action/types'


initialState = {
    email:"",
    password:"",
    user:{},
    loading:false,
    error:''
}

export default (state = initialState,action) => {
    console.log(action)
    switch(action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email:action.payload
            }
        case PASSWORD_CHANGED:
            return {
                ...state,
                password:action.payload
            }
        case ON_LOADING:
            return {
                ...state,
                loading:true,
                error:''
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user:action.payload,
                error:'',
                loading:false
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                error:action.payload,
                password:'',
                loading:false
            }
        default:
            return state
    }
}