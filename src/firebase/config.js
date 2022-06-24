import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsK7Gyj7PwniPg3TOF7SOhsPDWteFI9gg",
  authDomain: "Financetest.firebaseapp.com",
  projectId: "Financetest",
  storageBucket: "Financetest.appspot.com",
  messagingSenderId: "722916922785",
  appId: "1:722916922785:web:377c8eea5fa361176de7e0",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
const arrUnion = firebase.firestore.FieldValue.arrayUnion;
const increment = firebase.firestore.FieldValue.increment;

export { firestore, auth, timeStamp, arrUnion, increment };
