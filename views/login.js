import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { database, auth } from '../lib/firebase';


class login extends Component {
  constructor(props){
      super(props);
      this.state = {
        login:false,
        userText:'',
        userPass:'',
      }
    }
  componentWillMount(){

  }
  componentDidMount() {
   auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
        Actions.home();
      } else {
         console.log(user)
      }
    });
  }

  Login() {
    auth.signInWithEmailAndPassword(this.state.userText, this.state.userPass).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + '---' + errorMessage);
    });
  }
  Signup(username, password) {
    auth.createUserWithEmailAndPassword(this.state.userText, this.state.userPass).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + '---' + errorMessage);
    });
  }
  Signout() {
    auth.signOut().then(function () {
      // Sign-out successful.
    }, function (error) {
      // An error happened.
    });
  }

  render() {
    return <View>
    <Text>Login</Text>
    <TextInput
        onChangeText={(userText) => this.setState({userText})}
        value={this.state.Text}
        placeholder={'email'}
        keyboardType={'email-address'}
      />
      <TextInput
        onChangeText={(userPass) => this.setState({userPass})}
        value={this.state.userPass}
        placeholder={'password'}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={this.Login.bind(this)}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Actions.signup}>
        <Text>Signup</Text>
      </TouchableOpacity>
      </View>
  }

}
export default login; 