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
import {
    Container,
    Content,
    InputGroup,
    Input,
    Icon,
    Button,
    Spinner
} from 'native-base';
import { database, auth } from '../lib/firebase';
import styles from './styles.js';
import authController from './authController';
import { updateUser } from './db';

class Signout extends authController {
    render() {
        return <Button style={{ alignSelf: 'auto', width: 200 }} onPress={this.Signout.bind(this)}>sign out</Button>
    }
}

class ProfileCreate extends Component {

    componentDidMount() {
        var user = auth.currentUser;
        user.updateProfile({
            displayName: "Sharma Sk",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            //updateUser(user);
        }, function (error) {
            // An error happened.
        });
        
    }

    render() {
        return <View>
            <Text>profile</Text>
            <Signout />
        </View>
    }
}

export default ProfileCreate;