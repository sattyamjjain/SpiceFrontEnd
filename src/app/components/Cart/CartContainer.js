/* eslint-disable no-unused-vars */
import React from "react";
import {Stepper,Button,StepLabel,Step,makeStyles,Typography,TableCell,Breadcrumbs,TableRow,Link} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import { productActions } from '../../_actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BagContainer from './BagContainer';
import AddressContainer from './AddressContainer';
import PaymentContainer from './PaymentContainer';

const MainContainer = styled.div`
    padding:40px;
    padding-top:30px;
`;

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(2),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return [{
        label:'Cart',
        path:'cart'
    },{
        label:'Address',
        path:'address'
    },{
        label:'Payment',
        path:'payment'
    }];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
            <BagContainer/>
        );
      case 1:
        return (
            <AddressContainer/>
        );
      case 2:
        return (
            <PaymentContainer/>
        );
      default:
          return null;
    }
  }
  
function CartContainer(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [product, setProduct] =  React.useState(null)
  const [state, dispatch] = React.useReducer(product, product);
  const steps = getSteps();
  const cartList = props.carts
  const productList = []

  dispatch(props.getProdById('1aea731a-ea7a-4515-ab7d-4749948584da'))

  // React.useEffect(()=>{
  //   if(cartList !== null){
  //     cartList.map(cartItem => {
  //       console.log('cartItem id',cartItem.productId)
  //       props.getProdById(cartItem.productId)
  //       .then(res=>{
  //         setProduct(res)
  //       })
  //       .catch(err=>console.log('err',err))
  //       productList.push(product)
  //     })
  //     console.log('final product list',productList)
  //   }
  // },[])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <MainContainer>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((stepItem) => (
          <Step key={stepItem.label}  children={Link} to={stepItem.path}>
            <StepLabel>{stepItem.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div style={{display:'flex',justifyContent:'flex-end',paddingRight:'5%'}} >
              <Button
                disabled={activeStep === 0}
                variant="contained"
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      </MainContainer>
  );
}

function mapState(state) {
  const { product } = state.product;
  return { product };
}

const actionCreators = {
  getProdById: productActions.getProdById,
};

const connectedCart = connect(mapState, actionCreators)(CartContainer);

export {connectedCart as CartContainer};