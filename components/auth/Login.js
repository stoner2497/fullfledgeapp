import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput,ToastAndroid} from 'react-native'
import firebase from 'firebase'
import Header from '../partials/Header'
import Button from '../partials/Button'
import Card from '../partials/Card'
import Spinner from '../partials/Spinner'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
class Login extends Component {
    constructor(props) {
        super(props) 
        this.state={
            email:'',
            password:'',
            error:'',
            loading:false
        }
    }

    onLoginClick () {
        const  {email,password ,error} = this.state
        this.setState({loading:true})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
             .catch(
                this.onLoginFailure.bind(this)
                )
        })
    }
    onLoginSuccess() {
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false
        })
    }
    onLoginFailure() {
        this.setState({error:ToastAndroid.show('Authentication Failed', ToastAndroid.LONG),loading:false})
    }
    onLoading() {
        if(this.state.loading) {
            return <Spinner size='small' />
        }
        return (
            <Button style={{justifyContent:'center'}} text='LOGIN' onPress={this.onLoginClick.bind(this)}/>
        )
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
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    style={Styles.inputBox}
                   />
               </View>
               <View style={Styles.CardSection} >
                   <TextInput
                    placeholder='password'
                    secureTextEntry={true}
                    style={Styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({password})}
                   />
               </View>
              <View style={Styles.CardSection}>
                    {this.onLoading()}
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
export default Login