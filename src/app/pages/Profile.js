import * as React from "react";
import ProfileContainer from '../components/Profile/ProfileContainer'

import withLayout from "../HOC/withLayout";

class Profile extends React.Component{
  render(){
    return (
      <div>
        <ProfileContainer/>
      </div>
    );
  }
};

export default withLayout(Profile);