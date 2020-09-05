/* eslint-disable no-unused-vars */
import React from "react";
import {Paper,Divider,Button,TextField,Typography} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Formik } from 'formik';
import { productReviewActions } from '../../_actions';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component";

const MainContainer = styled.div`
    padding-top:20px;
    width:100%;
    display:flex;
    justify-content:space-between
`;

const DividerContainer = styled.div`
    padding-top:10px;
    padding-bottom:10px
`;

const DividerVerticalContainer = styled.div`
    padding-left:10vh;
    padding-right:5vh
`;

const FormContainer = styled.div`
    width:50%
`;

const ReviewContainer = styled.div`
`;


function ReviewForm(props) {
    const [value, setValue] = React.useState(1);

    const handleReviewSubmit = (formValues) =>{
        formValues.rating=value
        props.reviewSubmit(formValues)
        props.displayReviewForm(false)
    }

    return (
        <FormContainer>
            <Typography variant="h6" >
                Write a Review
            </Typography>
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
                <form onSubmit={handleSubmit} style={{paddingLeft:'3vh',paddingTop:'3vh'}}>
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
        const { reviews } = this.props;

        return (
            <MainContainer>
                <div style={{width:'50%'}}>
                    {
                        reviews && reviews.length !==0 ? reviews.map((review,index)=>(
                            <ReviewContainer key={index}>
                                <ReactStars size={20} value={review.rating} edit={false} />
                                <Typography variant="paragraph">
                                    {review.title}
                                </Typography>
                                <br/>
                                <Typography variant="caption">
                                    {review.message}
                                </Typography>
                                <DividerContainer>
                                    <Divider/>
                                </DividerContainer>
                            </ReviewContainer>
                        )):
                        <Typography variant="paragraph" >
                            No reviews yet
                        </Typography>
                    }
                </div>
                <DividerVerticalContainer>
                    <Divider orientation='vertical'/>
                </DividerVerticalContainer>
                <ReviewForm reviewSubmit={this.reviewSubmit} displayReviewForm={this.openReviewForm}/>
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
  
