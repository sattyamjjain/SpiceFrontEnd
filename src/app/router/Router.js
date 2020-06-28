import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import HomePage  from "../pages/HomePage";
import { ContactUs } from "../pages/ContactUs";
import { AboutUs } from "../pages/AboutUs";
const history = createHistory();

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
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
