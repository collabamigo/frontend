import "./GoogleSignIn.css";
import React, {useState} from "react";
import PropTypes from 'prop-types'
import FormSignIn from "../FormSignIn/FormSignIn";
import axios from "axios";
import backend from "../../env";
import jws from "jsonwebtoken";
import {setLoggedIn} from "../../utils/auth"


function GoogleSignIn (props) {
    async function profileExists (googleUser) {
        if (props.stage==="button")
            return {
                res:await axios.get(backend+"connect/profile/?format=json"),
                googleUser: googleUser
            }
        else
            return {
            res:{data: ["DUMMY"]},
            googleUser: googleUser
        }
    }


    const [googleUserState, setGoogleUserState] = useState(undefined);

    function onSignIn (googleUser) {
        if (props.stage==="button") {
            if (jws.decode(googleUser.credential).hd !== "iiitd.ac.in") {
                alert("Please login using your IIITD ID")
                window.google.accounts.id.revoke(jws.decode(googleUser.credential).email, () => {
                    localStorage.clear();
                    window.location.href = "/";
                })
            }

            const crypto = require('crypto');
            const CryptoJS = require("crypto-js");

            console.log("SuperSecret ", googleUser.credential)

            const encrypted_token = CryptoJS.AES.encrypt(googleUser.credential,
                crypto.randomBytes(32).toString(), {
                    mode: CryptoJS.mode.CBC,
                });

            {
                localStorage.setItem(
                    "encrypted_token",
                    encrypted_token.ciphertext.toString()
                );

                localStorage.setItem(
                    "aes_key",
                    encrypted_token.key.toString()
                );

                localStorage.setItem(
                    "iv",
                    encrypted_token.iv.toString()
                );

                setLoggedIn()

            }
        }
        if (!googleUserState)
            setGoogleUserState(jws.decode(googleUser.credential));

        profileExists(googleUser).then((res)=>{
            if (!res.res.data.length) {
                if (!googleUserState)
                    setGoogleUserState(res.googleUser);
                props.setStage("form");
            }
            else{
                if (res.res.data[0].id)
                    localStorage.setItem("id", res.res.data[0].id)
                if (googleUserState){
                    localStorage.setItem(
                    "userName",
                    googleUserState.name
                    );
                }
                else{
                    localStorage.setItem(
                    "userName",
                    jws.decode(res.googleUser.credential).name
                    );
                }
            }
        })
    }

    let loggedIn=false;
    if (typeof window !== "undefined") {
        window.onSignIn = (googleUser) => {
            onSignIn(googleUser);
        };
        loggedIn = Boolean(localStorage.getItem("encrypted_token"));
    }
    if (props.visibility) {

        if (props.stage==="button")
            return (
                <>
                    <div
                        data-auto_select={loggedIn}
                        data-callback="onSignIn"
                        data-client_id="597159953447-snucndrn3auafnv7gutico5vqvj20j3s.apps.googleusercontent.com"
                        data-context="signin"
                        data-ux_mode="popup"
                        id="g_id_onload"
                    />

                    <div
                        className="g_id_signin"
                        data-logo_alignment="left"
                        data-shape="pill"
                        data-size="large"
                        data-text="continue_with"
                        data-theme="filled_blue"
                        data-type="standard"
                    />
                </>);
        else if (props.stage==="form")
            return (
                <FormSignIn
                    emailId={googleUserState.email}
                    firstName={googleUserState.name}
                    lastName=""
                    onSubmit={onSignIn}
                />
            )

    }
    return null;

}

GoogleSignIn.propTypes={
    setStage: PropTypes.func.isRequired,
    stage: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired,
}
export default GoogleSignIn;
