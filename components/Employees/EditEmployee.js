import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput,Button,Picker} from 'react-native'
import Card from '../partials/Card'
import EmployeeForm from './EmployeeForm'
import {connect} from 'react-redux'
import {employeeUpdate,updateEmployee} from '../Action/employeeAction'
import _ from 'lodash'

class EditEmployee extends Component {
    componentWillMount() {
        _.each(this.props.employee,(value,prop) => {
            this.props.employeeUpdate({prop , value})
        })
    }

    onUpdate ()  {
        const {name , phone ,shift} = this.props;
        updateEmployee(name,phone,shift,this.props.employee.uid)
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <View style={Styles.CardSection}>
                    <Button onPress={this.onUpdate.bind(this)}  title="Save"/>
                </View>
            </Card>
        )
    }
}

const Styles = StyleSheet.create({
    CardSection:{
        padding:12,
        backgroundColor:'#fff',
        justifyContent:'center',
        flexDirection:'row',
        position:'relative',
        borderWidth:0,
    },
})

const mapStateToProps = (state) => {
    const {name,phone,shift} = state.emp

    return {name,phone,shift}
}

export default connect(mapStateToProps,{employeeUpdate})(EditEmployee)