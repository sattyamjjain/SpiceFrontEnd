import React from "react";
import {Button,Typography} from '@material-ui/core';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';
import { useDropzone } from 'react-dropzone';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:auto;
    padding:15px;
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
            //error
          });
      },
    })
    return (
      <div>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <div style={{backgroundColor:'#E1EAEC',textAlign:'center', height:'150px',backgroundImage:`${props.value}`}} >
              <FeatherIcon.Upload style={{ position:'relative',top: '40%'}}/>
          </div>
        </div>
     </div>
    )
}

export default class ImageUploaderContainer extends React.Component {
  render() {
    return (
        <MainContainer>
            <Typography variant="h6">
                Upload Image
            </Typography>
            <FormContainer>
                <Formik
                    initialValues={{ profilePic:''}}
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
                            <div style={{paddingTop:'10px'}}>
                                <PicUploader setFieldValue={setFieldValue} name="profilePic"/>
                            </div>
                            <div style={{paddingTop:'20px',textAlign:'center'}}>
                                <Button variant="contained" type="submit" disabled={isSubmitting} color="primary" style={{textTransform:'capitalize'}}>
                                    Upload
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