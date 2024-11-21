// const { initializeApp } = require("firebase/app")
// const { getAuth } = require("firebase/auth")

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBYb7WnaKS1b0ICu1K2Yw5jqqwXI9VkBqM",
//     authDomain: "fir-messaging-6a487.firebaseapp.com",
//     projectId: "fir-messaging-6a487",
//     storageBucket: "fir-messaging-6a487.firebasestorage.app",
//     messagingSenderId: "936478244530",
//     appId: "1:936478244530:web:ad6e4f93f330bd37fd53ab",
//     measurementId: "G-22V55FBW47"
//   };
// Initialize Firebase

// const firebaseConfig = {

//     apiKey: "AIzaSyDuzIqE7Ag43kDLUYfR03WxzSAQwBxTxYM",
//     authDomain: "ftblr-app-8cca6.firebaseapp.com",
//     projectId: "ftblr-app-8cca6",
//     storageBucket: "ftblr-app-8cca6.firebasestorage.app",
//     messagingSenderId: "688576131973",
//     appId: "1:688576131973:web:16088ff6e173726a5bcaec",
//     measurementId: "G-NJTNMMLLG1"
// };
const firebaseConfig = {
    apiKey: "AIzaSyDJZLhoZNbWiPl64kfLH38AIeTr5_Pnqss",
    authDomain: "webflixo-d558e.firebaseapp.com",
    databaseURL: "https://webflixo-d558e.firebaseio.com/",
    projectId: "webflixo-d558e",
    storageBucket: "webflixo-d558e.firebasestorage.app",
    messagingSenderId: "532885923964",
    appId: "1:532885923964:web:ef4a89167267e5b7b7c1f9",
    measurementId: "G-6SWQTEN6M9"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;