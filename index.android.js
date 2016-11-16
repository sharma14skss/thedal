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

import authController from './views/authController';
import signup from './views/signup';
import Home from './views/home';
//import ProfileCreate from './views/profile';

class thedal extends Component {

  componentDidMount() {

    //this.startApp();
    /* let self = this;
     auth.onAuthStateChanged(function (user) {
       AsyncStorage.getItem('UserId', (err, res) => {
         console.log(res);
         if (res) {
           let userRef = database.ref('users/' + res);
           userRef.on('value', (snap) => {
             if (snap.val()) {
               AsyncStorage.setItem('isProfile', snap.val().isProfile);
             }
           });
         }
       });
       if (user) {
         console.log(user);
         AsyncStorage.getItem('isProfile', (err, res) => {
           console.log(res);
           if (res == 'Y') {
             updateUser(user);
             //Actions.home({ type: "reset" });
           } else {
             saveUser(user);
             //Actions.ProfileCreate({ type: "reset" })
           }
         });
 
       } else {
         //self.setState({ login: 1 })
       }
     });*/

  }
  startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'One',
          screen: 'home', // this is a registered name for a screen
          icon: require('./img/pro.jpg'),
          selectedIcon: require('./img/pro.jpg'), // iOS only
          title: 'Screen One',
          navigatorStyle: { navBarHidden: true },
        },
        {
          label: 'Two',
          screen: 'home',
          icon: require('./img/pro.jpg'),
          selectedIcon: require('./img/pro.jpg'), // iOS only
          title: 'Screen Two',
          navigatorStyle: { navBarHidden: true },
        }
      ]
    });
  }


  prss() {
    this.props.navigator.push({
      screen: 'auth',
      title: 'Pushed Screen',
      navigatorStyle: { navBarHidden: true }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
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

Navigation.registerComponent('auth', () => authController);
Navigation.registerComponent('signup', () => signup);
//Navigation.registerComponent('profileCreate', () => ProfileCreate);
Navigation.registerComponent('home', () => Home);
Navigation.registerComponent('thedal', () => thedal);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'thedal', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: { navBarHidden: true }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {}, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  },
});