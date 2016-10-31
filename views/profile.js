import React, {Component} from 'react';
import {
    AppRegistry,
    AsyncStorage,
    StyleSheet,
    Platform,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions
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
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

import {database, auth} from '../lib/firebase';
import styles from './styles.js';
import {updateUser, uploadPic} from './db';

const polyfill = RNFetchBlob.polyfill

window.XMLHttpRequest = polyfill.XMLHttpRequest
window.Blob = polyfill.Blob
var {height, width} = Dimensions.get('window');
class ProfileCreate extends Component {
    constructor() {
        super()
        this.state = {
            displayName: 'sharma',
            firstName: 'sharma',
            lastName: 'sk',
            seletedRadio: 'Male',
            UserDob: '',
            aboutUser: 'nothing',
            avatarSource: require('../img/pro.jpg'),
            path: '',
            type: '',
            thumbSize:width-220,
        }
        let self = this;
    }

    componentDidMount() {
        console.log(this.state.thumbSize)
    }

    imagePick() {
        var options = {
            title: 'Select Avatar',
            quality: 0.5
        }

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // You can display the image using either data...
                const source = {
                    uri: 'data:image/jpeg;base64,' + response.data,
                    isStatic: true
                };

                // or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    const source = {
                        uri: response
                            .uri
                            .replace('file://', ''),
                        isStatic: true
                    };
                } else {
                    const source = {
                        uri: response.uri,
                        isStatic: true
                    };
                }
                this.state.path = response.path;
                this.state.type = response.type;
                this.setState({avatarSource: source});

            }
        });
    }
    updateUser() {
        let user = auth.currentUser;
        let imagePath;
        let details = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            dob: this.state.UserDob,
            about: this.state.aboutUser
        }
        if (this.state.path != '') {
            Blob.build(RNFetchBlob.wrap(this.state.path), {type: this.state.type}).then((blob) => {
                console.log(blob)
                imagePath = uploadPic(user.uid, user.uid, blob,details);
                console.log(imagePath);
            })
        }

        user
            .updateProfile({displayName: this.state.displayName, photoURL: imagePath})
            .then(function () {
                updateUser(user, details);
            }, function (error) {
                // An error happened.
            });

    }

    radioChange(opt) {
        this.setState({seletedRadio: opt})
    }
    getDate() {
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth() + 1;
        let year = date.getFullYear() - 13;
        return day + '-' + month + '-' + year;
    }

    render() {
        return <ScrollView><View style={styles.loginContainer}>
            <TouchableOpacity
                onPress={this
                .imagePick
                .bind(this)}
                style={styles.marTop10}>
                <Thumbnail
                    size={this.state.thumbSize}
                    style={{
                    borderWidth: 3,
                    borderColor: '#f15243'
                }}
                    source={this.state.avatarSource}/>
            </TouchableOpacity>

            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput, styles.marTop10]}>
                    <Input
                        placeholder={'Display Name'}
                        onChangeText={(displayName) => this.setState({displayName})}
                        value={this.state.displayName}/>
                </InputGroup>
            </Animatable.View>
            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput, styles.marTop10]}>
                    <Input
                        placeholder={'Frist Name'}
                        onChangeText={(firstName) => this.setState({firstName})}
                        value={this.state.firstName}/>
                </InputGroup>
            </Animatable.View>
            <Animatable.View ref="email">
                <InputGroup style={[styles.loginInput, styles.marTop10]}>
                    <Input
                        placeholder={'Last Name'}
                        onChangeText={(lastName) => this.setState({lastName})}
                        value={this.state.lastName}/>
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
                date={this.state.UserDob}
                mode="date"
                placeholder="Select Your DOB"
                format="DD-MM-YYYY"
                maxDate={this.getDate()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon={false}
                onDateChange={(date) => {
                this.setState({UserDob: date})
            }}/>

            <Animatable.View ref="email">
                <InputGroup
                    style={[
                    styles.loginInput,
                    styles.marTop10, {
                        height: 80
                    }
                ]}>
                    <Input
                        placeholder={'Somethings About You'}
                        style={{
                        height: 70
                    }}
                        multiline={true}
                        maxLength={40}
                        onChangeText={(aboutUser) => this.setState({aboutUser})}
                        value={this.state.aboutUser}/>
                </InputGroup>
            </Animatable.View>
            <Button
                style={[styles.loginButton,{marginBottom:20}]}
                onPress={this
                .updateUser
                .bind(this)}>Save</Button>
        </View>
        </ScrollView>
    }
}

export default ProfileCreate;