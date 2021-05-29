import React from "react";
import "./Footer.css";
class Footer extends React.Component {

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate() {

        return false;

    }

    render() {
        return (
            <section>
                <div className="footer">
                    <span className="material-icons link-footer">
                        copyright
                        {" "}
                    </span>

                    <b className="link-footer">
                        2021
                        {" "}

                        <a
                            className="link-footer"
                            href="https://github.com/watson-hex"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Watson-Hex
                        </a>
                    </b>
                </div>
            </section>

        )
    }

}

export default Footer;
