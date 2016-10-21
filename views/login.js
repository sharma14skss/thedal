import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { database, auth } from '../lib/firebase';
const token = null;

class login extends Component {
  constructor(props){
      super(props);
      this.state = {
        login:0,
        userText:'',
        userPass:'',

      }
    }
  componentWillMount(){
    
    AsyncStorage.getItem('token',(err,result)=>{
        if(result!=null){
          Actions.home();
        }else{
          this.setState({
            login:1,
          })
          auth.onAuthStateChanged(function(user) {
            if (user) {
              console.log(user)
              AsyncStorage.multiSet(
                [['token', user.uid], ['email', user.email]]
                , sucess = ()=>{
                  Actions.home();
                });
            } else {

            }
          });

        }
      })
  }
  componentDidMount() {
    
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
      console.log('signout')
    }, function (error) {
      console.log(error)
    });
  }

  render() {
    return <View style={{opacity:this.state.login}}>
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