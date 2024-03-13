import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
  apiKey: "AIzaSyDo9-oOO_d24W6rtRmSG1aTkFE6G74LUcU",
  authDomain: "newsapp-8395a.firebaseapp.com",
  projectId: "newsapp-8395a",
  storageBucket: "newsapp-8395a.appspot.com",
  messagingSenderId: "449018866715",
  appId: "1:449018866715:web:9a07b88925f565a9159cbe",
  measurementId: "G-09J7YMX4VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const functions = getFunctions(app);

export { app, auth, functions };
