// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: 'schedule-a3019.firebasestorage.app',
  messagingSenderId: '518051456925',
  appId: '1:518051456925:web:7fe6159d1e5fcabd863174',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// apiKey: 'AIzaSyAY_4qtQb7TgGyC_xSW1wSCtpCBqbfZ-2Y',
// authDomain: 'schedule-a3019.firebaseapp.com',
// projectId: 'schedule-a3019',
// storageBucket: 'schedule-a3019.firebasestorage.app',
// messagingSenderId: '518051456925',
// appId: '1:518051456925:web:7fe6159d1e5fcabd863174',
