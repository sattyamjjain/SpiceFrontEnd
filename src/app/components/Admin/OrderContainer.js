/* eslint-disable no-unused-vars */
import React from "react";
import {Table,TableCell,TableHead,TableRow,Paper,Button,TableContainer,TableBody,Typography,Modal} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import DeleteOrder from './OrderActions/DeleteOrder';

const DELETE = 'delete';

const MainContainer = styled.div`
    width:100%;
    padding:5vh
`;

const HeadContainer = styled.div`
    padding-bottom:5vh;
`;

const LinkContainer = styled.div`
    display:flex;
    justify-content:center;
`;

export class OrderContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            visibleActionPopup:null
        }
        this.handleActionPopupClose = this.handleActionPopupClose.bind(this);
    }

    onActionClickHandler(action) {
    switch (action) {
        case DELETE:
            this.handleDeleteAction();
            break;
        default:
            break;
        }
    }

    handleDeleteAction() {
        this.setState({
            visibleActionPopup:DELETE
        })
    }

    handleActionPopupClose() {
        this.setState({
            visibleActionPopup:null
        })
    }
  render() {
    const deleteBody = (
        <Paper style={{width:'80vh',height:'25vh'}}>
            <DeleteOrder/>
        </Paper>
      );
    return (
        <MainContainer>
            <HeadContainer>
                <Typography variant="h5">Orders List</Typography>
            </HeadContainer>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Sr No.</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Customer</TableCell>
                        <TableCell align="center">Payment Status</TableCell>
                        <TableCell align="center">Fulfillment Status</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell align="center">1.</TableCell>
                            <TableCell align="left">
                                <div style={{textAlign:'left'}}>
                                    <Typography variant="subtitle1">Dec 1, 2019</Typography>
                                    <Typography variant="caption">05:18</Typography>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <div style={{textAlign:'left'}}>
                                    <Typography variant="subtitle1">Raman Kumar</Typography>
                                    <Typography variant="caption">ramanKumar@gmail.com</Typography>
                                </div>
                            </TableCell>
                            <TableCell align="center">Paid</TableCell>
                            <TableCell align="center">Delivered</TableCell>
                            <TableCell align="right">
                                <div style={{textAlign:'right'}}>
                                    <Typography variant="subtitle1">400.00 Rs.</Typography>
                                    <Typography variant="caption">Qty: 1</Typography>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <LinkContainer>
                                    <Button onClick={this.onActionClickHandler.bind(this,DELETE)}>
                                        <FeatherIcon.Trash2
                                            color="#000000"
                                            size={20}
                                        />
                                    </Button>
                                    <Button>
                                        <FeatherIcon.Edit
                                            color="#000000"
                                            size={20}
                                        />
                                    </Button>
                                </LinkContainer>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={this.state.visibleActionPopup===DELETE}
                onClose={this.handleActionPopupClose}
                style={{display:'flex',justifyContent:'center',top:'30%',bottom:'30%'}}
            >
                {deleteBody}
            </Modal>
        </MainContainer>
    );
  }
}