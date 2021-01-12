import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCorytPE5k9DgkDi5NaULW6y9BHA-wzu-o",
  authDomain: "whatsapp-clone-af353.firebaseapp.com",
  projectId: "whatsapp-clone-af353",
  storageBucket: "whatsapp-clone-af353.appspot.com",
  messagingSenderId: "445912996273",
  appId: "1:445912996273:web:1c115c23584d8f32df4590",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;