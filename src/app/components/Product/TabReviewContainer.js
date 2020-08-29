import React from "react";
import {Paper,Divider,Button,TextField,Typography} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Formik } from 'formik';
import { productReviewActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MainContainer = styled.div`
    padding-top:20px;
    border-radius:2px;
    border-color:#000000;
    width:100%;
`;

const DividerContainer = styled.div`
    padding-top:30px;
    padding-bottom:20px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

const FormContainer = styled.div`
`;

const ReviewContainer = styled.div`
    padding:2vh
`;


function ReviewForm(props) {
    const [value, setValue] = React.useState(1);

    const handleReviewSubmit = (formValues) =>{
        formValues.rating=value
        console.log('reviews',formValues)
        props.reviewSubmit(formValues)
        props.displayReviewForm(false)
    }

    return (
        <FormContainer>
        <Formik
            initialValues={{ usersName:'',usersEmail:'',rating:'',title:'',message:''}}
            validate={values => {
                const errors = {};
                if (!values.usersEmail) {
                    errors.usersEmail = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.usersEmail)) {
                    errors.usersEmail = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={handleReviewSubmit}
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
                            fullWidth
                            type="name"
                            name="usersName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.usersName}
                        />
                    </div>
                    <div style={{paddingTop:'10px'}}>
                        <Typography variant="subtitle1">
                            Email
                        </Typography>
                        <TextField 
                            fullWidth
                            type="email"
                            name="usersEmail"
                            required={true}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.usersEmail}
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
                            fullWidth
                            type="title"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                    </div>
                    <div style={{paddingTop:'10px'}}>
                        <Typography variant="subtitle1">
                            Review Message
                        </Typography>
                        <TextField
                            multiline
                            fullWidth
                            rows={3}
                            rowsMax={6}
                            type="message"
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
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

class TabReviewContainer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            displayReviewForm:false
        }
        this.reviewSubmit=this.reviewSubmit.bind(this)
    }

    componentDidMount(){
        this.props.getAllReview()
    }

    openReviewForm(val){
        this.setState({
            displayReviewForm:val
        })
    }

    reviewSubmit(review){
        this.props.postReview(review)
    }
    
    render() {
        console.log('reviews',this.props.reviews)
        const { reviews } = this.props;
        return (
            <MainContainer>
                <Paper variant="outlined" style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'20px'}}>
                    <Typography variant="h6" >
                        Customer Reviews
                    </Typography>
                    <PaddingContainer/>
                    {
                        reviews && reviews.length !==0 ? reviews.map((review,index)=>(
                            <ReviewContainer key={index}>
                                <div style={{display:'flex',justifyContent:'flex-start'}}>
                                    <Typography variant="paragraph">
                                        {review.title}
                                    </Typography>
                                    <Typography variant="paragraph">
                                        {review.rating}
                                    </Typography>
                                </div>
                                <Typography variant="caption">
                                    {review.message}
                                </Typography>
                            </ReviewContainer>
                        )):
                        <Typography variant="paragraph" >
                            No reviews yet
                        </Typography>
                    }
                    <Button color="secondary" onClick={this.openReviewForm.bind(this,true)} style={{float:'right'}}>Write a Review</Button>
                    <DividerContainer>
                        <Divider />
                    </DividerContainer>
                    {this.state.displayReviewForm ? (<ReviewForm reviewSubmit={this.reviewSubmit} displayReviewForm={this.openReviewForm}/>):null}
                </Paper>
            </MainContainer>
        );
    }
}

function mapState(state) {
    const { reviews } = state.productReview;
    return { reviews };
  }
  
  const actionCreators = {
    getAllReview:productReviewActions.getAllReview,
    postReview:productReviewActions.postReview
  };
  
  const connectedTabReviewContainer = connect(mapState, actionCreators)(TabReviewContainer);
  export { connectedTabReviewContainer as TabReviewContainer };
  
