import React, { Component } from 'react'
import {Text ,View,StyleSheet} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export default class ListItem extends Component {
    render() {
        const {name} = this.props.employee
        console.log(name)
        return (
           <View style={Styles.CardSection}>
               <Text>
                   {name}
               </Text>
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

