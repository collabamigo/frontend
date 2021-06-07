import React from "react";
import "./DropdownMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Link,
} from "react-router-dom";

function signOut () {

    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {

        localStorage.clear();
        window.location.href = "/";

    });

}

import {
  CustomNavLinkSmall,
} from "../Header/styles";
import {withTranslation} from "react-i18next";

  function DropdownMenu () {
    return (

// TODO: shift the nav bar to right
        <div>
            <CustomNavLinkSmall className="btn" />

            <Link
                className="magic_span"
                to="/profile"
            >
                Profile
            </Link>

            <CustomNavLinkSmall className="btn">
                
                <Link
                    className="magic_span"
                    to="/history"
                >
                    Connections
                </Link>
            </CustomNavLinkSmall>

            <CustomNavLinkSmall>
                
                <Link
                    className="magic_span"
                    to="/about"
                >
                    About Us
                </Link>
            </CustomNavLinkSmall>

            <CustomNavLinkSmall>
                <span className="btn">
                    <div onClick={signOut}>
                        <svg
                            className="bi bi-box-arrow-right"
                            fill="currentColor"
                            height="30"
                            viewBox="0 0 16 16"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                                fillRule="evenodd"
                            />

                            <path
                                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                </span>
            </CustomNavLinkSmall>
        </div>
    );
  }
export default withTranslation()(DropdownMenu);
