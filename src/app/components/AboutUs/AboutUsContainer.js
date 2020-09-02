import React from "react";
import {Typography,Breadcrumbs,Link} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

const MainContainer = styled.div`
    padding:40px;
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

export default class AboutUsContainer extends React.Component {
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
                        <Typography color="textPrimary">About Us</Typography>
                    </Breadcrumbs>
                    <Typography variant="h5">
                        About Us
                    </Typography>
                </HeadContainer>
                <SubMainContainer>
                    About Us Content
                </SubMainContainer>
            </MainContainer>
        );
    }
}