// const { initializeApp } = require("firebase/app")
// const { getAuth } = require("firebase/auth")

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBYb7WnaKS1b0ICu1K2Yw5jqqwXI9VkBqM",
    authDomain: "fir-messaging-6a487.firebaseapp.com",
    projectId: "fir-messaging-6a487",
    storageBucket: "fir-messaging-6a487.firebasestorage.app",
    messagingSenderId: "936478244530",
    appId: "1:936478244530:web:ad6e4f93f330bd37fd53ab",
    measurementId: "G-22V55FBW47"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;