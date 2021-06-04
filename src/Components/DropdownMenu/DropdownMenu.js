import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
import {
    Link,
    Route,
} from "react-router-dom";

function signOut () {

    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {

        localStorage.clear();
        window.location.href = "/";

    });

}
function DropdownMenu (props) {

    if (props.visibility) {

        const handleSelect = (e) => {
            if (e === "signOut") {
                signOut();
            }
        };

        return (
            <Route className="dropdown">
                <DropdownButton
                    alignRight
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                    title={props.title}
                >
                    <Link
                        className="text-body dropdown-item"
                        eventKey="profile"
                        to="/profile"
                    >

                        Profile
                        <span className="material-icons col-2">
                            perm_identity
                        </span>
                        
                    </Link>

                    <Dropdown.Item
                        className="dropdown-item"
                        disabled
                        eventKey="settings"
                    >
                        Settings
                        <span className="material-icons col-2">
                            settings
                        </span>
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item eventKey="signOut">
                        Sign Out
                        <span className="material-icons col-2">
                            logout
                        </span>
                    </Dropdown.Item>
                </DropdownButton>
            </Route>
        );

    }
    return null;

}

DropdownMenu.propTypes = {
    title: PropTypes.string.isRequired,
    visibility:PropTypes.bool.isRequired,
}
export default DropdownMenu;
