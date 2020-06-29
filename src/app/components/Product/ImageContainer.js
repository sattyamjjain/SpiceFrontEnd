import React from "react";
import {Grid,Toolbar,TextField,Typography,Button,Breadcrumbs,NavigateNextIcon,Link} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';
import "react-image-gallery/styles/css/image-gallery.css";
import styled from 'styled-components';
import ProductImageGallery from './ProductImageGallery';

const MainContainer = styled.div`
    padding:40px;
    padding-top:30px;
    padding-bottom:0;
`;

export default class ImageContainer extends React.Component {
    render() {
        return (
            <MainContainer>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <ProductImageGallery />
                    </Grid>
                    <Grid container spacing={2} item xs={6} direction="column">
                        <Grid item>
                            <div id="myPortal" />
                        </Grid>
                    </Grid>
                </Grid>
            </MainContainer>
        );
    }
}
