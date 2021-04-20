import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
//
// const firebaseConfig = {
//   apiKey: "AIzaSyAte61EJvF1myj2hs9sPbfJl-cbJVR5N2A",
//   authDomain: "collabconnect-242d8.firebaseapp.com",
//   projectId: "collabconnect-242d8",
//   storageBucket: "collabconnect-242d8.appspot.com",
//   messagingSenderId: "713675182964",
//   appId: "1:713675182964:web:1900f01474588dc49f1221",
//   measurementId: "G-CHLV43EN5M"
// };

// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
