
import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

export default function Link (props) {

    // if (props.internal)
        return (
            <NextLink
                href={props.to}
                passHref
            >
                <a
                    className={props.className}
                    target={props.openInNewTab ? "_blank" : '_self'}
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
    openInNewTab: PropTypes.bool,
    to: PropTypes.string.isRequired,
}

Link.defaultProps = {
    className: "",
    openInNewTab: false,
}
