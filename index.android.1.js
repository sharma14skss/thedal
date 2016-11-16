import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { Scene, Router, Actions } from 'react-native-router-flux';



import { database, auth } from './lib/firebase';
import styles from './views/styles.js';

import authController from './views/authController';
import signup from './views/signup';
import Home from './views/home';
import ProfileCreate from './views/profile';


export default class thedal extends Component {

  render() {
    return <Router >
      <Scene key="root">
        <Scene
          key="authController"
          component={authController}
          title="authController"
          hideNavBar={true}
          />
        <Scene key="signup" component={signup} title="signup" hideNavBar={true} />
        <Scene key="ProfileCreate" component={ProfileCreate} title="ProfileCreate" hideNavBar={true} />
        <Scene key="home" component={Home} title="Home" hideNavBar={true}  initial={true}/>
      </Scene>
    </Router>
  }
};

AppRegistry.registerComponent('thedal', () => thedal);
