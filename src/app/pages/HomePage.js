import * as React from "react";
import HomePageContainer from '../components/HomePage/HomePageContainer'

import withLayout from "../HOC/withLayout";

class HomePage extends React.Component{
  render(){
    return (
      <div>
        <HomePageContainer/>
      </div>
    );
  }
};

export default withLayout(HomePage);