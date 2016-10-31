// all styles for app

import {StyleSheet, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d324f'
  },
  loginHeading: {
    color: '#fff',
    marginBottom: 20,
    fontSize: 20
  },
  loginInput: {
    width: width - 50,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  loginIconColor: {
    color: '#4C4C4C',
    paddingLeft: 5
  },
  loginButton: {
    width: width - 50,
    alignSelf: 'auto',
    marginTop: 10,
    backgroundColor: '#f15243',
  },
  gender: {
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row',
    width: width - 50,
    justifyContent: 'center',
    paddingLeft:20
  },
  dob:{
     width: width-50,
     backgroundColor:'#fff',
  },
  colorWhite: {
    color: '#fff'
  },
  marTop20: {
    marginTop: 20
  },
  marTop10: {
    marginTop: 10
  },
  colorOrg: {
    color: '#f15243'
  },
  font20: {
    fontSize: 15
  },
  pad20: {
    padding: 20
  }
});

export default styles;