import * as React from "react";
import withLayout from "../HOC/withLayout";
import {WishListContainer} from './../components/wishlist/WishlistContainer';
import { wishlistActions,productActions, cartActions} from '../_actions';
import { connect } from 'react-redux';

const productList = []

class Wishlist extends React.Component{
  constructor(props){
    super(props)
    this.state={
      finalProductList:null,
      userId:null
    }
    this.handleWishlistDelete = this.handleWishlistDelete.bind(this)
    this.handleWishlistCart = this.handleWishlistCart.bind(this)
  }

  componentDidMount(){
    let url = this.props.location.pathname;
    const userId = url.split('/')[1]
    this.setState({
      userId:userId
    })
    this.props.getAllById(userId)
  }

  componentDidUpdate(prevProps,prevState){
    const { wishlists } = this.props
    if(prevProps.wishlists !== wishlists){
      if(this.props.wishlists !== null){
        if(!this.state.isProduct){
          this.props.wishlists.forEach(cartItem=>{
            this.props.getProdById(cartItem.productId)
            .then(res=>{
              productList.push(res)
              this.setState({
                isProduct:true,
                finalProductList:productList
              })
            }).catch(err=>{
              //error
            })
          })
        }
      }
    }
  }

  handleWishlistDelete(id){
    this.props.deleteWishlist(id)
    window.location.reload()
  }

  handleWishlistCart(item){
    item.userId=this.state.userId
    this.props.postCart(item)
    .then(res=>{
      this.props.deleteWishlist(item.id)
    })
    window.location.reload()
  }

  render(){
    const { wishlists } = this.props;
    const { finalProductList } = this.state;
    return (
      <div>
        <WishListContainer wishlists={wishlists} finalProductList={finalProductList} handleWishlistDelete={this.handleWishlistDelete} handleWishlistCart={this.handleWishlistCart}/>
      </div>
    );
  }
};

function mapState(state) {
  const { wishlists } = state.wishlist;
  const { product } = state.product
  return { wishlists, product };
}

const actionCreators = {
  getAllById: wishlistActions.getAllById,
  getProdById: productActions.getProdById,
  deleteWishlist:wishlistActions.deleteWishlist,
  postCart:cartActions.postCart
};

const connectedWishList = connect(mapState, actionCreators)(Wishlist);

export default withLayout(connectedWishList);