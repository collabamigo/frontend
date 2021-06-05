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
        <>

            <CustomNavLinkSmall className="btn">
                <Link
                    className="magic_span"
                    to="/about"
                >
                    About Us
                </Link>
            </CustomNavLinkSmall>

            <CustomNavLinkSmall className="btn">
                <Link
                    className="magic_span"
                    to="/profile"
                >
                    Profile
                </Link>
            </CustomNavLinkSmall>

            <CustomNavLinkSmall>
                <span className="btn btn-primary btn-block disabled">
                    <div >
                        Rate others
                    </div>
                </span>
            </CustomNavLinkSmall>

            <CustomNavLinkSmall>
                <span className="btn">
                    <div onClick={signOut}>
                        Sign Out
                    </div>
                </span>
            </CustomNavLinkSmall>
        </>
    );
  }
export default withTranslation()(DropdownMenu);
