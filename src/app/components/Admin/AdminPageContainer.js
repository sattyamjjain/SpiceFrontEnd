import React from "react";
import {FormControlLabel,Checkbox,TextField,Typography,Paper,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import { Formik } from 'formik';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding-top:30vh;
  display:flex;
  justify-content:center;
  width:100%;
`;

const FormContainer = styled.div`
`;

class AdminPageContainer extends React.Component {

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
                                    id="standard-basic" 
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
                                <Button variant="text" size="small">Forget Password</Button>
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

export default AdminPageContainer;