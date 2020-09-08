import * as React from "react";
import withLayout from "../HOC/withLayout";
import {CartContainer} from './../components/Cart/CartContainer';
import { cartActions,productActions,wishlistActions} from '../_actions';
import { connect } from 'react-redux';

const productList = []

class Cart extends React.Component{
  constructor(props){
    super(props)
    this.state={
      finalProductList:null,
      isProduct:false,
      userId:null
    }
    this.handleCartDelete = this.handleCartDelete.bind(this)
    this.handleWishlistCart= this.handleWishlistCart.bind(this)
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
    const { carts } = this.props
    if(prevProps.carts !== carts){
      if(this.props.carts !== null){
        if(!this.state.isProduct){
          this.props.carts.forEach(cartItem=>{
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

  handleCartDelete(item){
    this.props.deleteCart(item.id)
    window.location.reload()
  }

  handleWishlistCart(item){
    item.userId=this.state.userId
    this.props.postWishlist(item)
    .then(res=>{
      this.props.deleteCart(item.id)
    })
    window.location.reload()
  }

  render(){
    const { carts } = this.props;
    const { finalProductList } = this.state;
    return (
      <div>
        <CartContainer carts={carts} finalProductList={finalProductList} handleCartDelete={this.handleCartDelete} handleWishlistCart={this.handleWishlistCart}/>
      </div>
    );
  }
};

function mapState(state) {
  const { carts } = state.cart;
  const { product } = state.product
  return { carts, product };
}

const actionCreators = {
  getAllById: cartActions.getAllById,
  getProdById: productActions.getProdById,
  deleteCart:cartActions.deleteCart,
  postWishlist:wishlistActions.postWishlist
};

const connectedCart = connect(mapState, actionCreators)(Cart);

export default withLayout(connectedCart);