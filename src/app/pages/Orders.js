import * as React from "react";

import withLayout from "../HOC/withLayout";
import {OrderContainer} from './../components/Orders/OrderContainer';

class Orders extends React.Component{
  render(){
    return (
      <div>
        <OrderContainer/>
      </div>
    );
  }
};

export default withLayout(Orders);