import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Firebase from 'firebase'
import {Provider} from 'react-redux';
import store from './store'
import Router from './components/Router'
export default class App extends Component {
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
    
  }
  //conditional rendering
 
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

