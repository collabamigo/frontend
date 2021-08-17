import "./GoogleSignIn.css";
import React, {useState} from "react";
import PropTypes from 'prop-types'
import FormSignIn from "../FormSignIn/FormSignIn";
import axios from "axios";
import backend from "../../env";
import jws from "jsonwebtoken";

function rsa_encrypt (plaintext) {

    const NodeRSA = require("node-rsa"),
        key = new NodeRSA(),
        publicKey = "-----BEGIN PUBLIC KEY-----\n" +
        "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAviuJnPMOFsTwxY22ajnr\n" +
        "2gjkvp3L6SEpRIffHYIbXcl5XVpqr7rH3aW7VC48Dr2qxSqhVcHQrv5yl6jIXyr2\n" +
        "IfOeHpMY4SmSAyN1DL1kCNvlnaOjeyG4cTj44V6GKRWQF+nt4rd+Ym7gZFFBLrL0\n" +
        "LwhR9N1zUTAVehK0S3rdniEvWXo1noWs1hbhXf7wcXkNo4KGl5NRoS8piuDmU2io\n" +
        "pTBvaDPmquAOZ0kRVkJtiqwfoBiUrYLSM8BFrkOzLqlO4Abj62fG2HJ4RR0y/fXX\n" +
        "pCDAH/cNivTni5Cw6MXYxWQSm6GFJfzwZRRrJg87oIEtLU3OWs0pitTHRu8qAChu\n" +
        "WzzHIwkmEKdQrWNqABGHk/FzEC2L56aQhlXOTD1mkrDr2PtIynYkicsDG2aZYCWG\n" +
        "wZN9HBsSJkuMy8enHKS3Jex6XxJ/CDIlMHVXGcPfA7SS8f6ao7fTQxhdHhyZmkdm\n" +
        "OeSwCye7MZhzDp3+UlHHjq8Wi/hYknq0WLvG9sQcarfzs+t8NrVfZl3zZXCeb9t/\n" +
        "EpTaEqTmGG8MQqax01W1gkXchKVRdo4bk6MnIwPNVT/An1VQi0glODSeSCRYrbdS\n" +
        "8nAFKEhjAQKx0FZ68rmGOIxmEPkBH59i21fATLLsx8Ubh8PakGmIa3rezgZ+6Yi5\n" +
        "M+doF8Bbbr4YJ6qdWSRBHDMCAwEAAQ==\n" +
        "-----END PUBLIC KEY-----\n";
    key.importKey(
        publicKey,
        "pkcs8-public"
    );
    return key.encrypt(
        plaintext,
        "hex"
    );

}

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
                    rsa_encrypt(encrypted_token.key.toString())
                );

                localStorage.setItem(
                    "iv",
                    encrypted_token.iv.toString()
                );


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

                props.onClick();
            }
        })
    }

    window.onSignIn = (googleUser) => {
        onSignIn(googleUser);
    };

    if (props.visibility) {

        if (props.stage==="button")
            return (
                <>
                    <div
                        data-auto_select={Boolean(localStorage.getItem("encrypted_token"))}
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
    onClick: PropTypes.func.isRequired,
    setStage: PropTypes.func.isRequired,
    stage: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired,
}
export default GoogleSignIn;
