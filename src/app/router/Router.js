import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import HomePage  from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
// import AboutUs from "../pages/AboutUs";
import Product from "../pages/Product";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Admin from '../pages/Admin';
import Dashboard from '../pages/Dashboard';
const history = createHistory();

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/product">  
          {/*           <Route path="/product/:productId">   */}
            <Product />
          </Route>
          {/* <Route path="/aboutUs">
            <AboutUs />
          </Route> */}                                                      
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
