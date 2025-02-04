import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyByDsSG1P6NqaMO9AJlfxnCNLu1hRxCDx8",
  authDomain: "netflix-clone-89f97.firebaseapp.com",
  projectId: "netflix-clone-89f97",
  storageBucket: "netflix-clone-89f97.firebasestorage.app",
  messagingSenderId: "391196436879",
  appId: "1:391196436879:web:dd775248bfcaa3b5c143fa",
  measurementId: "G-R85F3ZNZF8"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
