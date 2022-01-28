import {getAuth, signInWithCustomToken} from "firebase/auth";
import React, {createContext, useEffect} from "react";
import {getApps, initializeApp} from 'firebase/app'
import PropTypes from "prop-types";
import axios from "./utilities/axios";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
};

const FirebaseContext = createContext(null)
export {FirebaseContext}

export default function FirebaseProvider ({children, loggedIn}) {
    let firebase;

    if (!getApps().length)
        firebase = initializeApp(firebaseConfig);
    else
        firebase = getApps()[0];

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
