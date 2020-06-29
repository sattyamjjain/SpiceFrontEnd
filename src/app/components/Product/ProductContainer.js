import React from "react";
import {AppBar,Toolbar,TextField,Typography,Button,Breadcrumbs,NavigateNextIcon,Link, TableContainer} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';
import DescriptionContainer from './DescriptionContainer';
import PriceContainer from './PriceContainer';
import TabContainer from './TabContainer';

const MainContainer = styled.div`
    padding-left:40px;
    padding-right:40px;
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

class ProductContainer extends React.Component {
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
                        <Typography color="textPrimary">Product</Typography>
                    </Breadcrumbs>
                    <Typography variant="h5">
                        Haldi
                    </Typography>
                </HeadContainer>
                <SubMainContainer>
                    <ImageContainer style={{width:'35%'}}/>
                    <DescriptionContainer style={{width:'30%'}}/>
                    <PriceContainer style={{width:'35%'}}/>
                </SubMainContainer>
                <TabContainer />
            </MainContainer>
        );
    }
}

export default ProductContainer;