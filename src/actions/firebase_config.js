import * as firebase from 'firebase';

const firebaseConfig =   {
  apiKey: "AIzaSyBmEqLppUxBd0i89SDu6EZxLTg1KIVAy7Q",
  authDomain: "simplybooks-676c4.firebaseapp.com",
  databaseURL: "https://simplybooks-676c4.firebaseio.com",
  storageBucket: "simplybooks-676c4.appspot.com",
  messagingSenderId: "795885189987",
}

//Initialize firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default database;
//module.exports = firebaseapp
