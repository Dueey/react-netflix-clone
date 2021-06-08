import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAlaNLmn7gZRf1pJm7AAzYvEzdg5vdrysI",
  authDomain: "react-netflix-clone-e098d.firebaseapp.com",
  projectId: "react-netflix-clone-e098d",
  storageBucket: "react-netflix-clone-e098d.appspot.com",
  messagingSenderId: "119699481855",
  appId: "1:119699481855:web:daf5ae152f7236525498ca",
  measurementId: "G-ZQGEB1GTZB",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);
//if doesn't work, close vscode and run npm start again

export { firebase };
