import React from "react";
import {footer, linkFooter} from './Footer.module.css';
class Footer extends React.Component {

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate() {

        return false;

    }

    render() {
        return (
            <footer className={'d-flex flex-row' + ' ' + footer}>
                <div className={'col-md-7' + ' ' + linkFooter}>
                    <b className="float-right pe-5">
                        {/*eslint-disable-next-line*/}
                        <a
                            className={linkFooter}
                            href="https://github.com/watson-hex/frontend-collabamigo/"
                            rel="noopener"
                            target="_blank"
                            type="external"
                        >
                            Watson-Hex &#169; 2021
                        </a>
                    </b>
                </div>

                <div className="col-md-5 float-right ">
                    <a
                        className={'float-right' + ' ' + linkFooter}
                        href="https://forms.gle/MScukDTAhm2N3ixA8"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Review Us
                    </a>
                </div>
                    
            </footer>

        )
    }

}

export default Footer;
