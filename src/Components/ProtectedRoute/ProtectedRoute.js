import React from "react";
import {Redirect, Route} from "react-router-dom";


function ProtectedRoute (props) {

    let ret;
    if (localStorage.getItem("encrypted_token")) {

        ret = props.children;

    } else {

        ret =
            (<Redirect to={
              {
                  pathname: '/403',
                  state: {
                      from: props.location
                  }
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

export default ProtectedRoute;
