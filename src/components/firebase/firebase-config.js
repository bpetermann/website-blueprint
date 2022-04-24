import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4Kb0_tFZLTnGApOi6OUbvIXxOFJHjK1c',
  authDomain: 'website-blueprint.firebaseapp.com',
  projectId: 'website-blueprint',
  storageBucket: 'website-blueprint.appspot.com',
  messagingSenderId: '882138609379',
  appId: '1:882138609379:web:b32c73b4f194a72bd977d6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
