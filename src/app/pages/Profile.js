import * as React from "react";
import {ProfileContainer} from '../components/Profile/ProfileContainer'
import withLayout from "../HOC/withLayout";
import { userActions } from '../_actions';
import { connect } from 'react-redux';

class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount(){
    let url = this.props.location.pathname;
    const userId = url.split('/')[1]
    this.props.getUser(userId)
  }

  render(){
    console.log('user',this.props.user)
    return (
      <div>
        <ProfileContainer user={this.props.user}/>
      </div>
    );
  }
};

function mapState(state) {
  const { user } = state.users;
  return { user };
}

const actionCreators = {
  getUser: userActions.getUser,
};

const connectedProfile = connect(mapState,actionCreators)(Profile);

export default withLayout(connectedProfile);