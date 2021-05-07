import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

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
            <DropdownButton
                alignRight
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
                title={props.title}
            >

                <Dropdown.Item eventKey="profile">
                    Profile
                    <span className="material-icons">
                        perm_identity
                    </span>
                </Dropdown.Item>

                <Dropdown.Item eventKey="settings">
                    Settings
                    <span className="material-icons">
                        settings
                    </span>
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item eventKey="signOut">
                    Sign Out
                    <span className="material-icons">
                        logout
                    </span>
                </Dropdown.Item>
            </DropdownButton>

        // {/*<span className="material-icons" >*/}
        // {/*    account_circle*/}
        // {/*    </span>*/}
        //
        // {/*<h4>{value}</h4>*/}

        );

    }
    return null;

}

DropdownMenu.propTypes = {
    title: PropTypes.string.isRequired,
    visibility:PropTypes.bool.isRequired,
}
export default DropdownMenu;
