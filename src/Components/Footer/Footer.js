import React from "react";
import "./Footer.css";

class Footer extends React.Component {

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate () {

        return false;

    }

    render () {

        return (
            <div className="footer">
                <span className="material-icons">
                    copyright
                    {" "}
                </span>
                2021 Watson-Hex
            </div>
        );

    }

}

export default Footer;
