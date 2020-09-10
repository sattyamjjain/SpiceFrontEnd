/* eslint-disable no-unused-vars */
import React from "react";
import {Button,Divider,Typography} from '@material-ui/core';
import { productActions } from '../../../_actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    padding:15px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

export default class DeleteProductSizeContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handlePopupClose = this.handlePopupClose.bind(this)
    }

    handleDelete = () =>{
        this.props.deleteProductSize(this.props.productDesc.id)
    }

    handlePopupClose(){
        this.props.handleActionPopupClose();
    }

  render() {
    return (
        <MainContainer>
            <Typography variant="h6">Delete the Product Size</Typography>
            <PaddingContainer/>
            <Divider/>
            <PaddingContainer/>
            <Typography variant="subtitle2">
                Are you sure you want to delete this product Size?
            </Typography>
            <div style={{display:'flex',justifyContent:'flex-end',paddingTop:'10px'}}>
                <Button variant="contained" onClick={this.handlePopupClose}>Close</Button>
                <PaddingContainer/>
                <Button variant="contained" color="primary" onClick={this.handleDelete}>Delete</Button>
            </div>
        </MainContainer>
    );
  }
}

function mapState(state) {
    const { products } = state.product;
    return { products };
}

const actionCreators = {
    deleteProductSize: productActions.deleteProductSize,
};

const connectedProductContainer = connect(mapState, actionCreators)(DeleteProductSizeContainer);
export { connectedProductContainer as DeleteProductSizeContainer };