import React from 'react'
import {View,StyleSheet} from 'react-native'
export default function CardSection(props) {    


    return (
        <View style={Styles.CardSection}>
            {props.children}
        </View>
    )
}
const Styles = StyleSheet.create({
    CardSection:{
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative',
        borderWidth:0
    }
})