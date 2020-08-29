import React from "react";
import {Typography,Breadcrumbs,Link} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import { productActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ImageContainer from './ImageContainer';
import queryString from 'query-string'
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
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        this.props.getProdById('c0eaac15-054c-44fa-ab50-e7886e88a23b')
    }

    // componentDidMount(){
    //     console.log(this.props.location.search);
    //     const parsed = queryString.parse(this.props.location.search);
    //     console.log('parsed',parsed);
    //   }
    
    render() {
        const { product } = this.props;
        console.log('product',JSON.stringify(product))
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
                            {product === undefined ? '' : product.product.title}
                        </Typography>
                    </Breadcrumbs>
                    <Typography variant="h5">
                        {product === undefined ? '' : product.product.title}
                    </Typography>
                </HeadContainer>
                <SubMainContainer>
                    <ImageContainer style={{width:'40%'}}/>
                    <DescriptionContainer style={{width:'30%'}} product={product}/>
                    <PriceContainer style={{width:'30%'}}/>
                </SubMainContainer>
                <TabContainer />
            </MainContainer>
        );
    }
}

function mapState(state) {
    const { product } = state.product;
    console.log('mapstate product',product)
    return { product };
}

const actionCreators = {
    getProdById: productActions.getProdById,
};

const connectedProductContainer = connect(mapState, actionCreators)(ProductContainer);
export { connectedProductContainer as ProductContainer };