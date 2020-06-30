import React from "react";
import {Button,TextField,Typography,FormControlLabel,Checkbox} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    padding-top:20%;
`;

const FormContainer = styled.div`
`;

const PaddingContainer = styled.div`
    padding:5px;
`;


export default class ForgetPasswordContainer extends React.Component {

    goToPage(val){
        this.props.displayedComponent(val);
    }

  render() {
    return (
        <MainContainer>
            <Typography variant="h5" style={{textAlign:'center'}}>
                Recover your password
            </Typography>
            <Typography variant="caption" style={{textAlign:'center'}}>
                Fill in your email address below and we will send you and email with further instructions.
            </Typography>
            <PaddingContainer/>
            <FormContainer>
                <Formik
                    initialValues={{ username:'',password:''}}
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
                                    label="Email"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                            <div style={{paddingTop:'20px'}}>
                                <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary">
                                    Recover your password
                                </Button>
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <Button variant="text" onClick={this.goToPage.bind(this,'login')}>
                                    Already have an account?
                                </Button>
                                <Button variant="text" onClick={this.goToPage.bind(this,'signup')}>
                                    Don't have an account?
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