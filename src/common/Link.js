
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default function LinkMod (props) {

    if (props.internal)
        return (
            <Link href={props.to}>
                <a
                    className={props.className}
                >
                    {props.children}
                </a>
            </Link>
        )
    else
        return (
            <a
                className={props.className}
                href={props.to}
            >
                {props.children}
            </a>
        )
}

LinkMod.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    internal: PropTypes.bool,
    to: PropTypes.string.isRequired,
}

LinkMod.defaultProps = {
    className: "",
    internal: false
}
