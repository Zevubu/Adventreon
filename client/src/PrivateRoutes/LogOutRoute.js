
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth, useUser } from "../context/heart";

function LogOutRoute({ component: Component, ...rest }) {
  const {authTokens, isAuthenticated} = useAuth();
  const {isUser} = useUser();
   
  console.log(`What is Auth token: ${authTokens}`)

  return (
    <Route
      {...rest}
      render={props =>
        !authTokens && !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { referer: props.location } }} />
        )
      }
    />
  );
}

export default LogOutRoute;