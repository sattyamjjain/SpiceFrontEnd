import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ comp: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('isAuthenticated')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)