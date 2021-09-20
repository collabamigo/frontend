import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

export default function LinkMod (props) {
    return(

        <Link
            href={props.to}
        >
            <a className={props.className}>
                {props.children}
            </a>
        </Link>
    )
}

LinkMod.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
}

LinkMod.defaultProps = {
    className: ""
}
