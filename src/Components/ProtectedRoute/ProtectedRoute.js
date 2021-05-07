import React from "react";
import {Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute (props) {

    let ret;
    if (localStorage.getItem("encrypted_token")) {

        ret = props.children;

    } else {

        ret =
            (
                <Redirect to={
              {
                  pathname: '/403',
              }
          }
                />)

    }
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
