/* eslint-disable no-unused-vars */
import React from "react";
import styled from 'styled-components';
import {AppBar,Toolbar} from '@material-ui/core'
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