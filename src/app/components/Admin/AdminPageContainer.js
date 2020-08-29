import React from "react";
import {FormControlLabel,Checkbox,TextField,Typography,Paper,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import { Formik } from 'formik';
import { userActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
    }

    handleAdminLogin(formValues){
        this.props.login(formValues)
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
    login: userActions.login,
};

const connectedLoginPage = connect(mapState, actionCreators)(AdminPageContainer);
export { connectedLoginPage as AdminPageContainer };