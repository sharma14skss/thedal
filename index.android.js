import React, {Component} from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {Scene, Router, Actions} from 'react-native-router-flux';

import {database, auth} from './lib/firebase';

import styles from './views/styles.js';
import login from './views/login';
import signup from './views/signup';
import Home from './views/home';

const token = null;

export default class thedal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 0
    }
  }
  componentDidMount() {
    let self = this;
    auth.onAuthStateChanged(function (user) {
      if (user) {
        Actions.home({type: "reset"});
      } else {
        self.setState({view: 1})
        Actions.login({type: "reset"});
      }
    });
  }
  render() {
    return <Router>
      <Scene key="root" styles={{
        opacity: this.state.view
      }}>
        <Scene
          key="login"
          component={login}
          title="login"
          hideNavBar={true}
          initial={true}/>
        <Scene key="signup" component={signup} title="signup" hideNavBar={true}/>
        <Scene key="home" component={Home} title="Home" hideNavBar={true}/>
      </Scene>
    </Router>
  }
};

AppRegistry.registerComponent('thedal', () => thedal);
