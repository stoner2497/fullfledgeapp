import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Firebase from 'firebase'
import LandingPage from './components/partials/LandingPage'
import Header from './components/partials/Header'
import ActivityFeed from './components/ActivityFeed';
import Login from './components/auth/Login';
export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state={loggedIn:false}
  }
  componentWillMount() {
    //api call for firebase
    Firebase.initializeApp({
      apiKey: "AIzaSyCWPVntqZSBjmzOUJGaxJAHID1Fk36tWRI",
      authDomain: "carbide-digit-224306.firebaseapp.com",
      databaseURL: "https://carbide-digit-224306.firebaseio.com",
      projectId: "carbide-digit-224306",
      storageBucket: "carbide-digit-224306.appspot.com",
      messagingSenderId: "870725568586",
      appId: "1:870725568586:web:e598e84cb552b3e5"
    })
    Firebase.auth().onAuthStateChanged(user  => {
      if(user) {
        this.setState({loggedIn:true})
      }else {
        this.setState({loggedIn:false})
      }
    })
  }
  renderContent() {
    if(this.state.loggedIn) {
      return (
        <ActivityFeed />
      )
    }else {
      return (
        <Login />
      )
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
        {/* <LandingPage /> */}
        <Header >
          <Text>FITHUB</Text>
        </Header>
        {this.renderContent()}
        {/* <ActivityFeed /> */}
      </View>
    );
  }
}

