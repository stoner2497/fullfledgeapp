import React, { Component } from 'react'
import _ from 'lodash'
import {View,Text,ListView} from 'react-native'
import {connect} from 'react-redux'
import {fetchEmployee} from '../Action/employeeAction'
import  ListItem from './ListItem';
 class EmployeeList extends Component {
     componentWillMount() {
         this.props.fetchEmployee()
         this.createDataSource(this.props)
         
     }
     componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
     }
     createDataSource({employees}) {
         const ds = new ListView.DataSource({
             rowHasChanged:(r1,r2) => r1 !== r2
         })
         this.DataSource = ds.cloneWithRows(employees)
     }
     renderRow (employees) {
         return <ListItem employee={employees} />
     }
    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource = {this.DataSource}
                renderRow = {this.renderRow} />
        )
    }
}

const mapStateToProps = state => {
    const employees  =  _.map(state.employee, (val,uid) => {
        return {...val,uid}
    })
    return { employees }
}

export default connect(mapStateToProps,{fetchEmployee})(EmployeeList)