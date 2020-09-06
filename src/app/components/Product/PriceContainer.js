/* eslint-disable no-unused-vars */
import React from "react";
import {Paper,Fab,Divider,Typography,Button,ButtonGroup} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import { cartActions} from '../../_actions';
import { connect } from 'react-redux';

const user=JSON.parse(localStorage.getItem('user'))

const MainContainer = styled.div`
    padding:40px;
    padding-top:30px;
    padding-bottom:0px;
    border-radius:2px;
    border-color:#000000;
    height:70vh;
    width:100%;
    justify-content:center;
    align-items:center;
    text-align:center;
`;

const SizeContainer = styled.div`
    width:100%;
    padding-top:10px;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    justify-content:space-between;
`;

const DividerContainer = styled.div`
    padding-top:20px;
    padding-bottom:20px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

const QuantityContainer = styled.div`
    padding-top:10px;  
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const BrandContainer = styled.div`
    align-items:center;
`;

const ItemField = styled.div`
    display:flex;
    justify-content:space-between;
`;


class PriceContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            counter:1,
            price:null,
            mrpPrice:null,
            availability:null
        }
        this.handleCart = this.handleCart.bind(this)
    }

    // componentDidUpdate(){
    //     if(this.props.product !== null){
    //         this.setState({
    //             price: this.props.product.productDescriptions[0].price,
    //             mrpPrice: this.props.product.productDescriptions[0].mrp,
    //             availability:this.props.product.productDescriptions[0].availability
    //         })
    //     }
    // }

    handleIncrement = () => {
      this.setState(state => ({ counter: state.counter + 1 }));
    };
  
    handleDecrement = () => {
        if(this.state.counter>1){
            this.setState(state => ({ counter: state.counter - 1 }));
        }
    };

    handleProductSize = (id) =>{
        this.props.product.productDescriptions.forEach((prodDesc)=>{
            if(prodDesc.id === id){
                this.setState({
                    price:prodDesc.price,
                    mrpPrice:prodDesc.mrp,
                    availability:prodDesc.availability
                })
            }
        })
    }

    handleCart (){
        console.log('state',this.state)
        console.log('product',this.props.product.product.id)
        console.log('userid',user.id)
        const formValue = {
            userId:user.id,
            productId:this.props.product.product.id,
            size:this.state.size,
            quantity:this.state.counter
        }
        this.props.postCart(formValue)
    }

    render() {
        const displayCounter = this.state.counter > 0;
        const { product } = this.props;
        return (
            <MainContainer>
                <Paper variant="elevation" elevation={15} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'30px'}}>
                    <Typography variant="h4">
                        {this.state.price} Rs.
                    </Typography>
                    <Typography variant="subtitle2">
                        MRP: &nbsp; {this.state.mrpPrice} Rs.
                    </Typography>
                    <PaddingContainer/>
                    <Typography variant="h6">
                        Select Size
                    </Typography>
                    {product === null ? '' : product.productDescriptions && product.productDescriptions.length!==0 && (
                        <SizeContainer>
                            {product.productDescriptions.map((prodDesc,index)=>(
                                <Fab variant="round" size="small" style={{fontSize:'10px',textTransform:'capitalize'}} key={index} onClick={this.handleProductSize.bind(this,prodDesc.id)}>
                                    {prodDesc.size}
                                </Fab>
                            ))}
                        </SizeContainer>
                    )}
                    <DividerContainer>
                        <Divider />
                    </DividerContainer>
                    <BrandContainer>
                        <ItemField>
                            <Typography variant="subtitle1">
                                Availability
                            </Typography>
                            <Typography variant="subtitle1">
                                {this.state.availability}
                            </Typography>
                        </ItemField>
                    </BrandContainer>
                    <DividerContainer>
                        <Divider />
                    </DividerContainer>
                    <Typography variant="h6">
                        Quantity
                    </Typography>
                    <QuantityContainer>
                        <ButtonGroup size="small" aria-label="small outlined button group">
                            <Button onClick={this.handleIncrement}>+</Button>
                            {displayCounter && <Button>{this.state.counter}</Button>}
                            <Button onClick={this.handleDecrement}>-</Button>
                        </ButtonGroup>
                    </QuantityContainer>
                    <DividerContainer>
                        <Divider />
                    </DividerContainer>
                    <ButtonContainer>
                        <Button variant="contained" style={{textTransform:'capitalize'}} onClick={this.handleCart}>Add to Cart</Button>
                        <Button variant="contained" style={{textTransform:'capitalize'}}>Buy it Now</Button>
                    </ButtonContainer>
                </Paper>
            </MainContainer>
        );
    }
}

function mapState(state) {
    const { carts } = state.cart;
    return { carts };
  }
  
  const actionCreators = {
    postCart: cartActions.postCart,
  };
  
  const connectedWishList = connect(mapState, actionCreators)(PriceContainer);
  
  export {connectedWishList as PriceContainer};
