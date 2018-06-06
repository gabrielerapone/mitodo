import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseInit = () => {
  const config = {
    apiKey: "AIzaSyDa9GVd6565gP1fLybKIu6gmC30bb_SNv4",
    authDomain: "mitodo-c753a.firebaseapp.com",
    databaseURL: "https://mitodo-c753a.firebaseio.com",
    projectId: "mitodo-c753a",
    storageBucket: "mitodo-c753a.appspot.com",
    messagingSenderId: "18569613200"
  };
  firebase.initializeApp(config);
};
