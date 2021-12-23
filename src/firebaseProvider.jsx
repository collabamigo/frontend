import {getAuth, signInWithCustomToken} from "firebase/auth";
import React, {createContext} from 'react'
import {getApps, initializeApp} from 'firebase/app'
import PropTypes from "prop-types";
import axios from "./utilities/axios";

const firebaseConfig = {
    apiKey: "AIzaSyBGsVMVNqqMgutGKJXEG13r6oGcEtN3hBY",
    authDomain: "collabamigo-testing.firebaseapp.com",
    projectId: "collabamigo-testing",
    storageBucket: "collabamigo-testing.appspot.com",
    messagingSenderId: "109135106784",
    appId: "1:109135106784:web:98615d77bf7c49dc59f685"
};

const FirebaseContext = createContext(null)
export {FirebaseContext}

export default function FirebaseProvider ({children}) {
    let firebase;

    if (!getApps().length)
        firebase = initializeApp(firebaseConfig);
    else
        firebase = getApps()[0];

    const auth = getAuth(firebase);
    if (!auth.currentUser)
        axios.get("/authenticate/get-firebase-token/").then((res) =>
            signInWithCustomToken(auth, res.data.firebaseToken))
    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired
}
