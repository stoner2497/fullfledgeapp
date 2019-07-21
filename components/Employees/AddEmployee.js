import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput,Button,Picker} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../Action/employeeAction'
import Card from '../partials/Card'
 class AddEmployee extends Component {
     onButtonPress () {
         const {name,phone,shift} = this.props;
         this.props.employeeCreate({name,phone,shift: shift || 'Monday'})
     }
    render() {
        return (
            <View style={Styles.Container}>
            <Card >
           <View style={Styles.CardSection} >
               <TextInput
                placeholder='Name'
                style={Styles.inputBox}
                value={this.props.name}
                onChangeText={text => this.props.employeeUpdate({prop:'name',value:text})}
               />
           </View>
           <View style={Styles.CardSection} >
               <TextInput
                placeholder='Contact'
                style={Styles.inputBox}
                value={this.props.phone}
                onChangeText={phone => this.props.employeeUpdate({prop:'phone',value:phone})}
               />
           </View>
           <View style={Styles.CardSection}>
                <Picker 
                style={Styles.inputBox}
                selectedValue={this.props.shift}
                onValueChange={value => this.props.employeeUpdate({prop:'shift',value})}
                >
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturday" value="Saturday" />
                <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
           </View>
                        
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