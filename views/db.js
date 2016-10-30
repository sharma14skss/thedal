//all database function
import {AsyncStorage} from 'react-native';
import {database, stroge} from '../lib/firebase';

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
//upload user profile pic
const uploadPic = (auth, name, uri) => {
    let userRef = stroge.ref('users/' + auth + '/profile/' + name);
    let uploadTask = userRef.put(uri);
    uploadTask.on('state_changed', function (snapshot) {
        console.log(snapshot.bytesTransferred)
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
    }, function (error) {
        console.log(error)
    }, function () {
        var downloadURL = uploadTask.snapshot.downloadURL;
        return downloadURL;
    });
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

export {saveUser, uploadPic, updateUser}