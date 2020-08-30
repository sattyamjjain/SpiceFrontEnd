import * as React from "react";
import ProfileContainer from '../components/Profile/ProfileContainer'
import withLayout from "../HOC/withLayout";
import { profileActions} from '../_actions';
import { connect } from 'react-redux';

class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount(){
    this.props.getUser(4)
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

  console.log('state profile',state.profile)
  // const { user } = state.profile;
  // console.log('conatiner user',user)
  // return { user };
}

const actionCreators = {
  getUser: profileActions.getUser,
};

// const mapStateToProps  = { getUser: profileActions.getUser };

const connectedProfile = connect(mapState,actionCreators)(Profile);

export default withLayout(connectedProfile);