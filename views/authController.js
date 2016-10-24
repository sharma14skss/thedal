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
  Button,
  Spinner
} from 'native-base';
import * as Animatable from 'react-native-animatable';
import { database, auth } from '../lib/firebase';

import styles from './styles';

class authController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 0,
      userText: '',
      userPass: '',
      emailPlace: 'E-mail',
      passPlace: 'Password',
      spinnerOp: 0,
      btn: false,
    }
  }
  componentDidMount() {
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

  saveUser(user) {
    database
      .ref('users/' + user.uid)
      .set({ username: user.email, uid: user.uid, name: user.displayName, photoUrl: user.photoURL, verified: user.emailVerified })
  }

  //validate input boxes
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  validateBox(email, pass) {
    if (!this.validateEmail(email)) {
      this.setState({
        emailPlace: 'Enter the valid Email'
      })
      this.refs.email.shake(400);
      return false;
    }
    else if (pass == "") {
      this.setState({
        passPlace: 'Enter the password'
      })
      this.refs.pass.shake(400);
      return false;
    } else {
      return true;
    }
  }

  Login() {
    let self = this;
    let email = this.state.userText;
    let pass = this.state.userPass;
    let check = this.validateBox(email, pass);
    console.log(check);
    if (check) {
      this.setState({
        spinnerOp: 1,
        btn: !this.state.btn,
      });
      auth
        .signInWithEmailAndPassword(email, pass)
        .catch(function (error) {
          self.setState({
            spinnerOp: 0,
            btn: !self.state.btn,
          });
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/wrong-password") {
            alert('Invalid Passowrd');
          }
          if (errorCode == "auth/invalid-email") {
            alert("Invalid Email Address")
          }
          if (errorCode == "auth/user-not-found") {
            alert("This Email not registered")
          }
          console.log(errorCode + '---' + errorMessage);

        });
    }
  }
  Signup() {
    let self = this;
    let email = this.state.userText;
    let pass = this.state.userPass;
    let check = this.validateBox(email, pass);
    if (check) {
      this.setState({
        spinnerOp: 1,
        btn: !this.state.btn,
      });
      auth
        .createUserWithEmailAndPassword(email, pass)
        .catch(function (error) {
          self.setState({
            spinnerOp: 0,
            btn: !self.state.btn,
          });
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + '---' + errorMessage);
          if (errorCode == "auth/wrong-password") {
            alert('Invalid Passowrd');
          }
          if (errorCode == "auth/invalid-email") {
            alert("Invalid Email Address")
          }
          if (errorCode == "auth/user-not-found") {
            alert("This Email not registered")
          }
          if (errorCode == "auth/email-already-in-use") {
            alert("This Email already in use");
          }

        });
    }

  }
  Signout() {
    let self = this;
    auth
      .signOut()
      .then(function () {
        console.log('signout');
        Actions.authController();

      }, function (error) {
        console.log(error)
      });
  }
  forgotPassword(email) {
    let check = this.validateBox(email);
    if (check) {
      auth.sendPasswordResetEmail(email).then(function () {
        alert('Password reset E-mail send to your Email address')
      }, function (error) {
        alert(error)
      });
    }
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
      <Button style={[styles.loginButton]} onPress={this
        .Login
        .bind(this)} disabled={this.state.btn}>Sign in</Button>
      <Spinner size={'small'} style={{ opacity: this.state.spinnerOp }} color='#fff' />

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
export default authController;