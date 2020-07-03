import React from "react";
import {AppBar,Toolbar,Typography,Paper,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
`;

export default  class DashboardContainer extends React.Component {

  render() {
    return (
        <MainContainer>
            Dashboard
        </MainContainer>
    );
  }
}