
import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {useAuth} from "../context/heart";

function LoggedInRoute({ component: Component, ...rest }) {
  const {authTokens} = useAuth();
   

  return (
    <Route
      {...rest}
      render={props =>
        authTokens? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { referer: props.location } }} />
        )
      }
    />
  );
}

export default LoggedInRoute;