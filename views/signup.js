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
import {
  Container,
  Content,
  InputGroup,
  Input,
  Icon,
  Button,
  Spinner
} from 'native-base';
import * as Animatable from 'react-native-animatable';
import authController from './authController';
import styles from './styles';

class signup extends authController {
  gotoLogin() {
    Actions.pop();
  }
  render() {
    return <View
      style={[
        styles.loginContainer
      ]}>
      <Text style={styles.loginHeading}>Sign up</Text>

      <Animatable.View ref="email">
        <InputGroup style={styles.loginInput} >
          <Icon name='ios-mail-outline' style={styles.loginIconColor} />
          <Input
            onChangeText={(userText) => this.setState({ userText })}
            value={this.state.Text}
            placeholder={this.state.emailPlace}
            keyboardType={'email-address'} />
        </InputGroup>
      </Animatable.View>
      <Animatable.View ref="pass">
        <InputGroup style={styles.loginInput}>
          <Icon name='ios-lock-outline' style={styles.loginIconColor} />
          <Input
            onChangeText={(userPass) => this.setState({ userPass })}
            value={this.state.userPass}
            placeholder={this.state.passPlace}
            secureTextEntry={true} />
        </InputGroup>
      </Animatable.View>
      <Button style={styles.loginButton} onPress={this
        .Signup
        .bind(this)} disabled={this.state.btn}>Sign up</Button>
        <Spinner size={'small'} style={{ opacity: this.state.spinnerOp }} color='#fff' />
      <View style={{ flex: 0, flexDirection: 'row', marginTop: 10 }}>
        <Text style={[styles.colorWhite, styles.font20]}>Already have an account?</Text>
        <TouchableOpacity onPress={this.gotoLogin.bind(this)}>
          <Text style={[styles.colorOrg, styles.font20]} > Sign in</Text>
        </TouchableOpacity>
      </View>

    </View>
  }
}

export default signup;