import React from "react";
import {Button,Divider,Typography} from '@material-ui/core';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    padding:15px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

export default class DeleteProduct extends React.Component {
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
                <Button variant="contained" color="primary">Delete</Button>
            </div>
        </MainContainer>
    );
  }
}