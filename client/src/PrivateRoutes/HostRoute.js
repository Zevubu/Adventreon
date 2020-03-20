import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth, useHost } from "../context/heart";

function HostRoute({ component: Component, ...rest }) {
  const {authTokens} = useAuth();
  const {isHost} = useHost();
   
//   console.log(`What is Auth token: ${authTokens}`)

  return (
    <Route
      {...rest}
      render={props =>
        authTokens && isHost? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { referer: props.location } }} />
        )
      }
    />
  );
}

export default HostRoute;
