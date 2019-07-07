import {email_changed , password_changed,login_user_success,login_user_failure, on_loading} from '../Action/types'

initialState = {
    email:"",
    password:"",
    user:null,
    loading:false,
    error:''
}

export default (state = initialState,action) => {
    switch(action.type) {
        case email_changed:
            return {
                ...state,
                email:action.payload
            }
        case password_changed:
            return {
                ...state,
                password:action.payload
            }
        case on_loading:
            return {
                ...state,
                loading:true,
                error:''
            }
        case login_user_success:
            return {
                ...state,
                user:action.payload,
                error:'',
                loading:false
            }
        case login_user_failure:
            return {
                ...state,
                error:"Authenctication Failed",
                password:'',
                loading:false
            }
        default:
            return state
    }
}