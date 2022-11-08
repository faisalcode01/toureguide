// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD68LGTWW1oIDNWiNvDNAVH6OXC3bVQib8",
  authDomain: "simple-project-d524d.firebaseapp.com",
  projectId: "simple-project-d524d",
  storageBucket: "simple-project-d524d.appspot.com",
  messagingSenderId: "1029104123046",
  appId: "1:1029104123046:web:6b5023fa8a4509c0c58867"

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;