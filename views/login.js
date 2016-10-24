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
import {
  Container,
  Content,
  InputGroup,
  Input,
  Icon,
  Button
} from 'native-base';
import { database, auth } from '../lib/firebase';

import styles from './styles';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 0,
      userText: '',
      userPass: ''
    }
  }
  componentWillMount() {
    // this.Signout();
    let self = this;
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        self.saveUser(user);
        Actions.home({ type: "reset" });
      } else {
        self.setState({ login: 1 })
      }
    });

  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  saveUser(user) {
    database
      .ref('users/' + user.uid)
      .set({ username: user.email, uid: user.uid, name: user.displayName, photoUrl: user.photoURL, verified: user.emailVerified })
  }

  Login() {
    auth
      .signInWithEmailAndPassword(this.state.userText, this.state.userPass)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + '---' + errorMessage);
      });
  }
  Signup(username, password) {
    let self = this;
    auth
      .createUserWithEmailAndPassword(this.state.userText, this.state.userPass)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + '---' + errorMessage);

      });
  }
  Signout() {
    let self = this;
    auth
      .signOut()
      .then(function () {
        console.log('signout')
        self.setState({ login: 1 })
        Actions.login();

      }, function (error) {
        console.log(error)
      });
  }
  forgotPassword(email) {
    auth.sendPasswordResetEmail(email).then(function () {
      alert('E-mail send')
    }, function (error) {
      alert(error)
    });

  }

  render() {
    return <View
      style={[
        {
          opacity: this.state.login
        },
        styles.loginContainer
      ]}>
      <Text style={styles.loginHeading}>Sign in</Text>

      <InputGroup style={styles.loginInput}>
        <Icon name='ios-mail-outline' style={styles.loginIconColor} />
        <Input
          onChangeText={(userText) => this.setState({ userText })}
          value={this.state.Text}
          placeholder={'E-mail'}
          keyboardType={'email-address'} />
      </InputGroup>
      <InputGroup style={styles.loginInput}>
        <Icon name='ios-lock-outline' style={styles.loginIconColor} />
        <Input
          onChangeText={(userPass) => this.setState({ userPass })}
          value={this.state.userPass}
          placeholder={'Password'}
          secureTextEntry={true} />
      </InputGroup>
      <Button style={styles.loginButton} onPress={this
        .Login
        .bind(this)}>Sign in</Button>


      <TouchableOpacity style={styles.marTop20} onPress={this.forgotPassword.bind(this, this.state.userText)}>
        <Text style={styles.colorWhite}>Forgot Passowrd?</Text>
      </TouchableOpacity>
      <View style={{ flex: 0, flexDirection: 'row', marginTop: 10 }}>
        <Text style={[styles.colorWhite, styles.font20]}>Don't have an account?</Text>
        <TouchableOpacity onPress={Actions.signup}>
          <Text style={[styles.colorOrg, styles.font20]} > Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  }

}
export default login;