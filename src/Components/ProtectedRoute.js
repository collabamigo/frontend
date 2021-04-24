import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
    const {user, ...other} = props;
    if (user)
    {
        return (
            <Route {...other}>
                {props.children}
            </Route>
        )
    }
    else
    {
          return <Redirect to={
              {
                  pathname: '/403',
                  state: {
                      from: props.location
                  }
              }
          } />
    }
}

export default ProtectedRoute
