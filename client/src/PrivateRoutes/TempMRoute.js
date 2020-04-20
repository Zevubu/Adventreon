import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useTempM } from "../context/heart";

function TempRoute({ component: Component, ...rest }) {
  const {isTempM} = useTempM();
   
//   console.log(`What is Auth token: ${authTokens}`)

  return (
    <Route
      {...rest}
      render={props =>
      isTempM? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/", state: { referer: props.location } }} />
        )
      }
    />
  );
}

export default TempRoute;