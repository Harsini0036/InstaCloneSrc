import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyB-QCIjITq-Ixqzl6UYft9qUlH1Mms2QrE",
  authDomain: "instagram-clone-4dd6b.firebaseapp.com",
  projectId: "instagram-clone-4dd6b",
  storageBucket: "instagram-clone-4dd6b.appspot.com",
  messagingSenderId: "784865428616",
  appId: "1:784865428616:web:6585cd0a1b3637fdd88b3d",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };
