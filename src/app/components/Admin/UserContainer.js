import React from "react";
import {Table,TableCell,TableHead,TableRow,Paper,Button,TableContainer,TableBody,Typography} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
`;

const HeadContainer = styled.div`
    padding-bottom:5vh;
`;

export default  class UserContainer extends React.Component {

  render() {
    return (
        <MainContainer>
            <HeadContainer>
                <Typography variant="h5">Users List</Typography>
            </HeadContainer>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Orders</TableCell>
                        <TableCell align="center">Address</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell align="center">ratanji@gmail.com</TableCell>
                            <TableCell align="center">Raman Kumar</TableCell>
                            <TableCell align="center">4</TableCell>
                            <TableCell align="center">Example demo locality, XYZ</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </MainContainer>
    );
  }
}