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
                <div className="footer justify-content-center">

                    <b className="link-footer">
                        &#169; 2021
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

                    <a
                        className="float-right text-black-50"
                        href="https://forms.gle/MScukDTAhm2N3ixA8"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Review CollabConnect
                    </a>
                    
                </div>
            </section>

        )
    }

}

export default Footer;
