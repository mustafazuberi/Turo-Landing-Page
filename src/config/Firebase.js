import swal from "sweetalert";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyBPjVR4AhOGN8S2ys9PL3yATnkSW-G1n4Q",
  authDomain: "turo-189ed.firebaseapp.com",
  projectId: "turo-189ed",
  storageBucket: "turo-189ed.appspot.com",
  messagingSenderId: "388819211345",
  appId: "1:388819211345:web:997c03693522735d631470",
  measurementId: "G-LGWKBDTNLN",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// sigin wth google
const signInGoogle = async () => {
  try {
    var provider = new GoogleAuthProvider();
    const result = await auth;
    await signInWithPopup(auth, provider);
    await addUserToDB();
    await swal("Congratulations!", "Loggined successfully!", "success");
  } catch (e) {
    console.log(e.message);
  }
};
console.log(auth);

// adding users to database
const addUserToDB = async () => {
  const uid = auth.currentUser.uid;
  var userProfile = { email: "", name: "", photoURL: "" };
  userProfile.email = auth.currentUser.email;
  userProfile.name = auth.currentUser.displayName;
  userProfile.photoURL = auth.currentUser.photoURL;

  return setDoc(doc(db, "users", uid), userProfile);
};

export default signInGoogle;

export {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  getFirestore,
  doc,
  setDoc,
  swal,
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
