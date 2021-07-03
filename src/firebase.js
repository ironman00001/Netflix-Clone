import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAB-7fOaCSUByDSC9OcmrI3THOOC_QsNAs",
    authDomain: "netflix-rg.firebaseapp.com",
    projectId: "netflix-rg",
    storageBucket: "netflix-rg.appspot.com",
    messagingSenderId: "690369548855",
    appId: "1:690369548855:web:03fe418a91a852474ae5b2",
    measurementId: "G-ER6BL1F4E6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 
  export { auth }
  export default db ;
