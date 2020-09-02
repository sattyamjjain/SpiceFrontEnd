/* eslint-disable no-unused-vars */
import React from "react";
import {Button,MenuItem,Typography,TextField} from '@material-ui/core';
import { Formik } from 'formik';

import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    padding:15px;
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


export default class EditProductSize extends React.Component {
    constructor(props){
        super(props);
        this.state={
            stockAvailability:'In Stock'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            stockAvailability:event.target.value
        })
      };
  render() {
    return (
        <MainContainer>
            <Typography variant="h6">
                Edit Product Size
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
                            <div style={{paddingTop:'10px'}}>
                                <TextField 
                                    fullWidth
                                    label="Size"
                                    type="size"
                                    name="size"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.size}
                                />
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <TextField  
                                    fullWidth
                                    label="Price"
                                    type="price"
                                    name="price"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                />
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <TextField
                                id="outlined-select-currency"
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