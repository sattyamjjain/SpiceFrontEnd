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

class DeleteProduct extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete = () =>{
        this.props.deleteProduct(this.props.product.product.id)
    }
  render() {
    return (
        <MainContainer>
            <Typography variant="h6">Delete the Product</Typography>
            <PaddingContainer/>
            <Divider/>
            <PaddingContainer/>
            <Typography variant="subtitle2">
                Are you sure you want to delete this product?
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
    const { products } = state.product;
    return { products };
}

const actionCreators = {
    deleteProduct: productActions.deleteProduct,
};

const connectedProductContainer = connect(mapState, actionCreators)(DeleteProduct);
export { connectedProductContainer as DeleteProduct };