import React, { Component } from 'react'
import {Text ,View,StyleSheet,TouchableWithoutFeedback} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux';


export default class ListItem extends Component {

    onRowPress() {
        Actions.Editemployee({employee:this.props.employee})
    }

    render() {
        const {name} = this.props.employee
        return (
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)} >
           <View style={Styles.CardSection}>
               <Text>
                   {name}
               </Text>
           </View>
           </TouchableWithoutFeedback>
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

