const firebaseConfig = {
    apiKey: "AIzaSyDX_I8pjDiFAq2Rkzphompcu4U4VSZyld0",
    authDomain: "login-61bba.firebaseapp.com",
    projectId: "login-61bba",
    storageBucket: "login-61bba.appspot.com",
    messagingSenderId: "50190588042",
    appId: "1:50190588042:web:0a7e094d8c980a4b3a7573",
    measurementId: "G-C60EGNRLSC"
  };
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();