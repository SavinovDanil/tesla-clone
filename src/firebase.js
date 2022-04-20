import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBf1DsQDcsLKFzIf3t3kYswtrxtKYT2aeA',
  authDomain: 'tesla-clone-cc941.firebaseapp.com',
  projectId: 'tesla-clone-cc941',
  storageBucket: 'tesla-clone-cc941.appspot.com',
  messagingSenderId: '877281075307',
  appId: '1:877281075307:web:a7dfe192f7cf272436d12e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
