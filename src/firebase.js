import firebase from "firebase";

   const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDBTFX-VoQNq8xtTbyjSNsoI07FnmkqQ04",
    authDomain: "instagram-clone-73147.firebaseapp.com",
    databaseURL: "https://instagram-clone-73147-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-73147",
    storageBucket: "instagram-clone-73147.appspot.com",
    messagingSenderId: "850052997047",
    appId: "1:850052997047:web:074e910a3847a73dbad232",
    measurementId: "G-HPL5K3PXZ2"    
   });

   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const storage = firebase.storage();

   export { db, auth, storage};