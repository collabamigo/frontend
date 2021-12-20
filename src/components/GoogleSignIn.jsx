
import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
import FormSignIn from "./FormSignIn/FormSignIn";
import axios from "utilities/axios";
import backend from "../env";
import jwt from "jsonwebtoken";
import {setToken} from "../utilities/axios";

function GoogleSignIn ({isAuthenticated, setLoggedIn, setStage, stage, visibility}) {
    const myRef = React.createRef();
    async function profileExists (googleUser) {
        if (stage==="button")
            return {
                res:await axios.get("connect/profile/?format=json"),
                googleUser: googleUser
            }
    }

    const [initializing, setInitializing] = useState(true);

    useEffect(() => {

        if (window.google && !isAuthenticated && initializing) {
            window.google.accounts.id.initialize({
                auto_select: false,
                client_id: "597159953447-snucndrn3auafnv7gutico5vqvj20j3s.apps.googleusercontent.com",
                callback: onSignIn,
                context: "signin",
                ux_mode: "popup",
            })
            window.google.accounts.id.prompt()
            window.google.accounts.id.renderButton(myRef.current, {
                text: "continue with Skype",
                theme: 'filled_black',
                shape: "pill",
                size: 'large',

            })
            setInitializing(false)
        }
    })


    const [googleUserState, setGoogleUserState] = useState(undefined);


    async function onSignIn(googleUser) {
        if (stage === "button") {
            if (jwt.decode(googleUser.credential).hd !== "iiitd.ac.in") {
                alert("Please login using your IIITD ID")
                window.google.accounts.id.revoke(jwt.decode(googleUser.credential).email, () => {
                    localStorage.clear();
                    window.location.href = "/";
                })
            }

            let res_temp = await axios.post(backend + "authenticate/oauthcallback/", {
                "jwt": googleUser.credential
            })
            setToken(res_temp.data['access_token'])

            if (!googleUserState)
                setGoogleUserState(jwt.decode(googleUser.credential));
            // setStage("form")


            // setLoggedIn()
            // await router.push("/")

        }
        if (!googleUserState)
            setGoogleUserState(jwt.decode(googleUser.credential));

        profileExists(googleUser).then((res) => {
            if (!res.res.data.length) {
                if (!googleUserState)
                    setGoogleUserState(jwt.decode(googleUser.credential));
                setStage("form");
            } else {
                setLoggedIn()
            }
        })
    }


    let loggedIn=false;
    if (typeof window !== "undefined") {
        window.onSignIn = (googleUser) => {
            onSignIn(googleUser);
        };
        loggedIn = Boolean(localStorage.getItem("encrypted_token"));
        loggedIn = Boolean(localStorage.getItem("encrypted_token"));
    }
    if (visibility) {

        if (stage==="button")
            return (
                <div
                    ref={myRef}
                />
                );
        else if (stage==="form") {
            console.log(googleUserState)
            return (
                <FormSignIn
                    emailId={googleUserState.email}
                    firstName={googleUserState.name}
                    lastName=""
                    onSubmit={onSignIn}
                />
            )
        }

    }
    return null;

}

GoogleSignIn.propTypes={
    isAuthenticated: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    setStage: PropTypes.func.isRequired,
    stage: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired,
}
export default GoogleSignIn;
