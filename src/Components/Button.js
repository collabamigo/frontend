
import React from "react";
import PropTypes from "prop-types";


function Button (props) {

    const {visibility, ...other} = props;
    if (visibility === undefined) {

    }
    if (visibility) {

        return (
            <button
                type="button"
                {...other}
            >
                {props.children}
            </button>
        );

    }
    return null;

}
Button.propTypes = {
    children: PropTypes.node,
    visibility: PropTypes.string.isRequired,
}

Button.defaultProps = {
    children: null
}
export default Button;
