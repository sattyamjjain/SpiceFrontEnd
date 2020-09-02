import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateAdminRoute = ({ comp: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('admin')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/admin', state: { from: props.location } }} />
    )} />
)