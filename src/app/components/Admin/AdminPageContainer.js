/* eslint-disable no-unused-vars */
import React from "react";
import {FormControlLabel,Checkbox,TextField,Typography,Paper,Button} from '@material-ui/core';
import { Formik } from 'formik';
import { userActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { history } from '../../_helpers';

const MainContainer = styled.div`
  padding-top:30vh;
  display:flex;
  justify-content:center;
  width:100%;
`;

const FormContainer = styled.div`
`;

class AdminPageContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
        this.handleAdminLogin = this.handleAdminLogin.bind(this)
    }

    handleAdminLogin(formValues){
        this.props.adminLogin(formValues)
        .then(res=>{
            this.setState({
                successSnackBar:true
            })
            history.push('/shuklamasala/dashboard')
            history.go(0)
        })
        .catch(err=>{
            this.setState({
                failureSnackBar:true
            })
        })
    }

  render() {
    return (
        <MainContainer>
            <Paper variant="elevation" elevation={10} style={{padding:'15px',width:'30%',top:'50%',left:'50%'}}>
              <Typography variant="h4" style={{textAlign:'center'}}>
                LOGIN
              </Typography>
              <FormContainer>
                <Formik
                    initialValues={{ username:'',password:''}}
                    onSubmit={this.handleAdminLogin}
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
                                    label="Username"
                                    type="username"
                                    name="username"
                                    variant="outlined"
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
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </div>
                            <div style={{paddingTop:'10px',display:'flex',justifyContent:'space-between'}}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={true}
                                        onChange={handleChange}
                                        name="rememberMe"
                                        color="primary"
                                    />
                                    }
                                    label="Remember me"
                                />
                                <Button variant="text" size="small">Forget Username & Password</Button>
                            </div>
                            <div style={{paddingTop:'20px'}}>
                                <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary">
                                    Login
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
            </FormContainer>
          </Paper>
        </MainContainer>
    );
  }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    adminLogin: userActions.adminLogin,
};

const connectedLoginPage = connect(mapState, actionCreators)(AdminPageContainer);
export { connectedLoginPage as AdminPageContainer };