// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCxlvRLuqyHT-BKGZU_8xgihY1_lQyM0g',
  authDomain: 'instagram-clone-9a49e.firebaseapp.com',
  projectId: 'instagram-clone-9a49e',
  storageBucket: 'instagram-clone-9a49e.appspot.com',
  messagingSenderId: '706746567445',
  appId: '1:706746567445:web:1f7c4c271bff25bfdf771c',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}