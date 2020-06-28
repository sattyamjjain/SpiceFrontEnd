/* eslint-disable no-sequences */
import React from "react";
import styled from 'styled-components';
import {AppBar,Toolbar,Button,Popper,Grow,Paper,ClickAwayListener,MenuList,MenuItem} from '@material-ui/core'
// import 'bootstrap/dist/css/bootstrap.min.css'
import FooterDescriptionContainer from './FooterDescriptionContainer';

const FooterMainContainer = styled.div`
  position: relative;
  bottom: 0;
  height: 100px;
  width: 100%;
`;

const SubFooterContainer = styled.div`
`;

const FooterContainer = styled.div`
`;

export default function Footer () {

  return (
    <FooterMainContainer>
      <SubFooterContainer>
        <FooterDescriptionContainer/>
      </SubFooterContainer>
      <FooterContainer>
        <AppBar position="static" style={{height:'40px'}}>
          <Toolbar style={{backgroundColor:'#000000',height:'40px'}} >
            @Copyright 2020-21
          </Toolbar>
        </AppBar>
      </FooterContainer>  
    </FooterMainContainer>
  );
};