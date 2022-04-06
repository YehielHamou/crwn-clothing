import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyB2ffXEhvDdGf-TyYvV76LIdA5J9h4BElg',
  authDomain: 'crown-db-99bb6.firebaseapp.com',
  projectId: 'crown-db-99bb6',
  storageBucket: 'crown-db-99bb6.appspot.com',
  messagingSenderId: '189287314282',
  appId: '1:189287314282:web:50508a464baf151c27eb13',
  measurementId: 'G-G1NZ927NVM',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
