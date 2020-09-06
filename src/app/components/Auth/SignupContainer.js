/* eslint-disable no-unused-vars */
import React from "react";
import {Button,TextField,Typography,Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import { userActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MainContainer = styled.div`
    width:100%;
    padding-top:5%;
`;

const FormContainer = styled.div`
`;

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

class SignupContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={
            registerResult:null,
            successSnackBar:false,
            failureSnackBar:false,
            failureMessage:''
        }
        this.handleSignup = this.handleSignup.bind(this)
    }

    handleSignup(formValues){
        console.log('formValues',formValues)
        if(formValues.password === formValues.confirmPassword){
            this.props.register(formValues)
            .then(res=>{
                console.log('res',res)
                this.setState({
                    successSnackBar:true
                })
                this.goToPage('login')
            })
            .catch(err=>{
                const errMessage = err.split('Error: ')[1]
                console.log('err',errMessage)
                this.setState({
                    failureSnackBar:true,
                    failureMessage:errMessage
                })
            })
        }else{
            this.setState({
                failureSnackBar:true,
                failureMessage:'Password doesn\'t match'
            })
        }
    }

    goToPage(val){
        this.props.displayedComponent(val);
    }

    render() {
        return (
            <MainContainer>
                <Typography variant="h5" style={{textAlign:'center'}}>
                    Sign up
                </Typography>
                <FormContainer>
                    <Formik
                        initialValues={{ username:'',email:'',password:'',confirmPassword:''}}
                        onSubmit={this.handleSignup}
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
                                        fullWidth
                                        label="Username or Mobile No."
                                        type="username"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <TextField 
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <TextField 
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <TextField 
                                        fullWidth
                                        label="Confirm Password"
                                        type="password"
                                        name="confirmPassword"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword}
                                    />
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <Typography variant="caption">
                                        I agree to the Privacy Policy and Terms and Conditions.
                                    </Typography>
                                </div>
                                <div style={{paddingTop:'20px'}}>
                                    <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary" style={{textTransform:'capitalize'}}>
                                        Sign up with Email
                                    </Button>
                                </div>
                                <div style={{paddingTop:'10px',textAlign:'center'}}>
                                    <Typography variant="subtitle1">
                                        Already have an account? <Button variant="text" onClick={this.goToPage.bind(this,'login')} style={{textTransform:'capitalize'}}>Login.</Button>
                                    </Typography>
                                </div>
                            </form>
                        )}
                    </Formik>
                </FormContainer>
                <Snackbar open={this.state.successSnackBar} autoHideDuration={6000} onClose={this.handleSuccessClose}>
                    <Alert onClose={this.handleSuccessClose} severity="success">
                        Signup Successful
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.failureSnackBar} autoHideDuration={6000} onClose={this.handleFailureClose}>
                    <Alert onClose={this.handleFailureClose} severity="error">
                        {this.state.failureMessage}
                    </Alert>
                </Snackbar>
            </MainContainer>
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    const { result } = state.registration;
    return { registering,result };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(SignupContainer);
export { connectedRegisterPage as SignupContainer };