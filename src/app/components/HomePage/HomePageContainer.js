import React from "react";
import {AppBar,Toolbar,Typography,Paper,Button} from '@material-ui/core';
import SlideShowImage from './SlideShowImage';
import * as FeatherIcon from 'react-feather';
import { Parallax } from "react-parallax";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
`;

const MainContent = styled.div`
    text-align:center;
`;

const ProductContent = styled.div`
`;

const TopContent = styled.div`
    text-align:center;
    padding-left:20vh;
    padding-right:20vh;
    padding-top:10vh;
    padding-bottom:7vh;
`;

const MenuIconContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

const insideStyles = {
    padding:'15vh',
    paddingLeft: '40vh',
    paddingRight:'40vh',
    position: "relative",
    // transform: "translate(-50%,-50%)"
};

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

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
                <TopContent>
                    <Typography variant="h4">
                        Welcome to Shukla Masala
                    </Typography>
                    <PaddingContainer/>
                    <Typography variant="subtitle1">
                        Spices have a long and ancient history, especially in India, where they are a part of life and heritage. In every home & in every province across the country, different spices and blends are used to create different and distinctive tastes in dishes. Several decades ago, housewives used to grind their spices manually at home and make their own blends for use in their cooking. To make this process easier for the housewife, ’MAHASHIAN DI HATTI’ (MDH) visualised the concept of ready-to-use ground spices.
                    </Typography>
                </TopContent>
                <Parallax bgImage={require('../images/HomeImage2.jpg')} strength={500} blur={5}>
                    <div style={{ height: 500 }}>
                        <ProductContent style={insideStyles}>
                            <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                            >
                                <Button style={{width:'100%'}}>
                                    <Paper variant="elevation" elevation={10} style={{padding:'10px',width:'100%'}}>
                                        <img src={require('../images/haldi.jpg')} alt="haldi" style={{width:'200px',height:'200px'}}/>
                                        <div style={{padding:'5px',textAlign:'center'}}>
                                            <Typography variant="h6">
                                                Haldi
                                            </Typography>
                                            <Button variant="contained" style={{paddingTop:'5px',backgroundColor:"#EE6622",textTransform:'capitalize'}}>
                                                Buy it now
                                            </Button>
                                        </div>
                                    </Paper>
                                </Button>
                                <Button style={{width:'100%'}}>
                                    <Paper variant="elevation" elevation={10} style={{padding:'10px',width:'100%'}}>
                                        <img src={require('../images/haldi2.jpeg')} alt="haldi" style={{width:'200px',height:'200px'}}/>
                                        <div style={{padding:'5px',textAlign:'center'}}>
                                            <Typography variant="h6">
                                                Haldi
                                            </Typography>
                                            <Button variant="contained" style={{paddingTop:'5px',backgroundColor:"#EE6622",textTransform:'capitalize'}}>
                                                Buy it now
                                            </Button>
                                        </div>
                                    </Paper>
                                </Button>
                                <Button style={{width:'100%'}}>
                                    <Paper variant="elevation" elevation={10} style={{padding:'10px',width:'100%'}}>
                                        <img src={require('../images/haldi3.jpg')} alt="haldi" style={{width:'200px',height:'200px'}}/>
                                        <div style={{padding:'5px',textAlign:'center'}}>
                                            <Typography variant="h6">
                                                Haldi
                                            </Typography>
                                            <Button variant="contained" style={{paddingTop:'5px',backgroundColor:"#EE6622",textTransform:'capitalize'}}>
                                                Buy it now
                                            </Button>
                                        </div>
                                    </Paper>
                                </Button>
                                <Button style={{width:'100%'}}>
                                    <Paper variant="elevation" elevation={10} style={{padding:'10px',width:'100%'}}>
                                        <img src={require('../images/haldi.jpg')} alt="haldi" style={{width:'200px',height:'200px'}}/>
                                        <div style={{padding:'5px',textAlign:'center'}}>
                                            <Typography variant="h6">
                                                Haldi
                                            </Typography>
                                            <Button variant="contained" style={{paddingTop:'5px',backgroundColor:"#EE6622",textTransform:'capitalize'}}>
                                                Buy it now
                                            </Button>
                                        </div>
                                    </Paper>
                                </Button>
                                <Button style={{width:'100%'}}>
                                    <Paper variant="elevation" elevation={10} style={{padding:'10px',width:'100%'}}>
                                        <img src={require('../images/haldi2.jpeg')} alt="haldi" style={{width:'200px',height:'200px'}}/>
                                        <div style={{padding:'5px',textAlign:'center'}}>
                                            <Typography variant="h6">
                                                Haldi
                                            </Typography>
                                            <Button variant="contained" style={{paddingTop:'5px',backgroundColor:"#EE6622",textTransform:'capitalize'}}>
                                                Buy it now
                                            </Button>
                                        </div>
                                    </Paper>
                                </Button>
                            </Carousel>
                        </ProductContent>
                    </div>
                </Parallax>
                <TopContent>
                    <Typography variant="h5">
                        Impact - The Heart of Business
                    </Typography>
                    <PaddingContainer/>
                    <Typography variant="subtitle1">
                        Thousands of people dream of having their own business and even more so be a successful entrepreneur. But what does it take to achieve success in the business industry? One of the most successful entrepreneurs featured at the Forbes website,...
                    </Typography>
                </TopContent>
            </MainContent>
        </MainContainer>
    );
  }
}

export default HomePageContainer;