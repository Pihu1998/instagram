import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAlhBwYLfB0EGZGE9h7B4QpFib7d8QK7ZM',
  authDomain: 'instagram-3fc68.firebaseapp.com',
  projectId: 'instagram-3fc68',
  storageBucket: 'instagram-3fc68.appspot.com',
  messagingSenderId: '662530350046',
  appId: '1:662530350046:web:45fc4aa6ee5d2859465b4f'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
