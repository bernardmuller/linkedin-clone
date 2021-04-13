import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAWepi62y55CI0TsAEPd0cSCjkh74YfHU4",
  authDomain: "linkedin-clone-a531a.firebaseapp.com",
  projectId: "linkedin-clone-a531a",
  storageBucket: "linkedin-clone-a531a.appspot.com",
  messagingSenderId: "1004542523382",
  appId: "1:1004542523382:web:440310b0361c995b1b79d7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };