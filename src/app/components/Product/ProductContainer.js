/* eslint-disable no-unused-vars */
import React from "react";
import {Typography,Breadcrumbs,Link} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import ImageContainer from './ImageContainer';
import {DescriptionContainer} from './DescriptionContainer';
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
    padding:30px;
    // display:flex;
    // justify-content:space-between;
`;

export default class ProductContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        const { product } = this.props;
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
                        <Typography color="textPrimary">
                            {product === null || typeof product==="undefined" ? '' : product.product.title}
                        </Typography>
                    </Breadcrumbs>
                </HeadContainer>
                <SubMainContainer>
                    <Typography variant="h5">
                        {product === null || typeof product==="undefined" ? '' : product.product.title}
                    </Typography>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <ImageContainer style={{width:'40%'}} product={product === null || typeof product==="undefined" ? null : product}/>
                        <DescriptionContainer style={{width:'30%'}} product={product === null || typeof product==="undefined" ? null : product} />
                        <PriceContainer style={{width:'30%'}} product={product === null || typeof product==="undefined" ? null : product}/>
                    </div>
                    <TabContainer/>
                </SubMainContainer>
            </MainContainer>
        );
    }
}

