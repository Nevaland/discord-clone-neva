import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgxq94ntjRRMaTGktuALeg26imkeQPYFQ",
  authDomain: "discord-clone-neva.firebaseapp.com",
  projectId: "discord-clone-neva",
  storageBucket: "discord-clone-neva.appspot.com",
  messagingSenderId: "105482699983",
  appId: "1:105482699983:web:dba8fc80fc4ba942e7a3ba",
  measurementId: "G-SRX51VCBMB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
