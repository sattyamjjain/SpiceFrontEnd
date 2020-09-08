import React from "react";
import {Table,TableBody,Paper,TableContainer,TableHead,Typography,TableCell,Breadcrumbs,TableRow,Link,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';

const wishlistProducts = []

const MainContainer = styled.div`
    padding:40px;
    padding-top:30px;
`;

const HeadContainer = styled.div`

`;

const SubMainContainer = styled.div`
    width:100%;
    padding-top:30px;
    display:flex;
    justify-content:space-between;
`;

const LinkContainer = styled.div`
    display:flex;
    justify-content:center;
`;

class WishListContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
    }

    componentDidUpdate(prevProps,prevState){
        const { finalProductList,wishlists} = this.props;
        if(prevProps.finalProductList !== finalProductList || prevProps.wishlists !== wishlists){
            if(finalProductList !== null && wishlists !== null){
                wishlists.forEach(cartItem=>{
                    const product = finalProductList.find(prod=>prod.product.id === cartItem.productId)
                    const productPrice = product.productDescriptions.find(prodPrice => prodPrice.size === cartItem.size)
                    wishlistProducts.push({
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

    handleWishlistDelete(item){
        this.props.handleWishlistDelete(item.id)
    }

    handleWishlistCart(item){
        const formValues={
            id:item.id,
            productId:item.productId,
            size:item.size,
            quantity:item.quantity
        }
        this.props.handleWishlistCart(formValues)
    }

    render() {
        return (
            <MainContainer>
                <HeadContainer>
                    <Breadcrumbs 
                        separator={
                        <FeatherIcon.ChevronRight
                            color="#000000"
                            size={20}
                        />
                        } 
                        aria-label="breadcrumb"
                        style={{
                            paddingBottom:'10px'
                        }}
                    >
                        <Link color="inherit" href="/" onClick={this.handleClick}>
                            Home
                        </Link>
                        <Typography color="textPrimary">Wishlist</Typography>
                    </Breadcrumbs>
                    <Typography variant="h5">
                        Wishlist
                    </Typography>
                </HeadContainer>
                <SubMainContainer>
                    <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="center">Product Image</TableCell>
                                <TableCell align="center">Product Name</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">MRP</TableCell>
                                <TableCell align="center">Size</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Availability</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                            </TableHead>
                            {
                                wishlistProducts && wishlistProducts !== null && (
                                <TableBody>
                                    {
                                        wishlistProducts.map((wishlistItem,index)=>(
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row" align="center">
                                                <img src={wishlistItem.image} alt={wishlistItem !== null ? '':wishlistItem.title} style={{height:'80px',width:'80px'}}/>
                                            </TableCell>
                                            <TableCell align="center">
                                                {wishlistItem === null ? '':wishlistItem.title}
                                            </TableCell>
                                            <TableCell align="center">
                                                {wishlistItem === null ? '':wishlistItem.price} Rs.
                                            </TableCell>
                                            <TableCell align="center">
                                                {wishlistItem === null ? '':wishlistItem.mrp} Rs.
                                            </TableCell>
                                            <TableCell align="center">
                                                {wishlistItem === null ? '':wishlistItem.size}
                                            </TableCell>
                                            <TableCell align="center">
                                                {wishlistItem === null ? '':wishlistItem.quantity}
                                            </TableCell>
                                            <TableCell align="center">
                                                {wishlistItem === null ? '':wishlistItem.availability}
                                            </TableCell>
                                            <TableCell align="center">
                                                <LinkContainer>
                                                    <Button onClick={this.handleWishlistDelete.bind(this,wishlistItem)}>
                                                        <FeatherIcon.Trash2
                                                            color="#000000"
                                                            size={24}
                                                        />
                                                    </Button>
                                                    <Button onClick={this.handleWishlistCart.bind(this,wishlistItem)}>
                                                        <FeatherIcon.Truck
                                                            color="#000000"
                                                            size={24}
                                                        />
                                                    </Button>
                                                </LinkContainer>
                                            </TableCell>
                                        </TableRow>
                                        ))
                                    }
                                </TableBody>
                                )
                            }
                        </Table>
                    </TableContainer>
                </SubMainContainer>
            </MainContainer>
        );
    }
}

export {WishListContainer};
