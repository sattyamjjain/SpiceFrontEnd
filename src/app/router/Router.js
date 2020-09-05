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
import { OrderContainer } from '../components/Admin/OrderContainer'
import { PaymentContainer } from '../components/Admin/PaymentContainer'
import { ReviewContainer } from '../components/Admin/ReviewContainer'
import { ProductContainer } from '../components/Admin/ProductContainer'
import { UserContainer } from '../components/Admin/UserContainer'
import { DashboardContainer } from '../components/Admin/DashboardContainer'


export default function Router (){
    return (
      <BrowserRouter>
        <Switch>
          {/* <PrivateAdminRoute path="/shuklamasala/order" comp={OrderContainer}/>
          <PrivateAdminRoute path="/shuklamasala/payment" comp={PaymentContainer}/>
          <PrivateAdminRoute path="/shuklamasala/review" comp={ReviewContainer}/>
          <PrivateAdminRoute path="/shuklamasala/product" comp={ProductContainer}/>
          <PrivateAdminRoute path="/shuklamasala/user" comp={UserContainer}/>
          <PrivateAdminRoute path="/shuklamasala/dashboard" comp={DashboardContainer}/> */}
          <PrivateAdminRoute path="/shuklamasala/dashboard" comp={Dashboard} />
          <Route path="/admin" component={Admin} />
          <PrivateRoute path="/:username/profile" comp={Profile}/>
          <PrivateRoute path="/:username/orders" comp={Orders} />
          <PrivateRoute path="/:username/cart" comp={Cart} />
          <PrivateRoute path="/:username/wishlist" comp={Wishlist} />
          <Route path="/product/:productId" component={Product} />  
          <Route path="/aboutUs" component={AboutUs} />                                             
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
}
