import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';


import styles from './views/styles.js';
import login from './views/login';
import signup from './views/signup';
import Home from './views/home';


export default class thedal extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return <Router>
        <Scene key="root">
          <Scene key="login" component={login} title="login" hideNavBar={true} initial={true}/>
          <Scene key="signup" component={signup} title="signup" hideNavBar={true}/>
          <Scene key="home" component={Home} title="Home" hideNavBar={true} />
        </Scene>
      </Router>
  }
};



AppRegistry.registerComponent('thedal', () => thedal);
