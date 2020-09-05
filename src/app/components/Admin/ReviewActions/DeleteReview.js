import React from "react";
import {Button,Divider,Typography} from '@material-ui/core';
import { productReviewActions } from '../../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MainContainer = styled.div`
    width:100%;
    padding:15px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

class DeleteReview extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete = () =>{
        this.props.deleteReview(this.props.review.id)
    }
  render() {
    return (
        <MainContainer>
            <Typography variant="h6">Delete the Review</Typography>
            <PaddingContainer/>
            <Divider/>
            <PaddingContainer/>
            <Typography variant="subtitle2">
                Are you sure you want to delete this review?
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
    const { reviews } = state.productReview;
    return { reviews };
}

const actionCreators = {
    deleteReview:productReviewActions.deleteReview
};

const connectedTabReviewContainer = connect(mapState, actionCreators)(DeleteReview);
export { connectedTabReviewContainer as DeleteReview };
  
