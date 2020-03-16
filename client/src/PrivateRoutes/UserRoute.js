
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth, useUser, useUserInfo } from "../context/heart";


function UserRoute({ component: Component, ...rest }) {
  const {authTokens} = useAuth();
  const {isUser} = useUser();
  const {isData} =  useUserInfo();
   
  console.log(`What is Auth token: ${authTokens}`)

  return (
    <Route
      {...rest}
      render={props =>
        authTokens? (
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