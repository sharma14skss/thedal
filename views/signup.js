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
import login from './login';

class signup extends login {
    render() {
    return <View>
    <Text>Signup</Text>
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
      <TouchableOpacity onPress={this.Signup.bind(this)}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Actions.pop()}>
        <Text>Login</Text>
      </TouchableOpacity>
      
      </View>
  }
}

export default signup;