import * as React from "react";
import {ProductContainer} from '../components/Product/ProductContainer'
import queryString from 'query-string'
import withLayout from "../HOC/withLayout";

class Product extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  // componentDidMount(){
  //   console.log(this.props.location.search);
  //   const parsed = queryString.parse(this.props.location.search);
  //   console.log('parsed',parsed);
  // }

  render(){
    // console.log(this.props.history);
    return (
      <div>
        <ProductContainer/>
      </div>
    );
  }
};

export default withLayout(Product);