import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCVyyNoI-zTa3nZOh95DGDuh5DFffader4",
  authDomain: "sprintblockmaster.firebaseapp.com",
  projectId: "sprintblockmaster",
  storageBucket: "sprintblockmaster.appspot.com",
  messagingSenderId: "1023130435823",
  appId: "1:1023130435823:web:2ae0709e9521f4a371db1a"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export{
    app,
    google,
    facebook
}