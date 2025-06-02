const firebaseConfig = {
  apiKey: "AIzaSyCawwZlSBAD7UHGNtsgk5roxDAtqPsxtWI",
  authDomain: "classtrack-3f480.firebaseapp.com",
  projectId: "classtrack-3f480",
  storageBucket: "classtrack-3f480.firebasestorage.app",
  messagingSenderId: "1085626289712",
  appId: "1:1085626289712:web:daf1355165e78cb69da7f5",
  measurementId: "G-4WWM93X3WG"
};

// initialize Firebase
firebase.initializeApp(firebaseConfig);

// export Firebase services to use elsewhere
const auth = firebase.auth();
const db = firebase.firestore();