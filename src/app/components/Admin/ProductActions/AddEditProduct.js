import React from "react";
import {Button,Divider,Typography,MenuItem,TextField} from '@material-ui/core';
import { Formik } from 'formik';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    padding:15px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

const FormContainer = styled.div`
`;

const stockValues = [
  {
    value: 'In Stock',
    label: 'In Stock',
  },
  {
    value: 'Out of Stock',
    label: 'Out of Stock',
  },
];


export default class AddEditProduct extends React.Component {
  render() {
    return (
        <MainContainer>
            <Typography variant="h6">
                Add Product
            </Typography>
            <FormContainer>
                <Formik
                    initialValues={{ size:'',price:'',availability:''}}
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
                            <div style={{paddingTop:'10px',display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="subtitle1" style={{padding:'2vh'}}>Product Name :</Typography>
                                <TextField 
                                    type="name"
                                    name="name"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                            <div style={{paddingTop:'10px',display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="subtitle1" style={{padding:'2vh'}}>Short Description :</Typography>
                                <TextField 
                                    type="shortDescrip"
                                    name="shortDescrip"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.shortDescrip}
                                />
                            </div>
                            <div style={{paddingTop:'10px',display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="subtitle1" style={{padding:'2vh'}}>Long Description :</Typography>
                                <TextField 
                                    type="longDescrip"
                                    name="longDescrip"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.longDescrip}
                                />
                            </div>
                            <div style={{paddingTop:'10px',display:'flex',justifyContent:'space-between'}}>
                                <TextField 
                                    label="Size"
                                    type="size"
                                    name="size"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.size}
                                />
                                <PaddingContainer/>
                                <TextField 
                                    label="Price"
                                    type="price"
                                    name="price"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                />
                                <PaddingContainer/>
                                <TextField
                                  select
                                  fullWidth
                                  label="Select"
                                  value={values.availability}
                                  onChange={handleChange}
                                  variant="outlined"
                                  >
                                  {stockValues.map((option) => (
                                      <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                      </MenuItem>
                                  ))}
                                </TextField>
                            </div>
                            <div style={{paddingTop:'10px',display:'flex',justifyContent:'space-between'}}>
                                <TextField 
                                    label="Size"
                                    type="size"
                                    name="size"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.size}
                                />
                                <PaddingContainer/>
                                <TextField 
                                    label="Price"
                                    type="price"
                                    name="price"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                />
                                <PaddingContainer/>
                                <TextField
                                  select
                                  fullWidth
                                  label="Select"
                                  value={values.availability}
                                  onChange={handleChange}
                                  variant="outlined"
                                  >
                                  {stockValues.map((option) => (
                                      <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                      </MenuItem>
                                  ))}
                                </TextField>
                            </div>
                            <div style={{paddingTop:'10px',display:'flex',justifyContent:'space-between'}}>
                                <TextField 
                                    label="Size"
                                    type="size"
                                    name="size"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.size}
                                />
                                <PaddingContainer/>
                                <TextField 
                                    label="Price"
                                    type="price"
                                    name="price"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                />
                                <PaddingContainer/>
                                <TextField
                                  select
                                  fullWidth
                                  label="Select"
                                  value={values.availability}
                                  onChange={handleChange}
                                  variant="outlined"
                                  >
                                  {stockValues.map((option) => (
                                      <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                      </MenuItem>
                                  ))}
                                </TextField>
                            </div>
                            <div style={{paddingTop:'10px',display:'flex',justifyContent:'space-between'}}>
                                <TextField 
                                    label="Size"
                                    type="size"
                                    name="size"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.size}
                                />
                                <PaddingContainer/>
                                <TextField 
                                    label="Price"
                                    type="price"
                                    name="price"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                />
                                <PaddingContainer/>
                                <TextField
                                  select
                                  fullWidth
                                  label="Select"
                                  value={values.availability}
                                  onChange={handleChange}
                                  variant="outlined"
                                  >
                                  {stockValues.map((option) => (
                                      <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                      </MenuItem>
                                  ))}
                                </TextField>
                            </div>
                            <div style={{paddingTop:'20px'}}>
                                <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary">
                                    Submit
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