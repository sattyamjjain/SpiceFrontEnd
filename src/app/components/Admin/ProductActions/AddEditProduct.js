import React from "react";
import {Button,Typography,TextField} from '@material-ui/core';
import { Formik } from 'formik';
import { productActions } from '../../../_actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MainContainer = styled.div`
    width:auto;
    padding:15px;
`;

const FormContainer = styled.div`
`;

class AddEditProduct extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
        }
        this.handleProductSubmit =  this.handleProductSubmit.bind(this)
    }

    handleProductSubmit = (formValues)=>{
        if(this.props.isEdit === true){
            this.props.editProduct(formValues,this.props.product.product.id)
        }else{
            this.props.addProduct(formValues)
        }
    }
  render() {
    return (
        <MainContainer>
            <Typography variant="h6">
                Add Product
            </Typography>
            <FormContainer>
                <Formik
                    initialValues={{ 
                        title:this.props.product ? this.props.product.product.title : '',
                        description:this.props.product ? this.props.product.product.description : ''
                    }}
                    onSubmit={this.handleProductSubmit}
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
                                    type="title"
                                    name="title"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.title}
                                    style={{width:'65%'}}
                                />
                            </div>
                            <div style={{paddingTop:'10px',display:'flex',justifyContent:'space-between'}}>
                                <Typography variant="subtitle1" style={{padding:'2vh'}}>Description :</Typography>
                                <TextField 
                                    multiline
                                    rows={3}
                                    type="description"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    style={{width:'65%'}}
                                />
                            </div>
                            <div style={{paddingTop:'20px'}}>
                                <Button variant="contained" fullWidth={true} type="submit" disabled={isSubmitting} color="primary" style={{textTransform:'capitalize'}}>
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
    addProduct: productActions.addProduct,
    editProduct: productActions.editProduct,
};

const connectedProductContainer = connect(mapState, actionCreators)(AddEditProduct);
export { connectedProductContainer as AddEditProduct };