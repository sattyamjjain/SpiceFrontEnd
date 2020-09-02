/* eslint-disable no-unused-vars */
import React from "react";
import {Divider,Typography,Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';
import { wishlistActions} from '../../_actions';
import { connect } from 'react-redux';

const MainContainer = styled.div`
    padding:30px;
    padding-top:30px;
    padding-bottom:0px;
    justify-content:center;
`;

const HeadContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const DescripContainer = styled.div`

`;

const DividerContainer = styled.div`
    padding-top:10px;
    padding-bottom:10px;
`;


const BrandContainer = styled.div`
    align-items:center;
`;

const LinkContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    padding-top:10px;
`;

const ItemField = styled.div`
    display:flex;
    justify-content:space-between;
`;


class DescriptionContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={
            availability:null,
            isLiked:true
        }
    }

    componentDidMount(){
        this.setState({
            availability:localStorage.getItem('availability')
        })
    }

    handleLike(product){
        console.log('product',product)
        this.setState({
            isLiked:!this.state.isLiked
        },()=>{
            console.log('isliked',this.state.isLiked)
        })
        const wishlistProduct ={
            usersId:4,
            productId:product.product.id,
            quantity:10
        }
        console.log('wishlist product',wishlistProduct)
        this.props.postWishlist(wishlistProduct)
    }

    render() {

        const { product } = this.props
        return (
            <MainContainer>
                <HeadContainer>
                    <Typography variant="h6">
                        {product === null ? '' : product.product.title}
                    </Typography>
                    <Button onClick={this.handleLike.bind(this,product)}>
                        {
                            this.state.isLiked?
                            <FavoriteBorderIcon fontSize='default'/>:
                            <FavoriteIcon fontSize='default' color='primary'/>
                        }
                    </Button>
                </HeadContainer>
                <DescripContainer>
                    <Typography variant="subtitle1" style={{paddingTop:'20px'}}>
                        {product === null ? '' : product.product.description}
                    </Typography>
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
                    <Typography variant="subtitle1">
                        Share it
                    </Typography>
                    <LinkContainer>
                        <Button>
                            <img src={require('../images/facebook.svg')} alt="fb" style={{height:'30px',width:'30px'}}/>
                        </Button>
                        <Button>
                            <img src={require('../images/instagram.svg')} alt="fb" style={{height:'30px',width:'30px'}}/>
                        </Button>
                        <Button>
                            <img src={require('../images/gmail.svg')} alt="fb" style={{height:'30px',width:'30px'}}/>
                        </Button>
                    </LinkContainer>
                    <DividerContainer>
                        <Divider />
                    </DividerContainer>
                    <Typography variant="subtitle1">
                        100% Secure payment
                    </Typography>
                </DescripContainer>
            </MainContainer>
        );
    }
}

function mapState(state) {
    const { wishlists } = state.wishlist;
    return { wishlists };
  }
  
  const actionCreators = {
    postWishlist: wishlistActions.postWishlist,
  };
  
  const connectedWishList = connect(mapState, actionCreators)(DescriptionContainer);
  
  export {connectedWishList as DescriptionContainer};
