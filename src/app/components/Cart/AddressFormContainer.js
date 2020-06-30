import React from "react";
import {Button,TextField,Typography} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    height:80vh;
    padding:15px;
`;

const FormContainer = styled.div`
`;


export default class AddressFormContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <Typography variant="h6">
                Add new Address
            </Typography>
            <FormContainer>
                <Formik
                    initialValues={{ name:'',contactNo:'',pincode:'',address:'',locality:'',city:'',state:''}}
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
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    id="standard-basic" 
                                    fullWidth
                                    label="Name"
                                    type="name"
                                    name="name"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    id="standard-basic" 
                                    fullWidth
                                    label="Contact No."
                                    type="contactNo"
                                    name="contactNo"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contactNo}
                                />
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    id="standard-basic" 
                                    fullWidth
                                    label="Pin Code"
                                    type="pincode"
                                    name="pincode"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.pincode}
                                />
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    id="standard-basic" 
                                    fullWidth
                                    label="Address"
                                    type="address"
                                    name="address"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address}
                                />
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    id="standard-basic" 
                                    fullWidth
                                    label="Locality/Town"
                                    type="locality"
                                    name="locality"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.locality}
                                />
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',paddingTop:'10px'}}>
                                <div style={{width:'45%'}}>
                                    <TextField 
                                        id="standard-basic" 
                                        label="City/District"
                                        type="city"
                                        name="city"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.city}
                                    />
                                </div>
                                <div style={{width:'45%'}}>
                                    <TextField 
                                        id="standard-basic" 
                                        label="State"
                                        type="state"
                                        name="state"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.state}
                                    />
                                </div>
                            </div>
                            <div style={{paddingTop:'20px'}}>
                                <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary">
                                    Add Address
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </FormContainer>
        </MainContainer>
    );
  }
}