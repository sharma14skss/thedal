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
import {
    Container,
    Content,
    InputGroup,
    Input,
    Icon,
    Button,
    Spinner,
    Thumbnail
} from 'native-base';
import * as Animatable from 'react-native-animatable';
import {database, auth} from '../lib/firebase';
import styles from './styles.js';
import {updateUser} from './db';

class ProfileCreate extends Component {

    componentDidMount() {
        /* var user = auth.currentUser;
        user.updateProfile({
            displayName: "Sharma Sk",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            //updateUser(user);
        }, function (error) {
            // An error happened.
        });*/

    }

    render() {
        return <View style={styles.loginContainer}>
            <Thumbnail
                size={120}
                style={{
                borderWidth: 3,
                borderColor: '#f15243',
            }}
                source={require('../img/pro.jpg')}/>
             <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput,styles.marTop10]}>
                <Icon name='ios-mail-outline' style={styles.loginIconColor} />
                <Input placeholder={'name'} />
                </InputGroup>
            </Animatable.View>
            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput,styles.marTop10]}>
                <Icon name='ios-mail-outline' style={styles.loginIconColor} />
                <Input placeholder={'name'} />
                </InputGroup>
            </Animatable.View>
            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput,styles.marTop10]}>
                <Icon name='ios-mail-outline' style={styles.loginIconColor} />
                <Input placeholder={'name'} />
                </InputGroup>
            </Animatable.View>
            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput,styles.marTop10]}>
                <Icon name='ios-mail-outline' style={styles.loginIconColor} />
                <Input placeholder={'name'} />
                </InputGroup>
            </Animatable.View>
            <Button
        style={[styles.loginButton]} >Save</Button>
        </View>
    }
}

export default ProfileCreate;