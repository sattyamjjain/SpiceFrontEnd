import * as React from "react";
import ProductContainer from '../components/Product/ProductContainer'

import withLayout from "../HOC/withLayout";
import WishListContainer from './../components/wishlist/WishlistContainer';

class Wishlist extends React.Component{
  render(){
    return (
      <div>
        <WishListContainer/>
      </div>
    );
  }
};

export default withLayout(Wishlist);