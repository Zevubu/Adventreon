
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth, useUser } from "../context/heart";


function UserRoute({ component: Component, ...rest }) {
  const {authTokens} = useAuth();
  const {isUser} = useUser();
   

  return (
    <Route
      {...rest}
      render={props =>
        authTokens && isUser? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referer: props.location } }} />
        )
      }
    />
  );
}

export default UserRoute;