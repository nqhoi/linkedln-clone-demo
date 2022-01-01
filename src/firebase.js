import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_8cS0utkcgzzoloW5pBeiSVU6zpDJP5s",
    authDomain: "linkedin-clone-70afb.firebaseapp.com",
    projectId: "linkedin-clone-70afb",
    storageBucket: "linkedin-clone-70afb.appspot.com",
    messagingSenderId: "384976622273",
    appId: "1:384976622273:web:e406b40127744785e43a40"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth};