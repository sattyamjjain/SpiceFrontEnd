import * as React from "react";
import ProductContainer from '../components/Product/ProductContainer'

import withLayout from "../HOC/withLayout";

class Product extends React.Component{
  render(){
    return (
      <div>
        <ProductContainer/>
      </div>
    );
  }
};

export default withLayout(Product);