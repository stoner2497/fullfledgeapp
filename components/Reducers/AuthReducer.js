import {email_changed , password_changed,login_user_success} from '../Action/types'

initialState = {
    email:"",
    password:"",
    user:''
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
        case login_user_success:
            return {
                ...state,
                user:action.user
            }
        default:
            return state
    }
}