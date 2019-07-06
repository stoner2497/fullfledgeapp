import {email_changed,password_changed,login_user_success} from './types'
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
        firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user =>dispatch({
        type:login_user_success,
        payload:user
    }))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => console.log(user))
         .catch(err => {
                console.log(err) 
         }
            
            )
    })
    }
    
}