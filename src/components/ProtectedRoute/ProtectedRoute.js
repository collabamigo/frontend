import React from "react";
import PropTypes from "prop-types";

function ProtectedRoute (props) {
    let ret;
    ret = props.children;
    // if (typeof window !== undefined)
    // {
    //     const {state: {internal} = {}} = useLocation();
    //     if (internal || window.location.hostname === "localhost")
    //         ret = props.children;
    // }
    // else
    //     ret =
    //         (
    //             <Redirect to={
    //           {
    //               pathname: '/403',
    //           }
    //       }
    //             />)
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...props}>
            {ret}
        </div>);


}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
}

ProtectedRoute.defaultProps = {
    children: null
}

export default ProtectedRoute;
