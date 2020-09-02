import * as React from "react";
import ProductContainer from '../components/Product/ProductContainer'
// import queryString from 'query-string'
import withLayout from "../HOC/withLayout";
import { productActions } from '../_actions';
import { connect } from 'react-redux';

class Product extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount(){
    let url = this.props.location.pathname;
    // let params = queryString.parse(url);
    const productId = url.split('/')[2]
    this.props.getProdById(productId)
  }

  render(){
    const { product } = this.props
    return (
      <div>
        <ProductContainer product={product}/>
      </div>
    );
  }
};

function mapState(state) {
  const { product } = state.product;
  return { product };
}

const actionCreators = {
  getProdById: productActions.getProdById,
};

const connectedProduct = connect(mapState, actionCreators)(Product);

export default withLayout(connectedProduct);