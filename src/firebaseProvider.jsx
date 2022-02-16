import {getAuth, signInWithCustomToken} from "firebase/auth";
import React, {createContext, useEffect} from "react";
import {getApps, initializeApp} from 'firebase/app'
import PropTypes from "prop-types";
import axios from "./utilities/axios";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

const FirebaseContext = createContext(null)
export { FirebaseContext }

let firebase;

if (!getApps().length) firebase = initializeApp(firebaseConfig);
else firebase = getApps()[0];

const messaging = getMessaging(firebase);


export const getFToken = async (setTokenFound) => {
  let currentToken = '';
  try {
    currentToken = await getToken(messaging,{
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log('An error occurred while retrieving token.', error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging,(payload) => {
      resolve(payload);
    });
  });

export default function FirebaseProvider ({children, loggedIn}) {
    const auth = getAuth(firebase);
    useEffect(() => {
        if (!auth.currentUser)
            axios.get("/authenticate/get-firebase-token/").then((res) =>
                signInWithCustomToken(auth, res.data.firebaseToken))
    }, [loggedIn])

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
    loggedIn: PropTypes.bool.isRequired
}
