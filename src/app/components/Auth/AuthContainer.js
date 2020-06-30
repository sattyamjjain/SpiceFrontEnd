import React from "react";
import {Button,Toolbar,Typography} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';
import LoginContainer from './LoginContainer';
import SignupContainer from './SignupContainer';
import ForgetPasswordContainer from './ForgetPasswordContainer';

const MainContainer = styled.div`
    width:100%;
    height:70vh;
    display:flex;
    justify-content:space-between;
`;

const SocialLinkContainer = styled.div`
    width:45%;
    background-color:#B7450C;
    padding-top:15%;
    padding-left:5%;
    padding-right:5%;
    text-align:center;
`;

const SubAuthContainer = styled.div`
    width:55%;
    padding-left:5%;
    padding-right:5%;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

export default class AuthContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            displayComponent:'login'
        }
    }

    selectedComponent(val){
        this.setState({
            displayComponent:val
        })
    }

  render() {
      const {displayComponent} = this.state;
    return (
        <MainContainer>
            <SocialLinkContainer>
                <Typography variant="h4">
                    Spices
                </Typography>
                <Typography variant="subtitle1">
                    Login using Social media to get quick access
                </Typography>
                <PaddingContainer/>
                <Button variant="contained" color="primary" size="small" fullWidth={true} startIcon={<FeatherIcon.Facebook size={18} color="#FFFFFF"/>} >
                    Signin with facebook
                </Button>
                <PaddingContainer/>
                <Button variant="contained" color="default" size="small" fullWidth={true} startIcon={<FeatherIcon.Twitter size={18} color="#000000"/>}>
                    Signin with twitter
                </Button>
                <PaddingContainer/>
                <Button variant="contained" color="secondary" size="small"  fullWidth={true} startIcon={<FeatherIcon.Facebook size={18} color="#FFFFFF"/>}>
                    Signin with google
                </Button>
            </SocialLinkContainer>
            <SubAuthContainer>
                {
                    displayComponent==='login' ? <LoginContainer displayedComponent={this.selectedComponent.bind(this)}/> : (
                        displayComponent==='signup' ? <SignupContainer displayedComponent={this.selectedComponent.bind(this)}/>: (
                            displayComponent==='forgotPassword' ? <ForgetPasswordContainer displayedComponent={this.selectedComponent.bind(this)}/> : null
                            )
                    )
                }
            </SubAuthContainer>
        </MainContainer>
    );
  }
}