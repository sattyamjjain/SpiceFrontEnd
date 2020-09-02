import React from "react";
import {makeStyles,Paper,Modal,Avatar,Typography,Fab,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import AddressFormContainer from './AddressFormContainer';
import EditProfileContainer from './EditProfileContainer';

const ADD_ADDRESS = 'add';
const EDIT_ADDRESS = 'edit';
const DELETE_ADDRESS = 'delete';
const EDIT_PROFILE = 'edit_profile';

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

const PaddingContainer = styled.div`
    padding:5px;
`;

function getModalStyle() {
    return {
        top: `25%`,
        margin:'auto'
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
        case EDIT_PROFILE:
            handleEditProfileAction();
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

      function handleEditProfileAction() {
        setVisibleActionPopup(EDIT_PROFILE)
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

      const editProfileBody = (
        <div style={modalStyle} className={classes.paper}>
          <EditProfileContainer/>
        </div>
      );
    return (
        <MainContainer>
            <Fab variant="round" size="small" style={{fontSize:'10px',textTransform:'capitalize',float:'right'}} onClick={()=>onActionClickHandler(EDIT_PROFILE)}>
                <FeatherIcon.Edit/>
            </Fab>
            <ProfilePicContainer>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Avatar alt="Remy Sharp" src={require('../images/profilePic.jpg')} className={classes.large} />
                </div>
                <Typography variant="h6">Raman</Typography>
                <Typography variant="subtitle1">ramankumar@gmail.com</Typography>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Mobile No.  : 
                    </Typography>
                    <Typography variant="subtitle2" >
                        +91 9876543210
                    </Typography>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Gender  :
                    </Typography>
                    <Typography variant="subtitle2" >
                        Male
                    </Typography>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Date of Birth  :
                    </Typography>
                    <Typography variant="subtitle2" >
                        20/08/1997
                    </Typography>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Location  :
                    </Typography>
                    <Typography variant="subtitle2" >
                        Jhansi
                    </Typography>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Alternate Mobile  :
                    </Typography>
                    <Typography variant="subtitle2" >
                        9876543210
                    </Typography>
                </div>
            </ProfilePicContainer>
            <RightSideContainer>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="h6">
                        Address
                    </Typography>
                    <Button variant="outlined" onClick={()=>onActionClickHandler(ADD_ADDRESS)} className={classes.button}>Add delivery address</Button>
                </div>
                <PaddingContainer/>
                <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'10px',width:'100%',textAlign:'center'}}>
                    <Typography variant="subtitle2">
                        Sattyam Jain
                    </Typography>
                    <Typography variant="caption">
                        79, Sadar Bazar - Jhansi Rd, Jhansi Cantt.
                    </Typography>
                    <br/>
                    <Typography  variant="caption">
                        Jhansi, Uttar Pradesh - 284001
                    </Typography>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Button variant="outlined" className={classes.button}>Remove</Button>
                        <Button variant="outlined" onClick={()=>onActionClickHandler(EDIT_ADDRESS)} className={classes.button}>Edit</Button>
                    </div>
                </Paper>
            </RightSideContainer>
            <Modal
                open={visibleActionPopup===ADD_ADDRESS}
                onClose={handleActionPopupClose}
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
                {addressBody}
            </Modal>
            <Modal
                open={visibleActionPopup===EDIT_ADDRESS}
                onClose={handleActionPopupClose}
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
                {addressBody}
            </Modal>
            <Modal
                open={visibleActionPopup===EDIT_PROFILE}
                onClose={handleActionPopupClose}
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
                {editProfileBody}
            </Modal>
        </MainContainer>
    );
}