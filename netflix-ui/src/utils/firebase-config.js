import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD81f9w2M2PJ86VnSQjS2hnKy3DBla7yBk",
  authDomain: "react-netflix-clone-df022.firebaseapp.com",
  projectId: "react-netflix-clone-df022",
  storageBucket: "react-netflix-clone-df022.firebasestorage.app",
  messagingSenderId: "932177139624",
  appId: "1:932177139624:web:6f8ee4106b1dea3f8d2f9d",
  measurementId: "G-2WFTQWQ1TZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
