
import {Link as RouterLink} from 'react-router-dom';
import React from "react";
import PropTypes from "prop-types";

function Link(props) {
    const {to, children, ...otherProps} = props;
    return (
        <RouterLink
            {...otherProps}
            to={{
                pathname: to,
                state: {internal: true}
            }}
        >
            {children}
        </RouterLink>
    )
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
}

export default Link;
