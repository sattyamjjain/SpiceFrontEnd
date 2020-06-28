import React from "react";
import {AppBar,Toolbar} from '@material-ui/core';
import SlideShowImage from './SlideShowImage';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    // z-index:-1;
`;

class HomePageContainer extends React.Component {

  render() {
    return (
        <MainContainer>
            <div style={{zIndex:'-1'}}>
            <SlideShowImage/>
            </div>
            <AppBar position="static" style={{height:'40px',marginLeft:'40px',width:'90%',marginTop:'-70px',zIndex:'90000'}}>
                <Toolbar style={{backgroundColor:'#000000',height:'40px'}} >
                    @Copyright 2020-21
                </Toolbar>
            </AppBar>
        </MainContainer>
    );
  }
}

export default HomePageContainer;