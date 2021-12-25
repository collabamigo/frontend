
import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

export default function Link (props) {

    // if (props.internal)
        return (
            <NextLink href={props.to}>
                <a
                    className={props.className}
                >
                    {props.children}
                </a>
            </NextLink>
        )
    // else
    //     return (
    //         <a
    //             className={props.className}
    //             href={props.to}
    //         >
    //             {props.children}
    //         </a>
    //     )
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
}

Link.defaultProps = {
    className: "",
}
