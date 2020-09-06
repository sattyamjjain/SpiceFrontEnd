import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ comp: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      JSON.parse(localStorage.getItem('isAuthenticated'))
        ? <Component {...props} />
        : <Redirect to="/" />
    )}
  />
);