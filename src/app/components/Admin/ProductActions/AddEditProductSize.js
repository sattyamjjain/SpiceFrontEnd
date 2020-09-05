/* eslint-disable no-unused-vars */
import React from "react";
import {Button,MenuItem,Typography,TextField} from '@material-ui/core';
import { Formik } from 'formik';
import { productActions } from '../../../_actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MainContainer = styled.div`
    width:100%;
    padding:15px;
`;

const FormContainer = styled.div`
`;

const PaddingContainer = styled.div`
    padding:2vh;
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


class AddEditProductSize extends React.Component {
    constructor(props){
        super(props);
        this.state={
            stockAvailability:'In Stock'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitProductSize =  this.handleSubmitProductSize.bind(this)

    }

    handleSubmitProductSize = (formValues)=>{
        if(this.props.isEdit === true){
            this.props.editProductSize(formValues,this.props.productDesc.id)
        }else{
            formValues.productId=this.props.product.product.id
            this.props.addProductSize(formValues)
        }
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
                    initialValues={{ 
                        size:this.props.productDesc ? this.props.productDesc.size : '',
                        price:this.props.productDesc ? this.props.productDesc.price : '',
                        mrp:this.props.productDesc ? this.props.productDesc.mrp : '',
                        discount:this.props.productDesc ? this.props.productDesc.discount : '',
                        availability:this.props.productDesc ? this.props.productDesc.availability : ''
                    }}
                    onSubmit={this.handleSubmitProductSize}
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
                            <PaddingContainer/>
                            <TextField 
                                placeholder="Size (in grams)"
                                type="size"
                                fullWidth
                                name="size"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.size}
                            />
                            <PaddingContainer/>
                            <TextField 
                                fullWidth
                                placeholder="Price"
                                type="price"
                                name="price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                            <PaddingContainer/>
                            <TextField 
                                fullWidth
                                placeholder="MRP"
                                type="mrp"
                                name="mrp"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mrp}
                            />
                            <PaddingContainer/>
                            <TextField 
                                fullWidth
                                placeholder="Discount"
                                type="discount"
                                name="discount"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.discount}
                            />
                            <PaddingContainer/>
                            <TextField
                                select
                                fullWidth
                                placeholder="Select"
                                value={values.availability}
                                onChange={handleChange}
                                >
                                {stockValues.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
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

function mapState(state) {
    const { products } = state.product;
    return { products };
}

const actionCreators = {
    addProductSize: productActions.addProductSize,
    editProductSize: productActions.editProductSize
};

const connectedProductContainer = connect(mapState, actionCreators)(AddEditProductSize);
export { connectedProductContainer as AddEditProductSize };