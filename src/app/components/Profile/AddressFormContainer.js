/* eslint-disable no-unused-vars */
import React from "react";
import {Button,TextField,Typography,FormControlLabel,Radio,RadioGroup} from '@material-ui/core';
import { Formik } from 'formik';
import { userActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MainContainer = styled.div`
    width:auto;
    height:auto;
    padding:2vh;
`;

const FormContainer = styled.div`
`;

class AddressFormContainer extends React.Component {

    constructor(props){
        super(props)
        this.state={
           
        }
        this.handleAddressSubmit = this.handleAddressSubmit.bind(this)
        this.handlePopupClose = this.handlePopupClose.bind(this)
    }

    componentDidMount(){
        console.log('address',this.props.userAddress)
    }

    handleAddressSubmit=(formValues) =>{
        console.log('values',formValues)
        if(this.props.isEdit === true){
            console.log('userid',this.props.userAddress.id)
            this.props.editAddress(formValues,this.props.userAddress.id)
            window.location.reload(true)
        }else{
            formValues.usersId=4
            this.props.postAddress(formValues)
            window.location.reload(true)
        }
    }

    handlePopupClose(){
        this.props.handleActionPopupClose();
    }

  render() {
    return (
        <MainContainer>
            <Typography variant="h6">
                Add Delivery Address
            </Typography>
            <FormContainer>
                <Formik
                    initialValues={{ 
                        name:this.props.userAddress ? this.props.userAddress.name : '',
                        mobile:this.props.userAddress ? this.props.userAddress.mobile : '',
                        address:this.props.userAddress ? this.props.userAddress.address : '',
                        city:this.props.userAddress ? this.props.userAddress.city : '',
                        state:this.props.userAddress ? this.props.userAddress.state : '',
                        pincode:this.props.userAddress ? this.props.userAddress.pincode : '',
                        country:this.props.userAddress ? this.props.userAddress.country : ''
                    }}
                    onSubmit={this.handleAddressSubmit}
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
                                            type="mobile"
                                            name="mobile"
                                            placeholder="Mobile No."
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mobile}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            multiline
                                            rows='3'
                                            type="address"
                                            name="address"
                                            placeholder="Address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.address}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="city"
                                            name="city"
                                            placeholder="City"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.city}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            placeholder="State"
                                            type="state"
                                            name="state"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.state}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="pincode"
                                            placeholder="Pincode"
                                            name="pincode"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.pincode}
                                        />
                                    </div>
                                    <div style={{paddingTop:'10px'}}>
                                        <TextField 
                                            fullWidth
                                            type="country"
                                            name="country"
                                            placeholder="Country"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.country}
                                        />
                                    </div>
                                    <div style={{paddingTop:'20px',display:'flex',justifyContent:'space-between'}}>
                                        <Button variant="contained" disabled={isSubmitting} color="default" style={{textTransform:'capitalize'}} onClick={this.handlePopupClose}>
                                            Close
                                        </Button>
                                        <Button variant="contained" type="submit" disabled={isSubmitting} color="primary" style={{textTransform:'capitalize'}}>
                                            Add
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

function mapState(state) {
    const { success } = state.users;
    return { success };
  }
  
const actionCreators = {
    postAddress:userActions.postAddress,
    editAddress:userActions.editAddress
};

const connectedAddressFormContainer = connect(mapState, actionCreators)(AddressFormContainer);
export { connectedAddressFormContainer as AddressFormContainer };
