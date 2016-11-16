import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { Navigation } from 'react-native-navigation';


import { database, auth } from './lib/firebase';
import styles from './views/styles.js';

//import authController from './views/authController';
//import signup from './views/signup';
//import Home from './views/home';
//import ProfileCreate from './views/profile';

class thedal extends Component {
  prss(){
    this.props.navigator.push({
      screen: 'home',
      title: 'Pushed Screen'
    });
  }
  render() {
    return <View>
    <TouchableOpacity onPress={this.prss.bind(this)}>
      <Text>sss</Text>
      </TouchableOpacity>
    </View>
  }
};
class Home extends Component {
  
  render() {
    return <View>
   
      <Text>sss</Text>

    </View>
  }
};

//AppRegistry.registerComponent('thedal', () => thedal);
Navigation.registerComponent('home', () => Home);
Navigation.registerComponent('thedal', () => thedal);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'thedal', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});