import React from 'react'
import {Router, Scene, Actions} from 'react-native-router-flux'
import Login from './auth/Login'
import Employeelist from './Employees/EmployeeList'
import AddEmployee from './Employees/AddEmployee'
 function RouterComponent() {
    return (
        <Router>
        <Scene key="root" hideNavBar>
        <Scene key="auth" >
             <Scene key="login"
             component={Login}
             title="login"
              />
        </Scene>
        <Scene key="main">
           <Scene key="employee"
           onRight={() => Actions.Addemployee()}
           rightTitle="ADD"
            component={Employeelist}
            title="Employee"  />
            <Scene key="Addemployee"
            component={AddEmployee}
            title="Employee"  
            />
           </Scene>
        </Scene>
        </Router>
    )
}

export default RouterComponent