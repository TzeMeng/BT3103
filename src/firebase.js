import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBaV5nMD6zdXo6NY4flQSkJSJosIEi2Ptg",
  authDomain: "bt3103week8-751d7.firebaseapp.com",
  databaseURL: "https://bt3103week8-751d7.firebaseio.com",
  projectId: "bt3103week8-751d7",
  storageBucket: "bt3103week8-751d7.appspot.com",
  messagingSenderId: "349289444684",
  appId: "1:349289444684:web:bfa078a56e32cbdc58cbe9",
  measurementId: "G-7VLSSV7LQZ"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;