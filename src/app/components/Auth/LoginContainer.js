/* eslint-disable no-unused-vars */
import React from "react";
import {Button,TextField,Typography,FormControlLabel,Checkbox,Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import { userActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { history } from '../../_helpers';

const MainContainer = styled.div`
    width:100%;
    padding-top:10%;
`;

const FormContainer = styled.div`
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

class LoginContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={
            successSnackBar:false,
            failureSnackBar:false
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
 
    goToPage(val){
        this.props.displayedComponent(val);
    }

    handleLogin(formValues){
        this.props.login(formValues)
            .then(res=>{
                this.setState({
                    successSnackBar:true
                })
                this.props.loginEnable(true)
                history.go(0)
                //this.props.handleClose()
            })
            .catch(err=>{
                this.setState({
                    failureSnackBar:true
                })
            })
    }

    handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            successSnackBar:false
        })
    };

    handleFailureClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            failureSnackBar:false
        })
    };

    render() {
        return (
            <MainContainer>
                <Typography variant="h5" style={{textAlign:'center'}}>
                    Login to your account
                </Typography>
                <Typography variant="subtitle1">
                    Dont have an account? <Button variant="text" onClick={this.goToPage.bind(this,'signup')} style={{textTransform:'capitalize'}}>Signup now.</Button>
                </Typography>
                <PaddingContainer/>
                <FormContainer>
                    <Formik
                        initialValues={{ username:'',password:''}}
                        onSubmit={this.handleLogin}
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
                                        label="Username or Email"
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
                                        label="Password"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </div>
                                <div style={{paddingTop:'10px',display:'flex',justifyContent:'flex-end'}}>
                                    <Button variant="text" size="small" onClick={this.goToPage.bind(this,'forgotPassword')} style={{textTransform:'capitalize'}}>Forget Password</Button>
                                </div>
                                <div style={{paddingTop:'20px'}}>
                                    <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary" style={{textTransform:'capitalize'}}>
                                        Login with Email
                                    </Button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </FormContainer>
                <Snackbar open={this.state.successSnackBar} autoHideDuration={6000} onClose={this.handleSuccessClose}>
                    <Alert onClose={this.handleSuccessClose} severity="success">
                        Login Successful
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.failureSnackBar} autoHideDuration={6000} onClose={this.handleFailureClose}>
                    <Alert onClose={this.handleFailureClose} severity="error">
                        Username or Password is incorrect.
                    </Alert>
                </Snackbar>
            </MainContainer>
        );
    }
}

function mapState(state) {
    const { error } = state.authentication;
    return { error };
}

const actionCreators = {
    login: userActions.login,
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginContainer);
export { connectedLoginPage as LoginContainer };