import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useTemp } from "../context/heart";

function TempRoute({ component: Component, ...rest }) {
  const {isTempP} = useTemp();
   
//   console.log(`What is Auth token: ${authTokens}`)

  return (
    <Route
      {...rest}
      render={props =>
      isTempP? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/episodes", state: { referer: props.location } }} />
        )
      }
    />
  );
}

export default TempRoute;