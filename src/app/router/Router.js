import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import HomePage  from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Product from "../pages/Product";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Admin from '../pages/Admin';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import {PrivateRoute} from '../pages/PrivateRoute'
import {PrivateAdminRoute} from '../pages/PrivateAdminRoute'
const history = createHistory();

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateAdminRoute path="/dashboard">
            <Dashboard />
          </PrivateAdminRoute>
          <PrivateRoute path="/:username/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/admin">
            <Admin />
          </Route>
          <PrivateRoute path="/:username/cart">
            <Cart />
          </PrivateRoute>
          <PrivateRoute path="/:username/wishlist">
            <Wishlist />
          </PrivateRoute>
          <Route path="/product/:productId">  
            <Product />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>                                                
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
