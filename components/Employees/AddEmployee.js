import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput,Button,Picker} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../Action/employeeAction'
import Card from '../partials/Card'
import EmployeeForm from './EmployeeForm'
class AddEmployee extends Component {
     onButtonPress () {
         const {name,phone,shift} = this.props;
         this.props.employeeCreate({name,phone,shift: shift || 'Monday'})
     }
    render() {
        console.log(this.props.employee)
        return (
            <View style={Styles.Container}>
            <Card >
            <EmployeeForm {...this.props} />
                        
          <View style={Styles.CardSection}>
             <Button onPress={this.onButtonPress.bind(this)} title="add employee" />
            </View>  
        </Card>
       </View> 
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
    inputBox:{
        width:widthPercentageToDP('75%'),
        height:heightPercentageToDP('9%'),
        borderBottomWidth:1,
        borderColor:'#63E0F9'
    },
    Container:{
        flex:1,
        paddingTop:60,
    },
    Button:{
        alignItems:'center',
    }
})

const mapStateToProps = (state) => {
    const {name,phone,shift} = state.emp

    return { name, phone ,shift}
 };

export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(AddEmployee)