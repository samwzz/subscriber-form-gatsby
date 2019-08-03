import firebase from 'firebase';
import 'firebase/firestore';
import config from '../config';

const firebaseConfig = {
  apiKey: config.GOOGLE_API_KEY,
  authDomain: "clutchpoints-b26fa.firebaseapp.com",
  databaseURL: "https://clutchpoints-b26fa.firebaseio.com",
  projectId: "clutchpoints-b26fa",
  storageBucket: "",
  messagingSenderId: "963204165114",
  appId: "1:963204165114:web:efbc8a15e2a0fef3",
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.store = firebase.firestore;
  }

  get contacts() {
    return this.store().collection('contacts');
  }
}

export default new Firebase();
