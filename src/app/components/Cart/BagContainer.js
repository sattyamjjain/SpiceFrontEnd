/* eslint-disable no-unused-vars */
import React from "react";
import {Divider,Paper,Typography,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

const cartProducts = []

const MainContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const LeftSideContainer = styled.div`
    width:65%;
    padding:30px;
`;

const RightSideContainer = styled.div`
    width:35%;
    padding:30px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

const ItemDetailsContainer = styled.div`
    display:flex;
    justify-content:flex-start;
`;

const DetailsContainer = styled.div`
`;

const DetailsPartContainer = styled.div`
`;

const PaperMapContainer = styled.div`
`;

const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const DividerContainer = styled.div`
    padding-top:5px;
    padding-bottom:5px;
`;

export default class BagContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidUpdate(prevProps,prevState){
        const { productList,cartList} = this.props;
        if(prevProps.productList !== productList || prevProps.cartList !== cartList){
            if(productList !== null && cartList !== null){
                cartList.forEach(cartItem=>{
                    const product = productList.find(prod=>prod.product.id === cartItem.productId)
                    const productPrice = product.productDescriptions.find(prodPrice => prodPrice.size === cartItem.size)
                    cartProducts.push({
                        id:cartItem.id,
                        productId:cartItem.productId,
                        title:product.product.title,
                        image:product.productImages[0].image,
                        mrp:typeof productPrice === "undefined" ? null: productPrice.mrp,
                        price:typeof productPrice === "undefined" ? null: productPrice.price,
                        quantity:cartItem.quantity,
                        availability:typeof productPrice === "undefined" ? null: productPrice.availability
                    })
                })
            }
        }
    }

    handleCartDelete(item){
        this.props.handleCartDelete(item)
    }

    handleWishlistCart(item){
        const formValues={
            id:item.id,
            productId:item.productId,
            quantity:item.quantity
        }
        this.props.handleWishlistCart(formValues)
    }

    render() {
        return (
            <MainContainer>
                <LeftSideContainer>
                    <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'10px'}}>
                        <Typography variant="paragraph">
                            Available Offers
                        </Typography>
                        <PaddingContainer/>
                        <Typography variant="subtitle2">
                            10% Cashback upto Rs 200 on transaction with PayZapp. TCA
                        </Typography>
                    </Paper>
                    <PaddingContainer/>
                    {
                        cartProducts && cartProducts !== null && cartProducts.map((cartProductItem,index)=>(
                        <PaperMapContainer key={index}>
                            <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'10px'}}>
                                <ItemDetailsContainer>
                                    <img src={cartProductItem.image} style={{height:'20vh',width:'20vh'}} alt="ItemImage"/>
                                    <DetailsContainer style={{width:'100%',padding:'2vh'}}>
                                        <DetailsPartContainer style={{display:'flex',justifyContent:'space-between'}}>
                                            <Typography variant="h6">
                                                {cartProductItem === null ? '' : cartProductItem.title}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                {cartProductItem === null ? '' : cartProductItem.price} Rs.
                                            </Typography>
                                        </DetailsPartContainer>
                                        <DetailsPartContainer style={{display:'flex',justifyContent:'space-between'}}>
                                            <Typography variant="subtitle2">
                                                Size &nbsp; {cartProductItem === null ? '' : cartProductItem.size} 
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                <strike>{cartProductItem === null ? '' : cartProductItem.mrp} Rs.</strike>
                                            </Typography>
                                        </DetailsPartContainer>
                                        <Typography variant="subtitle2">
                                            Quantity &nbsp; {cartProductItem === null ? '' : cartProductItem.quantity}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Availability &nbsp; {cartProductItem === null ? '' : cartProductItem.availability}
                                        </Typography>
                                    </DetailsContainer>
                                </ItemDetailsContainer>
                                <DividerContainer>
                                    <Divider />
                                </DividerContainer>
                                <ButtonContainer>
                                    <Button color="primary" style={{width:'30%'}} onClick={this.handleCartDelete.bind(this,cartProductItem)}>REMOVE</Button>
                                    <Button color="primary" style={{width:'60%'}} onClick={this.handleWishlistCart.bind(this,cartProductItem)}>MOVE TO WISHLIST</Button>
                                </ButtonContainer>
                            </Paper>
                            <PaddingContainer/>
                        </PaperMapContainer>
                        ))
                    }
                    <PaddingContainer/>
                    <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'10px',justifyContent:'flex-start'}}>
                        <FeatherIcon.Bookmark
                        color='#000000'
                        size={24}
                        />
                        <Typography variant="paragraph" style={{paddingLeft:'10px'}}>
                            Add more from wishlist
                        </Typography>
                        <FeatherIcon.ChevronRight
                        color='#000000'
                        size={24}
                        style={{float:'right'}}
                        />
                    </Paper>
                </LeftSideContainer>
                <RightSideContainer>
                    <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'20px'}}>
                        <Typography variant="h6">
                            PRICE DETAILS
                        </Typography>
                        <div style={{padding:'30px'}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="subtitle2">
                                    Cart Total
                                </Typography>
                                <Typography variant="subtitle2" >
                                    400.00 Rs.
                                </Typography>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="subtitle2">
                                    Cart Discount
                                </Typography>
                                <Typography variant="subtitle2" >
                                    60.00 Rs.
                                </Typography>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="subtitle2">
                                    Coupon Discount
                                </Typography>
                                <Typography variant="subtitle2" >
                                    NA
                                </Typography>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="subtitle2">
                                    Order Total
                                </Typography>
                                <Typography variant="subtitle2" >
                                    400.00 Rs.
                                </Typography>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="subtitle2">
                                    Delivery Charges
                                </Typography>
                                <Typography variant="subtitle2" >
                                    <strike>40.00 Rs.</strike>
                                </Typography>
                            </div>
                            <DividerContainer>
                                <Divider />
                            </DividerContainer>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="h6">
                                    Total
                                </Typography>
                                <Typography variant="h6" >
                                    400.00 Rs.
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                </RightSideContainer>
            </MainContainer>
        );
    }
}