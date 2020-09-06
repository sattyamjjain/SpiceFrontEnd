/* eslint-disable no-unused-vars */
import React from "react";
import {Divider,Typography,Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';
import { wishlistActions} from '../../_actions';
import { connect } from 'react-redux';
import {history} from '../../_helpers'

const user = JSON.parse(localStorage.getItem('user'));

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
            isLiked:false,
            wishlistRes:null
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log('state getDerivedStateFromProps',state)
    //     if(props.product!=null && state.wishlistRes !== null){
    //         state.wishlistRes.map((wishlistItem)=>{
    //             if(wishlistItem.productId === props.product.product.id){
    //                 console.log('match')
    //                 return {
    //                     isLiked : true
    //                 }
    //             }
    //         })
    //     }
    // }

    componentDidMount(){
        console.log('state componentDidMount',this.state.isLiked)
        if(user !== null){
            const userId = user.id;
            this.props.getAllById(userId)
            .then(res=>{
                this.setState({
                    wishlistRes:res
                })
            })
            .catch(err=>console.log('err',err))
        }
    }

    handleLike(product){
        if(user !== null){
            this.setState({
                isLiked:!this.state.isLiked
            })
            const wishlistProduct ={
                usersId:4,
                productId:product.product.id,
                quantity:10
            }
            if(this.state.isLiked !== true){
                this.props.postWishlist(wishlistProduct)
            }else{
                console.log('else')
            }
        }else{
            history.push('/')
            history.go(0)
        }
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
                            !this.state.isLiked?
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
    getAllById: wishlistActions.getAllById,
  };
  
  const connectedWishList = connect(mapState, actionCreators)(DescriptionContainer);
  
  export {connectedWishList as DescriptionContainer};
