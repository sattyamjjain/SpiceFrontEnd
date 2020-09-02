import React from "react";
import {Button,TextField,Typography} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';
import { useDropzone } from 'react-dropzone';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:auto;
    height:auto;
    padding:2vh;
`;

const FormContainer = styled.div`
`;

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

const PicUploader = (props) => {
    const { setFieldValue } = props;
    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        getBase64(acceptedFiles[0])
          .then((res) => {
            setFieldValue("profilePic", res);
          })
          .catch((err) => {
            console.log('error',err)
          });
      },
    })
    return (
      <div>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <div style={{backgroundColor:'#E1EAEC',textAlign:'center', height:'150px',backgroundImage:`${props.value}`}} {...getRootProps({ className: 'dropzone' })} >
              <FeatherIcon.Upload style={{ position:'relative',top: '40%'}}/>
          </div>
        </div>
     </div>
    )
}

export default class EditProfileContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <Typography variant="h6">
                Edit Profile
            </Typography>
            <FormContainer>
                <Formik
                    initialValues={{ profilePic:'',name:'',contactNo:'',pincode:'',address:'',locality:'',city:'',state:''}}
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
                        setFieldValue,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div >
                                    <div style={{paddingTop:'10px'}}>
                                       <PicUploader setFieldValue={setFieldValue} name="profilePic"/>
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="name"
                                            name="name"
                                            placeholder="Full Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="name"
                                            name="username"
                                            placeholder="Username"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.username}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            placeholder="Mobile No."
                                            type="mobileNo"
                                            name="mobileNo"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mobileNo}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="mobileNo"
                                            placeholder="Alternate Mobile No."
                                            name="alternateMobileNo"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.alternateMobileNo}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="location"
                                            name="location"
                                            placeholder="Location"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.location}
                                        />
                                    </div>
                                    <div style={{paddingTop:'20px',display:'flex',justifyContent:'space-between'}}>
                                        <Button variant="contained" disabled={isSubmitting} color="default" style={{textTransform:'capitalize'}}>
                                            Close
                                        </Button>
                                        <Button variant="contained" type="submit" disabled={isSubmitting} color="primary" style={{textTransform:'capitalize'}}>
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </FormContainer>
        </MainContainer>
    );
  }
}