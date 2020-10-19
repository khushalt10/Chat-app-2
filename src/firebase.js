import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRTHI7MYQ1zhruF0XFK-jJ-Ow14SbVwcA",
    authDomain: "discord-clone-a19f9.firebaseapp.com",
    databaseURL: "https://discord-clone-a19f9.firebaseio.com",
    projectId: "discord-clone-a19f9",
    storageBucket: "discord-clone-a19f9.appspot.com",
    messagingSenderId: "63410819474",
    appId: "1:63410819474:web:8d318c2172f497af76314b",
    measurementId: "G-PT9VJN64C7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,  provider};
  export default db;