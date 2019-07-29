import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      ///// Need to determine if user is logged in. Ask userContext?
      // Logout clears userContext. Is BE planning on setting user token/cookie
      // BE set route forwarding?
       truthyStatement ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;