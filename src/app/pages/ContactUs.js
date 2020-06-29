import * as React from "react";
import ContactUsContainer from '../components/ContactUs/ContactUsContainer'

import withLayout from "../HOC/withLayout";

class ContactUs extends React.Component{
  render(){
    return (
      <div>
        <ContactUsContainer/>
      </div>
    );
  }
};

export default withLayout(ContactUs);