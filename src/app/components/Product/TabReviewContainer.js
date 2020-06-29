import React from "react";
import {Paper,Divider,Button,TextField,Typography,Link} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Formik } from 'formik';
import * as FeatherIcon from 'react-feather';

import styled from 'styled-components';

const MainContainer = styled.div`
    padding-top:20px;
    border-radius:2px;
    border-color:#000000;
    width:100%;
`;

const DividerContainer = styled.div`
    padding-top:20px;
    padding-bottom:20px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

const FormContainer = styled.div`
`;


function ReviewForm(props) {
    const [value, setValue] = React.useState(1);
    return (
        <FormContainer>
        <Formik
            initialValues={{ name:'',email:'',rating:'',reviewTitle:'',reviewMessage:''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
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
                        <Typography variant="subtitle1">
                            Name
                        </Typography>
                        <TextField 
                            id="standard-basic" 
                            fullWidth
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                    </div>
                    <div style={{paddingTop:'10px'}}>
                        <Typography variant="subtitle1">
                            Email
                        </Typography>
                        <TextField 
                            id="standard-basic" 
                            fullWidth
                            type="email"
                            name="email"
                            required={true}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </div>
                    <div style={{paddingTop:'10px',display:'flex',justifyContent:'flex-start'}}>
                        <Typography variant="subtitle1">
                            Rating
                        </Typography>
                        <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        style={{
                            paddingLeft:'10px'
                        }}
                        />
                    </div>
                    <div style={{paddingTop:'10px'}}>
                        <Typography variant="subtitle1">
                            Review Title
                        </Typography>
                        <TextField 
                            id="standard-basic" 
                            fullWidth
                            type="reviewTitle"
                            name="reviewTitle"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.reviewTitle}
                        />
                    </div>
                    <div style={{paddingTop:'10px'}}>
                        <Typography variant="subtitle1">
                            Review Message
                        </Typography>
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            fullWidth
                            rows={3}
                            rowsMax={6}
                            type="reviewMessage"
                            name="reviewMessage"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.reviewMessage}
                            />
                    </div>
                    <div style={{paddingTop:'20px'}}>
                        <Button variant="contained" type="submit" disabled={isSubmitting} style={{backgroundColor:'red'}}>
                            Submit
                        </Button>
                    </div>
                </form>
            )}
        </Formik>
    </FormContainer>
    );
  }

export default class TabReviewContainer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            displayReviewForm:0
        }
    }

    openReviewForm(){
        this.setState({
            displayReviewForm:1
        })
    }
    
    render() {
        return (
            <MainContainer>
                <Paper variant="outlined" style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'20px'}}>
                    <Typography variant="h6" >
                        Customer Reviews
                    </Typography>
                    <PaddingContainer/>
                    <Typography variant="paragraph" >
                        No reviews yet
                    </Typography>
                    <Button color="secondary" onClick={this.openReviewForm.bind(this)} style={{float:'right'}}>Write a Review</Button>
                    <DividerContainer>
                        <Divider />
                    </DividerContainer>
                    {this.state.displayReviewForm ? (<ReviewForm/>):null}
                </Paper>
            </MainContainer>
        );
    }
}
