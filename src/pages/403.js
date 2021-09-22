
import React from "react";
import Layout from "../components/Layout";

export default function Unauthorized() {
    return (
        <>
            <h6 className="row justify-content-center m-2">
                ERROR: This page is not meant to be directly accessed.
            </h6>

            <img
                alt="Gandalf you shall not pass"
                className="justify-content-center m-2"
                loading="lazy"
                src="https://i.giphy.com/media/njYrp176NQsHS/giphy.gif"
            />

            <div className="row justify-content-center m-2">
                <a
                    className="btn-lg btn-primary"
                    href="/"
                >
                    Sign in to continue
                </a>
            </div>
        </>
    )
}
