import React ,{Component} from 'react';
import {View,Text,ImageBackground,Image,StyleSheet,Alert,TouchableHighlight} from 'react-native';
import Background from '../img/Background.png';
import google from '../img/google.png';
import insta from '../img/insta.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Button,Icon,Toast,Root } from 'native-base'
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast:false
        }
    }
    render() {
        return (
            <Root>
        <ImageBackground source={Background} style={Styles.background}>
        <View style={Styles.Container} >
          <View style={Styles.HeaderText}>
          <Text style={Styles.landingText} >
                FITHUB
            </Text>
          </View>
            <View style={Styles.allButtons}>
                <View style={Styles.firstButton} >
                    <Button rounded style={Styles.button}>
                        <Text style={Styles.buttonText}>
                            LOGIN
                        </Text>
                    </Button>
                </View>
                
                <View style={Styles.secondButton} >
                    <Button rounded style={Styles.button}>
                        <Text style={Styles.buttonText}>
                            REGISTER
                        </Text>
                    </Button>
                </View>
                
            <View style={Styles.footer}>
                <View style={Styles.footerText}>
                    <Text style={{color:'#03879B',fontWeight:'bold',fontSize:15}}>OR</Text>
                <Text style={{color:'#03879B',fontWeight:'bold',fontSize:15}}>LOGIN WITH</Text>
                </View>
                <View style={Styles.footerImage}>
                  <Button  
              onPress={()=>     Alert.alert('You tapped the button!')}>
                    <Icon name='logo-instagram' />
                            
                  </Button>  

                   <Button  
              onPress={()=>     Alert.alert('You tapped the button!')}  style={{color:'#03879B'}}>
                    <Icon name='logo-google'  />
                            
                  </Button>                  
                    
                </View>
                <View style={Styles.footerImage}>

                </View>
            </View>
            </View>
            
        </View>
        </ImageBackground>
        </Root>
        )
    }
}

const Styles = StyleSheet.create({
    footer:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:50
    },
    footerImage:{
        flexDirection:'row',
        paddingTop:50,
        justifyContent:'space-between',
    },
    footerText:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:52
    },  
    allButtons:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        paddingTop:40
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    },  
    secondButton:{
        paddingTop:23
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width:wp('35%'),
        height:hp('8%'),
        backgroundColor:'#03879B'
    },
    background:{
        width: wp('100%'),
        height: hp('100%')
    },
    landingText: {
        color:'#03879B',
        fontFamily: 'Arial',
        fontSize:35,
        fontWeight:'bold',
        textShadowColor:'black',
        textShadowOffset: {
            width: 0,
            height: 2
          },
          textShadowRadius: 2,
       
    },
    HeaderText:{
        justifyContent:'center',
        width:wp('100%'),
        height:hp('30%'),
        alignItems:'center'
    },
    Container:{
        flex:1,
        flexDirection:'column'
    }
})

export default LandingPage