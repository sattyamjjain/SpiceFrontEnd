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

export default  class PaymentContainer extends React.Component {

  render() {
    return (
        <MainContainer>
            <HeadContainer>
                <Typography variant="h5">Payment Transactions List</Typography>
            </HeadContainer>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Payment Id</TableCell>
                        <TableCell align="center">Order Id</TableCell>
                        <TableCell align="left">Customer</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="center">Method</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Value</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                        <TableCell align="center">XYZ3648254</TableCell>
                        <TableCell align="center">ORD7835290</TableCell>
                        <TableCell align="left">
                                <div style={{textAlign:'left'}}>
                                    <Typography variant="subtitle1">Raman Kumar</Typography>
                                    <Typography variant="caption">ramanKumar@gmail.com</Typography>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <div style={{textAlign:'left'}}>
                                    <Typography variant="subtitle1">Dec 1, 2019</Typography>
                                    <Typography variant="caption">05:18</Typography>
                                </div>
                            </TableCell>
                        <TableCell align="center">Money Order</TableCell>
                        <TableCell align="center">Safe</TableCell>
                        <TableCell align="center">Success</TableCell>
                        <TableCell align="center">400.00 Rs.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </MainContainer>
    );
  }
}