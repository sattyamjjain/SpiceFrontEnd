/* eslint-disable no-unused-vars */
import React from "react";
import {Table,TableCell,TableHead,TableRow,Paper,TableContainer,TableBody,Typography} from '@material-ui/core';
import styled from 'styled-components';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';

const MainContainer = styled.div`
    width:100%;
    padding:5vh
`;

const HeadContainer = styled.div`
    padding-bottom:5vh;
`;

class UserContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        this.props.getAll()
    }

  render() {
      const { users } = this.props
    return (
        <MainContainer>
            <HeadContainer>
                <Typography variant="h5">Users List</Typography>
            </HeadContainer>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Username</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Orders</TableCell>
                            <TableCell align="center">Mobile</TableCell>
                        </TableRow>
                    </TableHead>
                    {users && users.length !== 0 && (
                        <TableBody>
                            {users.map((user,index)=>(
                                <TableRow key={index}>
                                    <TableCell align="center">{user===null?'':user.user.username}</TableCell>
                                    <TableCell align="center">{user===null?'':user.user.email}</TableCell>
                                    <TableCell align="center">{user===null?'':user.user.firstName }</TableCell>
                                    <TableCell align="center">4</TableCell>
                                    <TableCell align="center">{user===null?'':user.user.mobile}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </MainContainer>
    );
  }
}

function mapState(state) {
    const { users } = state.users;
    return { users };
}

const actionCreators = {
    getAll: userActions.getAll,
};

const connectedLoginPage = connect(mapState, actionCreators)(UserContainer);
export { connectedLoginPage as UserContainer };