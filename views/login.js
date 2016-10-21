import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { database, auth } from '../lib/firebase';

class login extends Component {
  constructor(props){
      super(props);
      this.state = {
        login:false,
      }
    }
  componentDidMount() {
    this.Login('skss.vfx@gmail.com', '968811');
  }

  Login(username, password) {
    auth.signInWithEmailAndPassword(username, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + '---' + errorMessage);
    });
  }
  signup(username, password) {
    auth.createUserWithEmailAndPassword(username, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + '---' + errorMessage);
    });
  }
  signout() {
    auth.signOut().then(function () {
      // Sign-out successful.
    }, function (error) {
      // An error happened.
    });
  }

  render() {
    return <View><Text>login</Text></View>
  }

}
export default login; 