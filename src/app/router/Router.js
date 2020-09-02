import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage  from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Product from "../pages/Product";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Admin from '../pages/Admin';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import Dashboard from '../pages/Dashboard';
import {PrivateRoute} from '../pages/PrivateRoute'
import {PrivateAdminRoute} from '../pages/PrivateAdminRoute'

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
          <PrivateRoute path="/:username/orders">
            <Orders />
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
