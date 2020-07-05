import * as React from "react";

import withLayout from "../HOC/withLayout";
import AboutUsContainer from './../components/AboutUs/AboutUsContainer';

class AboutUs extends React.Component{
  render(){
    return (
      <div>
        <AboutUsContainer/>
      </div>
    );
  }
};

export default withLayout(AboutUs);