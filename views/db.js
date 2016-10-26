//all database function
import {AsyncStorage} from 'react-native';
import {database} from '../lib/firebase';

//save user
const saveUser = (user) => {
    let userRef = database.ref('users/' + user.uid);
    let isProfile = null;
    AsyncStorage.getItem('isProfile', (err, res) => {
        if (res) 
            isProfile = res
    });
    userRef.set({
        username: user.email,
        uid: user.uid,
        name: user.displayName,
        photoUrl: user.photoURL,
        verified: user.emailVerified,
        isProfile: isProfile || 'N'
    });
    AsyncStorage.setItem('UserId', user.uid);
}

//update user
const updateUser = (user) => {
    let userRef = database.ref('users/' + user.uid);
    userRef.update({
        username: user.email,
        uid: user.uid,
        name: user.displayName,
        photoUrl: user.photoURL,
        verified: user.emailVerified,
        isProfile: 'Y'
    });
}

export {saveUser, updateUser}