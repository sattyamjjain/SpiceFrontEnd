import React from "react";
import {Divider,TableBody,Paper,TableContainer,TableHead,Typography,TableCell,Breadcrumbs,TableRow,Link,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

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

const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const DividerContainer = styled.div`
    padding-top:5px;
    padding-bottom:5px;
`;

export default class BagContainer extends React.Component {
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
                    <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'10px'}}>
                        <ItemDetailsContainer>
                            <img src={require('../images/haldi.jpg')} style={{height:'20vh',width:'20vh'}} alt="ItemImage"/>
                            <DetailsContainer style={{width:'100%'}}>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <Typography variant="h6">
                                        Haldi
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        400.00 Rs.
                                    </Typography>
                                </div>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <Typography variant="subtitle2">
                                        Description Example wtitten
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        <strike>460.50 Rs.</strike>  (13% off)
                                    </Typography>
                                </div>
                                <Typography variant="subtitle2">
                                    SIze Quantity
                                </Typography>
                            </DetailsContainer>
                        </ItemDetailsContainer>
                        <DividerContainer>
                            <Divider />
                        </DividerContainer>
                        <ButtonContainer>
                            <Button color="primary" style={{width:'30%'}} >REMOVE</Button>
                            <Button color="primary" style={{width:'60%'}}  >MOVE TO WISHLIST</Button>
                        </ButtonContainer>
                    </Paper>
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