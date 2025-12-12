import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjXlVS7gchSeIr7raRWTYjHbVxKcviMBI",
  authDomain: "major-odyssey-v1.firebaseapp.com",
  projectId: "major-odyssey-v1",
  storageBucket: "major-odyssey-v1.firebasestorage.app",
  messagingSenderId: "456151325004",
  appId: "1:456151325004:web:79e1ee686b0ebb541ed7e9",
  measurementId: "G-B4XGXR3Q04"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);