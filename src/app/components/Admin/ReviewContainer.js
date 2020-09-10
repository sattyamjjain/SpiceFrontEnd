/* eslint-disable no-unused-vars */
import React from "react";
import {Table,TableCell,TableHead,TableRow,Paper,Modal,TableContainer,TableBody,Typography,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import { productReviewActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {DeleteReview} from './ReviewActions/DeleteReview';

const DELETE = 'delete';

const MainContainer = styled.div`
    width:100%;
    padding:5vh
`;

const HeadContainer = styled.div`
    padding-bottom:5vh;
`;

class ReviewContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            visibleActionPopup:null,
            review:null
        }
        this.handleActionPopupClose = this.handleActionPopupClose.bind(this);
    }

    componentDidMount(){
        this.props.getAllReview()
    }

    onActionClickHandler(action,data) {
    switch (action) {
        case DELETE:
            this.handleDeleteAction(data);
            break;
        default:
            break;
        }
    }

    handleDeleteAction(data) {
        this.setState({
            visibleActionPopup:DELETE,
            review:data
        })
    }

    handleActionPopupClose() {
        this.setState({
            visibleActionPopup:null
        })
    }
  render() {
    const {reviews} = this.props
    console.log('reviews',reviews)
    const deleteBody = (
        <Paper style={{width:'80vh',height:'25vh'}}>
            <DeleteReview review={this.state.review} handleActionPopupClose={this.handleActionPopupClose}/>
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
                            <TableCell align="center">Reviewer</TableCell>
                            <TableCell align="center">Reviewer Email</TableCell>
                            <TableCell align="center">Rating</TableCell>
                            <TableCell align="center">Review</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    {
                        reviews !== null && typeof reviews !== "undefined" && reviews.length !== 0 && (
                        <TableBody>
                            {
                                reviews.map((review,index)=>(
                                <TableRow key={index}>
                                    <TableCell align="center">
                                        {review === null ? '' :review.title}
                                    </TableCell>
                                    <TableCell align="center">
                                        {review === null ? '' :review.usersName}
                                    </TableCell>
                                    <TableCell align="center">
                                        {review === null ? '' :review.usersEmail}
                                    </TableCell>
                                    <TableCell align="center">
                                        {review === null ? '' :review.rating}
                                    </TableCell>
                                    <TableCell align="center">
                                        {review === null ? '' :review.message}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button onClick={this.onActionClickHandler.bind(this,DELETE,review)}>
                                            <FeatherIcon.Trash2
                                                color="#000000"
                                                size={20}
                                            />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                ))
                            }
                        </TableBody>
                        )
                    }
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


function mapState(state) {
    const { reviews } = state.productReview;
    return { reviews };
}

const actionCreators = {
    getAllReview:productReviewActions.getAllReview
};

const connectedTabReviewContainer = connect(mapState, actionCreators)(ReviewContainer);
export { connectedTabReviewContainer as ReviewContainer };
  
