import React from "react";
import "./Footer.css";
class Footer extends React.Component {

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate() {

        return false;

    }

    render() {
        return (

            <div className="footer">
                This will always appear at the bottom of the page, but
                <strong>
                    not fixed
                </strong>
                .
            </div>

        )
    }

}

export default Footer;
