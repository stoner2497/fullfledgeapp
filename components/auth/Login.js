import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput,ToastAndroid} from 'react-native'
import firebase from 'firebase'
import Header from '../partials/Header'
import Button from '../partials/Button'
import Card from '../partials/Card'
import Spinner from '../partials/Spinner'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import {connect} from 'react-redux'
import {emailChanged ,passwordChanged,onLogin} from '../Action'
class Login extends Component {
  onEmailChangedText  (text) {
    this.props.emailChanged(text)
  }
  onPasswordChangedText (text) {
      this.props.passwordChanged(text)
  }
  onLoggedIn ()  {
    email = this.props.email,
    password = this.props.password
    this.props.onLogin({email,password})
  }
    render() {
        return (
           <View style={Styles.Container}>
                <Card >
                <Header>
                    <Text>
                        LOGIN TO FITHUB
                    </Text>
                </Header>
               <View style={Styles.CardSection} >
                   <TextInput
                    placeholder='Email'
                    value = {this.props.email}
                    onChangeText={this.onEmailChangedText.bind(this)}
                    style={Styles.inputBox}
                   />
               </View>
               <View style={Styles.CardSection} >
                   <TextInput
                    placeholder='password'
                    value={this.props.password}
                    onChangeText={this.onPasswordChangedText.bind(this)}
                    secureTextEntry={true}
                    style={Styles.inputBox}
                   />
               </View>
              <View style={Styles.CardSection}>
            <Button onPress={this.onLoggedIn.bind(this)} >Login </Button>
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
        backgroundColor:'#C3FEFC',
        paddingTop:60,
    },
    Button:{
        alignItems:'center',
    }
})

const mapStateToProps = state => {
    return {
        email:state.auth.email,
        password:state.auth.password
    }
}


export default connect(mapStateToProps,{emailChanged,passwordChanged,onLogin})(Login)