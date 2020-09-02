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
    padding:30px;
    // display:flex;
    // justify-content:space-between;
`;

class ProductContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        this.props.getProdById('1aea731a-ea7a-4515-ab7d-4749948584da')
    }

    // componentDidMount(){
    //     console.log(this.props.location.search);
    //     const parsed = queryString.parse(this.props.location.search);
    //     console.log('parsed',parsed);
    //   }
    
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
                            {product === null ? '' : product.product.title}
                        </Typography>
                    </Breadcrumbs>
                </HeadContainer>
                <SubMainContainer>
                    <Typography variant="h5">
                        {product === null ? '' : product.product.title}
                    </Typography>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <ImageContainer style={{width:'40%'}} product={product}/>
                        <DescriptionContainer style={{width:'30%'}} product={product} />
                        <PriceContainer style={{width:'30%'}} product={product}/>
                    </div>
                    <TabContainer/>
                </SubMainContainer>
            </MainContainer>
        );
    }
}

function mapState(state) {
    const { product } = state.product;
    console.log('product conatiner product',product)
    return { product };
}

const actionCreators = {
    getProdById: productActions.getProdById,
};

const connectedProductContainer = connect(mapState, actionCreators)(ProductContainer);
export { connectedProductContainer as ProductContainer };