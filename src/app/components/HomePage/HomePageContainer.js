import React from "react";
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import SlideShowImage from './SlideShowImage';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    height:100vh;
`;

const MainContent = styled.div`
    display:flex;
    justify-content:center;
    text-align:center;
    margin-top:30vh;
`;

const MenuIconContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

class HomePageContainer extends React.Component {

  render() {
    return (
        <MainContainer>
            <SlideShowImage/>
            <AppBar position="static" style={{height:'40px',marginTop:'-12vh',width:'90%',marginLeft:'10vh'}}>
                <Toolbar style={{backgroundColor:'#E1DDDB',height:'40px',display:'flex',justifyContent:'space-between',paddingLeft:'50px',paddingRight:'50px'}} >
                    <MenuIconContainer>
                        <FeatherIcon.Truck
                            color="#000000"
                            size={28}
                        />
                        <div style={{marginLeft:'3vh'}}>
                            <Typography variant="h6" style={{color:'#000000'}}>
                            Shipping facility
                            </Typography>
                        </div>
                    </MenuIconContainer>
                    <MenuIconContainer>
                        <FeatherIcon.PhoneCall
                            color="#000000"
                            size={28}
                        />
                        <div style={{marginLeft:'3vh'}}>
                            <Typography variant="h6" style={{color:'#000000'}}>
                            24x7 Service
                            </Typography>
                        </div>
                    </MenuIconContainer>
                    <MenuIconContainer>
                        <FeatherIcon.Cloud
                            color="#000000"
                            size={28}
                        />
                        <div style={{marginLeft:'3vh'}}>
                            <Typography variant="h6" style={{color:'#000000'}}>
                            Online Support 
                            </Typography>
                        </div>
                    </MenuIconContainer>
                    <MenuIconContainer>
                        <FeatherIcon.CreditCard
                            color="#000000"
                            size={28}
                        />
                        <div style={{marginLeft:'3vh'}}>
                            <Typography variant="h6" style={{color:'#000000'}}>
                            Online Payment
                            </Typography>
                        </div>
                    </MenuIconContainer>
                </Toolbar>
            </AppBar>
            <MainContent>
                Text1
            </MainContent>
        </MainContainer>
    );
  }
}

export default HomePageContainer;