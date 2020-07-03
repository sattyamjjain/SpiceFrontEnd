import React from "react";
import {Table,TableCell,TableHead,TableRow,Paper,Modal,TableContainer,TableBody,Typography,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import DeleteReview from './ReviewActions/DeleteReview';

const DELETE = 'delete';

const MainContainer = styled.div`
    width:100%;
`;

const HeadContainer = styled.div`
    padding-bottom:5vh;
`;

export default  class ReviewContainer extends React.Component {
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
            <DeleteReview/>
        </Paper>
      );

    return (
        <MainContainer>
            <HeadContainer>
                <Typography variant="h5">Reviews List</Typography>
            </HeadContainer>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Product</TableCell>
                        <TableCell align="center">Reveiwer</TableCell>
                        <TableCell align="center">Review</TableCell>
                        <TableCell align="center">Rating</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell align="center">Haldi</TableCell>
                            <TableCell align="center">RatanJI</TableCell>
                            <TableCell align="center">Amazing Product</TableCell>
                            <TableCell align="center">4.3</TableCell>
                            <TableCell align="left">
                                <div style={{textAlign:'left'}}>
                                    <Typography variant="subtitle1">Dec 1, 2019</Typography>
                                    <Typography variant="caption">05:18</Typography>
                                </div>
                            </TableCell>
                            <TableCell align="center">
                                <Button onClick={this.onActionClickHandler.bind(this,DELETE)}>
                                    <FeatherIcon.Trash2
                                        color="#000000"
                                        size={20}
                                    />
                                </Button>
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