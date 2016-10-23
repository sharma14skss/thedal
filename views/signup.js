import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Container,
  Content,
  InputGroup,
  Input,
  Icon,
  Button
} from 'native-base';
import login from './login';
import styles from './styles';

class signup extends login {
  gotoLogin(){
    Actions.pop()
  }
  render() {
    return <View
      style={[

      styles.loginContainer
    ]}>
      <Text style={styles.loginHeading}>Sign up</Text>

      <InputGroup style={styles.loginInput}>
        <Icon name='ios-mail-outline' style={styles.loginIconColor}/>
        <Input
          onChangeText={(userText) => this.setState({userText})}
          value={this.state.Text}
          placeholder={'E-mail'}
          keyboardType={'email-address'}/>
      </InputGroup>
      <InputGroup style={styles.loginInput}>
        <Icon name='ios-lock-outline' style={styles.loginIconColor}/>
        <Input
          onChangeText={(userPass) => this.setState({userPass})}
          value={this.state.userPass}
          placeholder={'Password'}
          secureTextEntry={true}/>
      </InputGroup>
     <Button style={styles.loginButton} onPress={this
        .Signup
        .bind(this)}>Sign up</Button>
      <View style={{flex:0,flexDirection: 'row',marginTop:10}}>
      <Text style={[styles.colorWhite,styles.font20]}>Already have an account?</Text>
      <TouchableOpacity onPress={this.gotoLogin.bind(this)}>
        <Text style={[styles.colorOrg,styles.font20]} > Sign in</Text>
      </TouchableOpacity>
      </View>

    </View>
  }
}

export default signup;