import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import styles from './views/styles.js';
import TabBar from './views/TabBar';
import login from './views/login';



export default class thedal extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return <Router>
        <Scene key="root">
          <Scene key="login" component={login} title="login" hideNavBar={true}/>
        </Scene>
      </Router>
  }
};



AppRegistry.registerComponent('thedal', () => thedal);
