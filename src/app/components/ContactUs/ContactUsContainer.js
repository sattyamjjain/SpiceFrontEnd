import React from "react";
import {AppBar,Toolbar,TextField,Typography,Button,Breadcrumbs,NavigateNextIcon,Link} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';
import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';

const MainContainer = styled.div`
    padding:40px;
    padding-top:30px;
`;

const HeadContainer = styled.div`

`;

const SubMainContainer = styled.div`
    width:100%;
    padding-top:40px;
    display:flex;
    justify-content:space-between;
`;

const FormContainer = styled.div`
    width:45%;
`;

const MapContactContainer = styled.div`
    width:55%;
    padding-left:40px;
`;

const MapContainer = styled.div`
    height:45vh;
`;

const ContactContainer = styled.div`
    padding-top:20px;
    padding-left:20%;
    padding-right:20%
`;

const ContactField = styled.div`
    display:flex;
    justify-content:space-between;
    padding-bottom:20px;
`;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUsContainer extends React.Component {

    static defaultProps = {
        center: {
        lat: 25.8973,
        lng: 81.9453
        },
        zoom: 11
    };

    handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
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
                        <Typography color="textPrimary">Contact Us</Typography>
                    </Breadcrumbs>
                    <Typography variant="h5">
                        Contact Us
                    </Typography>
                </HeadContainer>
                <SubMainContainer>
                    <FormContainer>
                        <Formik
                            initialValues={{ firstname:'',lastname:'',email:'',phoneNumber:'',message:''}}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                }, 400);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <div>
                                            <Typography variant="subtitle1">
                                                First Name
                                            </Typography>
                                            <TextField 
                                                id="standard-basic" 
                                                type="firstname"
                                                name="firstname"
                                                required={true}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.firstname}
                                            />
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1">
                                                Last Name
                                            </Typography>
                                            <TextField 
                                                id="standard-basic" 
                                                type="lastname"
                                                name="lastname"
                                                required={true}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lastname}
                                            />
                                        </div>
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                    <Typography variant="subtitle1">
                                        Email
                                    </Typography>
                                    <TextField 
                                        id="standard-basic" 
                                        fullWidth
                                        type="email"
                                        name="email"
                                        required={true}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                    <Typography variant="subtitle1">
                                        Phone No.
                                    </Typography>
                                    <TextField 
                                        id="standard-basic" 
                                        fullWidth
                                        type="phoneNumber"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phoneNumber}
                                    />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                    <Typography variant="subtitle1">
                                        Message
                                    </Typography>
                                    <TextField
                                        id="filled-multiline-static"
                                        multiline
                                        fullWidth
                                        rows={3}
                                        rowsMax={6}
                                        type="message"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        />
                                    </div>
                                    <div style={{paddingTop:'20px'}}>
                                        <Button variant="contained" type="submit" disabled={isSubmitting} style={{backgroundColor:'#EE6622',textTransform:'capitalize'}}>
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </FormContainer>
                    <MapContactContainer>
                        <MapContainer>
                            <GoogleMapReact
                            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            >
                            <AnyReactComponent
                                lat={25.8973}
                                lng={81.9453}
                                text="My Marker"
                            />
                            </GoogleMapReact>
                        </MapContainer>
                        <ContactContainer>
                            <ContactField>
                                <Typography variant="subtitle1">
                                    Contact No.
                                </Typography>
                                <Typography variant="subtitle2">
                                    +91 9876543210
                                </Typography>
                            </ContactField>
                            <ContactField>
                                <Typography variant="subtitle1">
                                    Address
                                </Typography>
                                <Typography variant="subtitle2">
                                    Demo Store Demo Store USA
                                </Typography>
                            </ContactField>
                            <ContactField>
                                <Typography variant="subtitle1">
                                    Mail
                                </Typography>
                                <Typography variant="subtitle2">
                                    example123@gmail.com
                                </Typography>
                            </ContactField>
                        </ContactContainer>
                    </MapContactContainer>
                </SubMainContainer>
            </MainContainer>
        );
    }
}

export default ContactUsContainer;