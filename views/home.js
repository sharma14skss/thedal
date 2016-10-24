import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button } from 'native-base';
import TabBar from './TabBar';
import authController from './authController';
import styles from './styles.js';

class Signout extends authController {
  render(){
    return <Button style={{alignSelf: 'auto',width:200}} onPress={this.Signout.bind(this)}>sign out</Button>

  }
}

class Home extends Component{
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <TabBar />}
      >
      <ScrollView tabLabel="ios-paper" style={styles.tabView}>
        <Container>
                <Content>
                    <Card>
                        <CardItem>                       
                            <Thumbnail source={require('../img/pro.jpg')} />
                            <Text>User name</Text>
                            <Text note>April 15, 2016</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'cover' }} source={require('../img/big.png')} /> 
                            <Text>
                                This is some text about this pic 
                                some intersting setence about this pic like this pic is
                                very beautiful something like that..
                            </Text>
                            
                        </CardItem>
                        <CardItem footer>
                          <Button transparent textStyle={{color: '#87838B'}}>
                                12 likes
                            </Button>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                15 comments
                            </Button>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                10 share
                            </Button>
                            </CardItem>
                   </Card>
                   
                </Content>
            </Container>
      </ScrollView>
      <ScrollView tabLabel="ios-people" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Friends</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Messenger</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Notifications</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-list" style={styles.tabView}>
        <View style={styles.card}>
          <Signout/>
        </View>
      </ScrollView>
    </ScrollableTabView>;
  }
} 

export default Home;