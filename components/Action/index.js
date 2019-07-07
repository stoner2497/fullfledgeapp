import {email_changed,password_changed,login_user_success,login_user_failure, on_loading} from './types'
import firebase from 'firebase'
export const emailChanged = (text) => {
    return {
        type:email_changed,
        payload:text
    }
}
export const passwordChanged = (text) => {
    return {
        type:password_changed,
        payload:text
    }
}

export const onLogin = ({email,password}) =>  {
    return (dispatch) => {
        dispatch({type:on_loading})
        firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => onLoginUser(dispatch,user))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => onLoginUser(dispatch,user))
         .catch(() => {
                onLoginUserFail(dispatch)
         })
    })
    }
}

const onLoginUserFail = (dispatch,user) => {
    dispatch({
        type:login_user_failure
    })
}

const onLoginUser = (dispatch,user) => {
    dispatch({
        type:login_user_success,
        payload:user
    })
}