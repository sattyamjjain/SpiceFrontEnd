import React from "react";
import {Button,Divider,Typography} from '@material-ui/core';
import { userActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MainContainer = styled.div`
    width:100%;
    padding:15px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

class DeleteAddressContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete = () =>{
        console.log('delete data',this.props.userAddress)
        this.props.deleteAddress(this.props.userAddress.id)
    }

  render() {
    return (
        <MainContainer>
            <Typography variant="h6">Delete the address</Typography>
            <PaddingContainer/>
            <Divider/>
            <PaddingContainer/>
            <Typography variant="subtitle2">
                Are you sure you want to delete this address?
            </Typography>
            <div style={{display:'flex',justifyContent:'flex-end',paddingTop:'10px'}}>
                <Button variant="contained">Close</Button>
                <PaddingContainer/>
                <Button variant="contained" color="primary" onClick={this.handleDelete}>Delete</Button>
            </div> 
        </MainContainer>
    );
  }
}

function mapState(state) {
    const { success } = state.users;
    return { success };
  }
  
const actionCreators = {
    deleteAddress:userActions.deleteAddress
};

const connectedDeleteAddressContainer = connect(mapState, actionCreators)(DeleteAddressContainer);
export { connectedDeleteAddressContainer as DeleteAddressContainer };