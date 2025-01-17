/* eslint-disable no-unused-vars */
import React from "react";
import {Divider,makeStyles,Paper,Modal,TableHead,Typography,TableCell,Breadcrumbs,TableRow,Link,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import styled from 'styled-components';
import AddressFormContainer from './AddressFormContainer';

const ADD_ADDRESS = 'add';
const EDIT_ADDRESS = 'edit';
const DELETE_ADDRESS = 'delete';

const MainContainer = styled.div`
    display:flex;
    justify-content:center;
`;

const LeftSideContainer = styled.div`
    width:50%;
    padding:30px;
`;

const RightSideContainer = styled.div`
    width:30%;
    padding:30px;
`;

const PaddingContainer = styled.div`
    padding:5px;
`;

const DividerContainer = styled.div`
    padding-top:5px;
    padding-bottom:5px;
`;

function getModalStyle() {
    return {
      top: '55%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width:'60vh',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5]
    },
  }));

export default function  AddressContainer () {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [visibleActionPopup, setVisibleActionPopup] = React.useState(null);

    function onActionClickHandler(action) {
        switch (action) {
          case ADD_ADDRESS:
            handleAddAddressAction();
            break;
        case EDIT_ADDRESS:
            handleEditAddressAction();
            break;
        case DELETE_ADDRESS:
            handleDeleteAddressAction();
            break;
          default:
            break;
        }
      }
    
      function handleAddAddressAction() {
        setVisibleActionPopup(ADD_ADDRESS)
      }

      function handleEditAddressAction() {
        setVisibleActionPopup(EDIT_ADDRESS)
      }

      function handleDeleteAddressAction() {
        setVisibleActionPopup(DELETE_ADDRESS)
      }
    
      function handleActionPopupClose() {
        setVisibleActionPopup(null)
      }

      const addressBody = (
        <div style={modalStyle} className={classes.paper}>
          <AddressFormContainer/>
        </div>
      );
    
    return (
        <MainContainer>
            <LeftSideContainer>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="h5">
                        Select delivery address
                    </Typography>
                    <Button variant="outlined" onClick={()=>onActionClickHandler(ADD_ADDRESS)}>Add delivery address</Button>
                </div>
                <PaddingContainer/>
                <Typography variant="subtitle2">
                    DELIVERY ADDRESS
                </Typography>
                <PaddingContainer/>
                <Button style={{width:'100%'}}>
                    <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'10px',width:'100%'}}>
                        <Typography variant="subtitle2">
                            Sattyam Jain
                        </Typography>
                        <Typography variant="caption">
                            79, Sadar Bazar - Jhansi Rd, Jhansi Cantt.
                        </Typography>
                        <PaddingContainer/>
                        <Typography  variant="caption">
                            Jhansi, Uttar Pradesh - 284001
                        </Typography>
                        <PaddingContainer/>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Button variant="outlined">Remove</Button>
                            <Button variant="outlined" onClick={()=>onActionClickHandler(EDIT_ADDRESS)}>Edit</Button>
                        </div>
                    </Paper>
                </Button>
            </LeftSideContainer>
            <RightSideContainer>
                <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'20px'}}>
                    <Typography variant="h6">
                        DELIVERY ESTIMATES
                    </Typography>
                    <div style={{padding:'30px'}}>
                        <Typography variant="subtitle2">
                            Estimated delivery by 5 July, 2020
                        </Typography>
                    </div>
                    <PaddingContainer/>
                    <Typography variant="h6">
                        PRICE DETAILS
                    </Typography>
                    <div style={{padding:'30px'}}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Typography variant="subtitle2">
                                Cart Total
                            </Typography>
                            <Typography variant="subtitle2" >
                                400.00 Rs.
                            </Typography>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Typography variant="subtitle2">
                                Cart Discount
                            </Typography>
                            <Typography variant="subtitle2" >
                                60.00 Rs.
                            </Typography>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Typography variant="subtitle2">
                                Coupon Discount
                            </Typography>
                            <Typography variant="subtitle2" >
                                NA
                            </Typography>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Typography variant="subtitle2">
                                Order Total
                            </Typography>
                            <Typography variant="subtitle2" >
                                400.00 Rs.
                            </Typography>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Typography variant="subtitle2">
                                Delivery Charges
                            </Typography>
                            <Typography variant="subtitle2" >
                                <strike>40.00 Rs.</strike>
                            </Typography>
                        </div>
                        <DividerContainer>
                            <Divider />
                        </DividerContainer>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <Typography variant="h6">
                                Total
                            </Typography>
                            <Typography variant="h6" >
                                400.00 Rs.
                            </Typography>
                        </div>
                    </div>
                </Paper>
            </RightSideContainer>
            <Modal
                open={visibleActionPopup===ADD_ADDRESS}
                onClose={handleActionPopupClose}
            >
                {addressBody}
            </Modal>
            <Modal
                open={visibleActionPopup===EDIT_ADDRESS}
                onClose={handleActionPopupClose}
            >
                {addressBody}
            </Modal>
        </MainContainer>
    );
}