import * as React from "react";

import withLayout from "../HOC/withLayout";
import CartContainer from './../components/Cart/CartContainer';

class Cart extends React.Component{
  render(){
    return (
      <div>
        <CartContainer/>
      </div>
    );
  }
};

export default withLayout(Cart);