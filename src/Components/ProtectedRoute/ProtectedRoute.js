import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function ProtectedRoute(props) {
    let ret;
    if (localStorage.getItem('encrypted_token'))
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
    return ( <Route {...props}>
            {ret}
    </Route>
    )
}

export default ProtectedRoute
