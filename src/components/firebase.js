import firebase from 'firebase'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCQ26OO6LqvTjQlV49PkS4gbmKcnsaPyeE",
    authDomain: "auth-firebase-4a492.firebaseapp.com",
    projectId: "auth-firebase-4a492",
    storageBucket: "auth-firebase-4a492.appspot.com",
    messagingSenderId: "1019799835347",
    appId: "1:1019799835347:web:5a9156abf5d78fb9887a26"
  };
  // Initialize Firebase
  
  
 firebase.initializeApp(firebaseConfig);


  // export const provider = new firebase.auth.GoogleAuthProvider();
  // export const auth = firebase.auth();
      const storage = firebase.storage();

  // export default firebase;
  export {storage, firebase as default}