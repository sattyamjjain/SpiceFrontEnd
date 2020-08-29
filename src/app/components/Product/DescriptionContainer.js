import React from "react";
import {Divider,Typography,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

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


export default class DescriptionContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        const { product } = this.props
        return (
            <MainContainer>
                <HeadContainer>
                    <Typography variant="h6">
                        {product === undefined ? '' : product.product.title}
                    </Typography>
                    <FeatherIcon.Heart 
                    color="#000000"
                    size={28}
                    />
                </HeadContainer>
                <DescripContainer>
                    <Typography variant="subtitle1" style={{paddingTop:'20px'}}>
                        {product === undefined ? '' : product.product.description}
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
                                In Stock
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
