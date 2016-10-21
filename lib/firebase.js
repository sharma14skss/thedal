

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: " AIzaSyBTGXBnl7jUt0DZO9HgQko5NVA11imet08",
  authDomain: "thedal-3312a.firebaseapp.com",
  databaseURL: "https://thedal-3312a.firebaseio.com/",
  storageBucket: "gs://thedal-3312a.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();
const auth = firebaseApp.auth();

export {firebaseApp,database,auth};