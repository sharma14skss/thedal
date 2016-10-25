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
import { database, auth } from '../lib/firebase';
import styles from './styles.js';

class ProfileCreate extends Component{
    render(){
        return <Text>profile</Text>
    }
}

export default ProfileCreate;