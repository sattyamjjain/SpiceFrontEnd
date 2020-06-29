import React from "react";
import {Paper,Fab,Divider,Typography,Button,ButtonGroup,NavigateNextIcon,Link} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

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
    z-index:-1;
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


export default class PriceContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            counter:1
        }
    }

    handleIncrement = () => {
      this.setState(state => ({ counter: state.counter + 1 }));
    };
  
    handleDecrement = () => {
      this.setState(state => ({ counter: state.counter - 1 }));
    };
    render() {
        const displayCounter = this.state.counter > 0;
        return (
            <MainContainer>
                <Paper variant="elevation" elevation={15} style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'30px'}}>
                    <Typography variant="h4">
                        400 Rs.
                    </Typography>
                    <Typography variant="subtitle2">
                        MRP: &nbsp; 460.50 Rs.
                    </Typography>
                    <PaddingContainer/>
                    <Typography variant="h6">
                        Select Size
                    </Typography>
                    <SizeContainer>
                        <Fab variant="round" size="small" style={{fontSize:'10px'}}>
                            500gm
                        </Fab>
                        <Fab variant="round" size="small" style={{fontSize:'10px'}}>
                            1Kg
                        </Fab>
                        <Fab variant="round" size="small" style={{fontSize:'10px'}}>
                            2Kg
                        </Fab>
                        <Fab variant="round" size="small" style={{fontSize:'10px'}}>
                            5Kg
                        </Fab>
                    </SizeContainer>
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
                        <Button variant="contained">Add to Cart</Button>
                        <Button variant="contained">Buy it Now</Button>
                    </ButtonContainer>
                </Paper>
            </MainContainer>
        );
    }
}