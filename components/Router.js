import React from 'react'
import {Router, Scene, Actions,Switch} from 'react-native-router-flux'
import Login from './auth/Login'
import Employeelist from './Employees/EmployeeList'
import {connect} from 'react-redux'
import {isLoggedIn} from './Action/authAction'
import Firebase from 'firebase'
import AddEmployee from './Employees/AddEmployee'
class RouterComponent extends React.Component{
    constructor(props) {
        super(props);
        console.log('im running after first')
      
    }
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                  <Switch hideNavBar>
                    <Scene key="main">
                    <Scene key="employee"
                    onRight={() => Actions.Addemployee()}
                    rightTitle="ADD"
                    drawer={true}
                    component={Employeelist}
                    title="Employee"  />
                        <Scene key="Addemployee"    
                        component={AddEmployee}
                        title="Employee"  
                        />
                    </Scene>
                    <Scene key="auth" >
                        <Scene key="login"
                        component={Login}
                        title="login"
                        />
                    </Scene>
                    </Switch>
                </Scene>
            </Router>
        )
    }
}



const mapStateToProps = ({auth}) => {
    const {authenticated} = auth
    return {authenticated}
}
export default connect(mapStateToProps,{})(RouterComponent)