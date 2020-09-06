import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateAdminRoute = ({ comp: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      JSON.parse(localStorage.getItem('isAdminAuthenticated'))
        ? <Component {...props} />
        : <Redirect to="/admin" />
    )}
  />
);