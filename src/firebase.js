// import firebase from "firebase/compat/app";
// import "firebase/compat/auth"; // for authentication
// import "firebase/compat/storage"; // for storage
// import "firebase/compat/database"; // for realtime database
// import "firebase/compat/firestore"; // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging
// import 'firebase/functions';   // for cloud functions
// const firebaseConfig = ({
//   apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
//   authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
//   projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
//   storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
//   appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
// });
// export const auth = firebaseApp.auth();
// export const db = firebaseApp.firestore();
// export const storage = firebaseApp.storage();
// export default firebaseApp;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmZmBfJbqLa2JjLHf20BKj2xorcL_Vtdc",
  authDomain: "expenditure-app-78140.firebaseapp.com",
  projectId: "expenditure-app-78140",
  storageBucket: "expenditure-app-78140.appspot.com",
  messagingSenderId: "133434012873",
  appId: "1:133434012873:web:99ea1c889571a344cdc918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}