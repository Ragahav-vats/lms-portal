import { getApp, getApps, initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCh8GwsfViNH-o4dkdRo84APioanHYoTS8",
  authDomain: "learning-784e9.firebaseapp.com",
  projectId: "learning-784e9",
  storageBucket: "learning-784e9.firebasestorage.app",
  messagingSenderId: "472507837363",
  appId: "1:472507837363:web:e08d949629d863959779c6",
  measurementId: "G-CTG5XG3MXP"
};

// Initialize Firebase
const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export default app;