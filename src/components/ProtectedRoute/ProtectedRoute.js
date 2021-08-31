import React from "react";
import {Redirect, Route, useLocation} from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute (props) {
    let ret;
    const { state: { internal } = {} } = useLocation();
    if (internal || window.location.hostname === "localhost")
        ret = props.children;
    else
        ret =
            (
                <Redirect to={
              {
                  pathname: '/403',
              }
          }
                />)
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Route {...props}>
            {ret}
        </Route>);


}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
}

ProtectedRoute.defaultProps = {
    children: null
}

export default ProtectedRoute;
