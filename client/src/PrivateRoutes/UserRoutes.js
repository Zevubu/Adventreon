
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth} from "../context/heart";
//, useUser

function UserRoute({ component: Component, ...rest }) {
  const {authTokens} = useAuth();
  // const {isUser} = useUser();
   

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