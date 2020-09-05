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
    this.props.getAll()
  }

  render(){
    const { products } = this.props
    return (
      <div>
        <HomePageContainer products={products}/>
      </div>
    );
  }
};

function mapState(state) {
  const { products } = state.product;
  return { products };
}

const actionCreators = {
  getAll: productActions.getAll,
};

const connectedProduct = connect(mapState, actionCreators)(HomePage);

export default withLayout(connectedProduct);