import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
    const {user, ...other} = props;
    let ret;
    if (user)
    {
        ret = props.children
    }
    else
    {
          ret = <Redirect to={
              {
                  pathname: '/403',
                  state: {
                      from: props.location
                  }
              }
          } />
    }
    return ( <Route {...other}>
            {ret}
    </Route>
    )
}

export default ProtectedRoute
