import firebase from 'firebase'
import  {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEE_FETCH} from './types';
import { Actions } from 'react-native-router-flux';


export const employeeUpdate = ({prop,value}) => {
    return {
        type:EMPLOYEE_UPDATE,
        payload:{prop,value}
    }
}
export const employeeCreate = ({name,phone,shift}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employee`)
        .push({name,phone,shift})
        .then(() => {
            
        dispatch({
            type:EMPLOYEE_CREATE
        })
        Actions.employee({type:'reset'})
        })
    
}
}

export const fetchEmployee = () => {
    const {currentUser} = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employee`)
            .on('value',snapshot => {
                dispatch({
                    type:EMPLOYEE_FETCH,
                    payload:snapshot.val()
                })
            })
    }
}

export const updateEmployee = ({name,phone,shift,uid}) => {
    const currentUser = firebase.auth()
    firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`)
      .set({name,phone,shift})
      .then(() => Actions.employee({type:'reset'}))
} 