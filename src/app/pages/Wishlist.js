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
    let url = this.props.location.pathname;
    const userId = url.split('/')[1]
    this.props.getAllById(userId)
  }

  render(){
    const { wishlists } = this.props;
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
  getAllById: wishlistActions.getAllById,
};

const connectedWishList = connect(mapState, actionCreators)(Wishlist);

export default withLayout(connectedWishList);