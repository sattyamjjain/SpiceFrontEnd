import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';
import ProductImageGallery from './ProductImageGallery';

const MainContainer = styled.div`
    padding:40px;
    padding-top:30px;
    padding-bottom:0;
`;

export default class ImageContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        return (
            <MainContainer>
                <ProductImageGallery product={this.props.product}/>
            </MainContainer>
        );
    }
}
