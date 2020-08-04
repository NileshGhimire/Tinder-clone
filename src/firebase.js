import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCzO_duWzkUresc4OMx6IrjOzexIOvcROg",
    authDomain: "tinder-clone-c49d2.firebaseapp.com",
    databaseURL: "https://tinder-clone-c49d2.firebaseio.com",
    projectId: "tinder-clone-c49d2",
    storageBucket: "tinder-clone-c49d2.appspot.com",
    messagingSenderId: "296665660361",
    appId: "1:296665660361:web:42a9614866ff17df754618",
    measurementId: "G-CE6DRJ8KBD",
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore();
  export default database;