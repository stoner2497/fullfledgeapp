import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_FAILURE,LOGIN_USER_SUCCESS,ON_LOADING} from './types'
import {Actions} from 'react-native-router-flux'
import firebase from 'firebase'
export const emailChanged = (text) => {
    return {
        type:EMAIL_CHANGED,
        payload:text
    }
}
export const passwordChanged = (text) => {
    return {
        type:PASSWORD_CHANGED,
        payload:text
    }
}

export const onLogin = ({email,password}) =>  {
    return (dispatch) => {
        dispatch({type:ON_LOADING})
        firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => onLoginUser(dispatch,user))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => onLoginUser(dispatch,user))
        .catch(err => onLoginUserFail(dispatch,err))
    })
    }
}

const onLoginUser = (dispatch,user) => {
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    })
    Actions.main()
}

const onLoginUserFail = (dispatch,err) => {
    dispatch({
        type:LOGIN_USER_FAILURE,
        payload:err
    })
}