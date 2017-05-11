import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBHU0zdV1_nSVrGpNRGd_lHXVmWzaVs7d0",
    authDomain: "dentistapp-88da8.firebaseapp.com",
    databaseURL: "https://dentistapp-88da8.firebaseio.com/",
    projectId: "dentistapp-88da8",
    storageBucket: "dentistapp-88da8.appspot.com/",
    messagingSenderId: "730474703029"
};

export const firebaseApp = firebase.initializeApp(config);
export const database = firebaseApp.database(); //the real-time database
export const auth = firebaseApp.auth(); //the firebase auth namespace
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const emailAuthProvider = new firebase.auth.EmailAuthProvider();
export const usersRef = database.ref('users');
