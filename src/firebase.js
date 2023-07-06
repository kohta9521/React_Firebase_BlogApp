import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzey0xLoDpSCWGAXEDMvD4u8M1s9RX36s",
  authDomain: "blog-196fe.firebaseapp.com",
  projectId: "blog-196fe",
  storageBucket: "blog-196fe.appspot.com",
  messagingSenderId: "551820892332",
  appId: "1:551820892332:web:bac4d6830b9726cf6da709",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
