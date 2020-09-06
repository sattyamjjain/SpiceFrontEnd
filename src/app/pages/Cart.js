import * as React from "react";
import withLayout from "../HOC/withLayout";
import {CartContainer} from './../components/Cart/CartContainer';
import { cartActions} from '../_actions';
import { connect } from 'react-redux';

class Cart extends React.Component{
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
    const { carts } = this.props;
    return (
      <div>
        <CartContainer carts={carts}/>
      </div>
    );
  }
};

function mapState(state) {
  const { carts } = state.cart;
  return { carts };
}

const actionCreators = {
  getAllById: cartActions.getAllById,
};

const connectedCart = connect(mapState, actionCreators)(Cart);

export default withLayout(connectedCart);