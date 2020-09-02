import React from "react";
import {Table,TableBody,Paper,TableContainer,TableHead,Typography,TableCell,Breadcrumbs,TableRow,Link,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const MainContainer = styled.div`
    padding:40px;
    padding-top:30px;
`;

const HeadContainer = styled.div`

`;

const ItemDetailsContainer = styled.div`
    display:flex;
    justify-content:flex-start;
`;

const DetailsContainer = styled.div`
`;

const SubMainContainer = styled.div`
    width:100%;
    padding-top:5vh;
    padding-left:15vh;
    display:flex;
    justify-content:space-between;
`;

const DetailsNameContainer = styled.div`
`;

const DetailsPriceContainer = styled.div`
`;

const DetailsDeliverContainer = styled.div`
`;


class OrderContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            wishlists:[]
        }
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
                        <Typography color="textPrimary">Orders</Typography>
                    </Breadcrumbs>
                    <Typography variant="h5">
                        Orders
                    </Typography>
                </HeadContainer>
                <SubMainContainer>
                    <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'10px',width:'90%'}}>
                        <ItemDetailsContainer>
                            <img src={require('../images/haldi.jpg')} style={{height:'18vh',width:'18vh'}} alt="ItemImage"/>
                            <DetailsContainer style={{width:'100%',display:'flex',justifyContent:'space-between',padding:'2vh',paddingRight:'10vh'}}>
                                <DetailsNameContainer>
                                    <Typography variant="h5">Haldi</Typography>
                                    <Typography variant="subtitle2" style={{paddingTop:'1vh',color:'#766D6B'}}>Size: 500gm</Typography>
                                    <Typography variant="subtitle2" style={{color:'#766D6B'}}>Quantity:  10</Typography>
                                </DetailsNameContainer>
                                <DetailsPriceContainer style={{textAlign:'center'}}>
                                    <Typography variant="h6">
                                        400.00 Rs
                                    </Typography>
                                    <Typography variant="subtitle2" style={{paddingTop:'1vh'}}>
                                        400.00 Rs
                                    </Typography>
                                </DetailsPriceContainer>
                                <DetailsDeliverContainer>
                                    <div style={{display:'flex',justifyContent:'flex-start'}}>
                                        <FiberManualRecordIcon style={{margin:'4px',color:"#228B22"}}/><Typography variant="h6">Delivered on 26 Sep,2020</Typography>
                                    </div>
                                    <Typography variant="subtitle2" style={{paddingTop:'1vh',paddingLeft:'4vh'}}>Your item has been delivered</Typography>
                                </DetailsDeliverContainer>
                            </DetailsContainer>
                        </ItemDetailsContainer>
                    </Paper>
                </SubMainContainer>
            </MainContainer>
        );
    }
}

export {OrderContainer}