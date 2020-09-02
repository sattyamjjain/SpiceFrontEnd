import * as React from "react";
import {HomePageContainer} from '../components/HomePage/HomePageContainer'
import withLayout from "../HOC/withLayout";
import { productActions } from '../_actions';
import { connect } from 'react-redux';

class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  
  componentDidMount(){
    console.log('componentDidMount 1')
    this.props.getAll()
  }

  render(){
    const { product } = this.props
    console.log('product',product)
    return (
      <div>
        <HomePageContainer product={product}/>
      </div>
    );
  }
};

function mapState(state) {
  const { product } = state.product;
  return { product };
}

const actionCreators = {
  getAll: productActions.getAll,
};

const connectedProduct = connect(mapState, actionCreators)(HomePage);

export default withLayout(connectedProduct);