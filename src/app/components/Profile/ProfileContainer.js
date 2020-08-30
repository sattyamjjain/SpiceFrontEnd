import React from "react";
import {Divider,makeStyles,Paper,Modal,Avatar,Typography,TableCell,Breadcrumbs,TableRow,Link,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import AddressFormContainer from './AddressFormContainer';

const ADD_ADDRESS = 'add';
const EDIT_ADDRESS = 'edit';
const DELETE_ADDRESS = 'delete';

const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    padding-top:5vh;
`;

const ProfilePicContainer = styled.div`
    width:30%;
    padding:5vh;
    text-align:center;
`;

const RightSideContainer = styled.div`
    width:45%;
    padding:5vh;
`;

const ProfileDataContainer = styled.div`
    width:25%;
    padding:5vh;
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
    button:{
        textTransform:'capitalize'
    },
    large: {
        width: '30vh',
        height: '30vh',
    },
  }));

export default function  ProfileContainer (props) {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [visibleActionPopup, setVisibleActionPopup] = React.useState(null);
    const { user } = props;

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

      console.log('user',user)

      const addressBody = (
        <div style={modalStyle} className={classes.paper}>
          <AddressFormContainer/>
        </div>
      );
    return (
        <MainContainer>
            <ProfilePicContainer>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Avatar alt="Remy Sharp" src={require('../images/profilePic.jpg')} className={classes.large} />
                </div>
                <Typography variant="h6">Raman</Typography>
                <Typography variant="subtitle1">ramankumar@gmail.com</Typography>
                <PaddingContainer/>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Button variant="contained" color="secondary" className={classes.button}>Change Profile Pic</Button>
                    <PaddingContainer/>
                    <Button variant="contained" color="secondary" className={classes.button}>Edit Profile</Button>
                </div>
            </ProfilePicContainer>
            <ProfileDataContainer>
                <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#000000',borderRadius:'2px',borderWidth:'1px',padding:'1vh',width:'100%'}}>
                    <div style={{padding:'30px'}}>
                        <div style={{display:'flex',justifyContent:'flex-start'}}>
                            <Typography variant="subtitle2">
                                Mobile No.  : 
                            </Typography>
                            <Typography variant="subtitle2" >
                                +91 9876543210
                            </Typography>
                        </div>
                        <PaddingContainer/>
                        <div style={{display:'flex',justifyContent:'flex-start'}}>
                            <Typography variant="subtitle2">
                                Gender  :
                            </Typography>
                            <Typography variant="subtitle2" >
                                Male
                            </Typography>
                        </div>
                        <PaddingContainer/>
                        <div style={{display:'flex',justifyContent:'flex-start'}}>
                            <Typography variant="subtitle2">
                                Date of Birth  :
                            </Typography>
                            <Typography variant="subtitle2" >
                                - not added -
                            </Typography>
                        </div>
                        <PaddingContainer/>
                        <div style={{display:'flex',justifyContent:'flex-start'}}>
                            <Typography variant="subtitle2">
                                Location  :
                            </Typography>
                            <Typography variant="subtitle2" >
                                - not added -
                            </Typography>
                        </div>
                        <PaddingContainer/>
                        <div style={{display:'flex',justifyContent:'flex-start'}}>
                            <Typography variant="subtitle2">
                                Alternate Mobile  :
                            </Typography>
                            <Typography variant="subtitle2" >
                                - not added -
                            </Typography>
                        </div>
                    </div>
                </Paper>
            </ProfileDataContainer>
            <RightSideContainer>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="h6">
                        Address
                    </Typography>
                    <Button variant="outlined" onClick={()=>onActionClickHandler(ADD_ADDRESS)} className={classes.button}>Add delivery address</Button>
                </div>
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
                            <Button variant="outlined" className={classes.button}>Remove</Button>
                            <Button variant="outlined" onClick={()=>onActionClickHandler(EDIT_ADDRESS)} className={classes.button}>Edit</Button>
                        </div>
                    </Paper>
                </Button>
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