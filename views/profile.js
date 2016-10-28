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
    Thumbnail,
    CheckBox,
    Radio
} from 'native-base';
import * as Animatable from 'react-native-animatable';
import DatePicker from 'react-native-datepicker'

import {database, auth} from '../lib/firebase';
import styles from './styles.js';
import {updateUser} from './db';

class ProfileCreate extends Component {
    constructor() {
        super()
        this.state = {
            seletedRadio: 'Female',
            date:''
        }
    }

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
    radioChange(opt) {
        this.setState({seletedRadio: opt})
    }

    render() {
        return <View style={styles.loginContainer}>
            <Thumbnail
                size={120}
                style={{
                borderWidth: 3,
                borderColor: '#f15243'
            }}
                source={require('../img/pro.jpg')}/>

            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput, styles.marTop10]}>
                    <Input placeholder={'Display Name'}/>
                </InputGroup>
            </Animatable.View>
            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput, styles.marTop10]}>
                    <Input placeholder={'Frist Name'}/>
                </InputGroup>
            </Animatable.View>
            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput, styles.marTop10]}>
                    <Input placeholder={'Last Name'}/>
                </InputGroup>
            </Animatable.View>
            <View style={[styles.gender, styles.marTop10]}>

                <Radio
                    selected={this.state.seletedRadio === 'Female'}
                    onPress={this
                    .radioChange
                    .bind(this, 'Female')}/>
                <Text style={[styles.colorWhite, styles.pad20]}>Female</Text>

                <Radio
                    selected={this.state.seletedRadio === 'Male'}
                    onPress={this
                    .radioChange
                    .bind(this, 'Male')}/>
                <Text style={[styles.colorWhite, styles.pad20]}>Male
                </Text>

                <Radio
                    selected={this.state.seletedRadio === 'Other'}
                    onPress={this
                    .radioChange
                    .bind(this, 'Other')}/>
                <Text style={[styles.colorWhite, styles.pad20]}>Other
                </Text>

            </View>
            <DatePicker
                style={styles.dob}
                date={this.state.date}
                mode="date"
                placeholder="Select Date of Birth"
                format="DD-MM-YYYY"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                onDateChange={(date) => {
                this.setState({date: date})
            }}/>

            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput, styles.marTop10]}>
                    <Input placeholder={'name'}/>
                </InputGroup>
            </Animatable.View>
            <Button style={[styles.loginButton]}>Save</Button>
        </View>
    }
}

export default ProfileCreate;