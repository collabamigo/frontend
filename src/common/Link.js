
import React from "react";
import PropTypes from "prop-types";

export default function LinkMod (props) {
    return(

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
    to: PropTypes.string.isRequired,
}

LinkMod.defaultProps = {
    className: ""
}
