import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {FlatHeader} from 'react-native-flat-header'
 function Header(props) {
    const {HeaderText, Header} = Styles
    return (
        <FlatHeader
        style={Header}
        centerContent={
            <Text style={HeaderText}>
                {props.children}    
            </Text>
        }
        />
    )
}

const Styles = StyleSheet.create({
    Header:{
        backgroundColor:'#047481',
        shadowColor:'#1ABCCE',
        shadowOffset: {width:0,height:2},
        shadowOpacity: 1.5,
        shadowRadius:2,
        elevation:2,
    },
    HeaderText:{
        color:'white',
        fontWeight:'bold',
        fontFamily:'Times New Roman'
    }
})
export default Header