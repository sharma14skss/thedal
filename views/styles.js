// all styles for app

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginContainer:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#2d324f',
  },
  loginHeading:{
    color:'#fff',
    marginBottom:20,
    fontSize:25,
  },
  loginInput:{
    width:350,
    height:40,
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  loginIconColor:{
    color:'#4C4C4C',
    paddingLeft:5
  },
  loginButton:{
    width:350,
    alignSelf: 'auto',
    marginTop:10,
    backgroundColor:'#f15243',
  },
  colorWhite:{
    color:'#fff'
  },
  marTop20:{
    marginTop:20,
  },
  colorOrg:{
    color:'#f15243'
  },
  font20:{
    fontSize:18
  }
});


export default styles;