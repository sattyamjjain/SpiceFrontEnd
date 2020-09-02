import * as React from "react";
import withLayout from "../HOC/withLayout";
import {WishListContainer} from './../components/wishlist/WishlistContainer';
import { wishlistActions} from '../_actions';
import { connect } from 'react-redux';

class Wishlist extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount(){
    this.props.getAll(4)
  }

  render(){
    const { wishlists } = this.props;
    console.log('wishlists',wishlists)
    return (
      <div>
        <WishListContainer wishlists={wishlists} />
      </div>
    );
  }
};

function mapState(state) {
  const { wishlists } = state.wishlist;
  return { wishlists };
}

const actionCreators = {
  getAll: wishlistActions.getAll,
};

const connectedWishList = connect(mapState, actionCreators)(Wishlist);

export default withLayout(connectedWishList);