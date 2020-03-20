import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth, useManagment} from "../context/heart";

function ManagmentRoute({ component: Component, ...rest }) {
  const {authTokens} = useAuth();
  const {IsManager} =useManagment();
   
//   console.log(`What is Auth token: ${authTokens}`)

  return (
    <Route
      {...rest}
      render={props =>
        authTokens && IsManager? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { referer: props.location } }} />
        )
      }
    />
  );
}

export default ManagmentRoute;
