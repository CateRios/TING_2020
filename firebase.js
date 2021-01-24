import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCK-jZ964ILm3AIR5a0OUTGdt55x8LKqGE",
  authDomain: "ringtingting-855e2.firebaseapp.com",
  databaseURL: "https://ringtingting-855e2-default-rtdb.firebaseio.com",
  projectId: "ringtingting-855e2",
  storageBucket: "ringtingting-855e2.appspot.com",
  messagingSenderId: "1021974878440",
  appId: "1:1021974878440:web:4f7be148efbb4e9666515d",
  measurementId: "G-5E606LZQTC",
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersColletion = db.collection("users");
const foodCollection = db.collection("food");

// export utils/refs
export { db, auth, usersColletion, foodCollection, };
