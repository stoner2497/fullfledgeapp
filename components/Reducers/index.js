import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer';
import EmployeeReducer from './employeeFormReducer'

export default combineReducers({
    auth:AuthReducer,
    emp:EmployeeReducer
});