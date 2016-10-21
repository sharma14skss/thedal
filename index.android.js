import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {Scene, Router,Actions} from 'react-native-router-flux';


import styles from './views/styles.js';
import login from './views/login';
import signup from './views/signup';
import Home from './views/home';

const token = null;

export default class thedal extends Component {
    constructor(props){
      super(props);
    }
    componentWillMount(){
      AsyncStorage.getItem('token',(err,result)=>{
        console.log(result);
        if(result!=null){
          Actions.home();
        }
      })
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
