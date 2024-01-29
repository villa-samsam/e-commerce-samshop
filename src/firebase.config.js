import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBO7qxEmOSjcYs2gegAv9EXdMaSzjmz3Os",
  authDomain: "sam-flower-shop.firebaseapp.com",
  projectId: "sam-flower-shop",
  storageBucket: "sam-flower-shop.appspot.com",
  messagingSenderId: "726418615541",
  appId: "1:726418615541:web:0a3194e33e034ebe32a9bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
