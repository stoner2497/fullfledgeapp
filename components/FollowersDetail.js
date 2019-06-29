import React , {Component} from 'react'
import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native'
import comment from './img/comment.png'
import Like from './img/like.png'
import Card from './partials/Card'
import CardSection from './partials/CardSection'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
export default class FollowersDetail extends Component {
    state={
      likes:8000
    }
    render() {
     const {title,image,thumbnail_image,artist} = this.props.album
      return (
      <Card>
        <CardSection>
          <View>
            <Image style={Styles.profileImage} source={{uri:thumbnail_image}} />
          </View>
          <View style={Styles.TextConatiner}>
          <Text style={{fontSize:18 ,fontWeight:'bold'}}>{title}</Text>
          <Text>{artist}</Text>   
          </View>             
          </CardSection>
          <CardSection>
            <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Text>
          </CardSection>
          <CardSection >
            
          <View>
            <Image style={Styles.Postimage} source={{uri:image}} />
          </View>
          </CardSection>
        <CardSection>
        <View style={Styles.footerCard}>
            <TouchableHighlight onPress={() => {this.setState({likes: this.state.likes+1})}} underlayColor="white" >
          <Image source={Like}  style={Styles.like}/>
          </TouchableHighlight>
          <View style={Styles.likesNumber}>
            <Text style={{fontSize:20}}>{this.state.likes}</Text>
          </View>
          <TouchableHighlight onPress={() => {this.setState({likes: this.state.likes+1})}} underlayColor="white" >
          <Image source={comment} style={{marginLeft:10,width:widthPercentageToDP('8%'),height:heightPercentageToDP('5%')}}/>
          </TouchableHighlight>
          <View style={Styles.likesNumber}>
            <Text style={{fontSize:20,marginLeft:5}}>{this.state.likes}</Text>
          </View>
        </View>
        </CardSection>
      </Card>
    )
    }
}

const Styles = StyleSheet.create({
  TextConatiner:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  profileImage:{
    width:widthPercentageToDP('11%'),
    height:heightPercentageToDP('7%'),
    marginRight:10,
    marginLeft:5,
  },
  Postimage:{
    width:widthPercentageToDP('92%'),
    height:heightPercentageToDP('40%'),
    marginLeft:2,
    marginRight:2
  },
  like:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginLeft:5
  },
  likesNumber:{
    flexDirection:'row',
    justifyContent:'center',

    alignItems:'center'
  },
  footerCard:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})