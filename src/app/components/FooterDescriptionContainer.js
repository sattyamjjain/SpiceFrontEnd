/* eslint-disable no-sequences */
import React from "react";
import styled from 'styled-components';
import {Divider,Typography,TextField} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as FeatherIcon from 'react-feather';

const MainContainer = styled.div`
    width:100%;
    height:310px;
    background-color:#FCC0A2;
    padding:50px;
`;

const SubMainContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom:30px;
`;

const NewsLetterContainer = styled.div`

`;

const InputContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const DescipContainer = styled.div`
    width:50vh;
    justify-content:center;
    text-align:center;
`;

const ContactContainer = styled.div`

`;

const ContactField = styled.div`
    display:flex;
    justify-content:flex-start;
    padding-bottom:20px;
`;

const LinkContainer = styled.div`
    display:flex;
    justify-content:center;
    padding-top:20px;
`;

const LinkText = styled.div`
    display:flex;
    justify-content:center;
    padding-left:10px;
    padding-right:10px;
`;

export default function FooterDescriptionContainer () {
  return (
    <MainContainer>
        <SubMainContainer>
            <NewsLetterContainer>
                <Typography variant="h5">
                    Our Newsletter
                </Typography>
                <Typography variant="subtitle1">
                    Subscribe us to get best offers <br/>for our products
                </Typography>
                <InputContainer>
                    <TextField id="standard-basic" label="Enter your email" />
                    <div style={{padding:'15px'}}>
                        <FeatherIcon.ArrowRightCircle
                            color="#000000"
                            size={28}
                        />
                    </div>
                </InputContainer>
            </NewsLetterContainer>
            <DescipContainer>
                <img src={require("./images/logo.jpg")}  alt="logo" style={{height:'50px',width:'100px'}}/>
                <Typography variant="subtitle1">
                    It is a long established fact that a reader will be distracted by the readable content.
                </Typography>
            </DescipContainer>
            <ContactContainer>
                <ContactField>
                    <FeatherIcon.Phone
                        color="#000000"
                        size={28}
                    />
                    <div style={{marginLeft:'10px'}}>
                        <Typography variant="subtitle2">
                        Call us: +91 9876543210
                        </Typography>
                    </div>
                </ContactField>
                <ContactField>
                    <FeatherIcon.MapPin
                        color="#000000"
                        size={28}
                    />
                    <div style={{marginLeft:'10px'}}>
                        <Typography variant="subtitle2">
                        Address: Demo Store Demo Store USA
                        </Typography>
                    </div>
                </ContactField>
                <ContactField>
                    <FeatherIcon.Mail
                        color="#000000"
                        size={28}
                    />
                    <div style={{marginLeft:'10px'}}>
                        <Typography variant="subtitle2">
                        Mail: example123@gmail.com
                        </Typography>
                    </div>
                </ContactField>
            </ContactContainer>
        </SubMainContainer>
        <Divider />
        <LinkContainer>
            <LinkText>
                <Typography variant="h6">
                    Home
                </Typography>
            </LinkText>
            <LinkText>
                <Typography variant="h6">
                    About Us
                </Typography>
            </LinkText>
            <LinkText>
                <Typography variant="h6">
                    Contact Us
                </Typography>
            </LinkText>
        </LinkContainer>
    </MainContainer>
  );
};