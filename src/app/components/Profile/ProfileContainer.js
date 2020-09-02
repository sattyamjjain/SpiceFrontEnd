/* eslint-disable no-unused-vars */
import React from "react";
import {makeStyles,Paper,Modal,Avatar,Typography,Fab,Button} from '@material-ui/core';
import * as FeatherIcon from 'react-feather';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import {AddressFormContainer} from './AddressFormContainer';
import {DeleteAddressContainer} from './DeleteAddressContainer';
import {EditProfileContainer} from './EditProfileContainer';

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

export function  ProfileContainer (props) {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [visibleActionPopup, setVisibleActionPopup] = React.useState(null);
    const [userData, setUserData] = React.useState('')
    const [userAddress,setUserAddress] = React.useState('');
    const { user } = props;

    function onActionClickHandler(action,data) {
        switch (action) {
          case ADD_ADDRESS:
            handleAddAddressAction();
            break;
        case EDIT_ADDRESS:
            handleEditAddressAction(data);
            break;
        case EDIT_PROFILE:
            handleEditProfileAction(data);
            break;
        case DELETE_ADDRESS:
            handleDeleteAddressAction(data);
            break;
          default:
            break;
        }
      }
    
      function handleAddAddressAction() {
        setVisibleActionPopup(ADD_ADDRESS)
      }

      function handleEditAddressAction(data) {
        setUserAddress(data)
        setVisibleActionPopup(EDIT_ADDRESS)
      }

      function handleEditProfileAction(data) {
        setUserData(data)
        setVisibleActionPopup(EDIT_PROFILE)
      }

      function handleDeleteAddressAction(data) {
        setUserAddress(data)
        setVisibleActionPopup(DELETE_ADDRESS)
      }
    
      function handleActionPopupClose() {
        setVisibleActionPopup(null)
      }

      const addAddressBody = (
        <div style={modalStyle} className={classes.paper} >
          <AddressFormContainer />
        </div>
      );

      const editAddressBody = (
        <div style={modalStyle} className={classes.paper} >
          <AddressFormContainer userAddress={userAddress} isEdit={true} handleActionPopupClose={handleActionPopupClose}/>
        </div>
      );

      const deleteAddressBody = (
        <div style={modalStyle} className={classes.paper} >
          <DeleteAddressContainer userAddress={userAddress}/>
        </div>
      );

      const editProfileBody = (
        <div style={modalStyle} className={classes.paper}>
          <EditProfileContainer userData={userData}/>
        </div>
      );
    return (
        <MainContainer>
            <Fab variant="round" size="small" style={{fontSize:'10px',textTransform:'capitalize',float:'right'}} onClick={()=>onActionClickHandler(EDIT_PROFILE,user)}>
                <FeatherIcon.Edit/>
            </Fab>
            <ProfilePicContainer>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Avatar alt="Remy Sharp" src={require('../images/profilePic.jpg')} className={classes.large} />
                </div>
                <Typography variant="h6">{typeof user==="undefined" ? '' : user.user.username}</Typography>
                <Typography variant="subtitle1">{typeof user==="undefined" ? '' : user.user.email}</Typography>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Full Name  : 
                    </Typography>
                    <Typography variant="subtitle2" >
                        {typeof user==="undefined" ? '' : user.user.fullName}
                    </Typography>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Mobile No.  : 
                    </Typography>
                    <Typography variant="subtitle2" >
                        {typeof user==="undefined" ? '' : user.user.mobile}
                    </Typography>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Gender  :
                    </Typography>
                    <Typography variant="subtitle2" >
                        {typeof user==="undefined" ? '' : user.user.firstName}
                    </Typography>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Date of Birth  :
                    </Typography>
                    <Typography variant="subtitle2" >
                        {typeof user==="undefined" ? '' : user.user.firstName}
                    </Typography>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Location  :
                    </Typography>
                    <Typography variant="subtitle2" >
                        {typeof user==="undefined" ? '' : user.user.location}
                    </Typography>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant="subtitle2">
                        Alternate Mobile  :
                    </Typography>
                    <Typography variant="subtitle2" >
                        {typeof user==="undefined" ? '' : user.user.alternateMobile}
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
                {
                    typeof user==="undefined" ? null : user.address && user.address.length!==0 && user.address.map((userAddress,index)=>(
                    <div key={index}>
                        <PaddingContainer/>
                        <Paper variant="elevation" elevation={10} style={{borderStyle:'solid',borderColor:'#F6F2F1',borderRadius:'2px',borderWidth:'1px',padding:'10px',width:'100%',textAlign:'center'}}>
                            <Typography variant="subtitle1">
                                {typeof user==="undefined" ? '' : userAddress.name}
                            </Typography>
                            <Typography variant="subtitle2">
                                {typeof user==="undefined" ? '' : userAddress.mobile}
                            </Typography>
                            <Typography variant="caption">
                                {userAddress === null ? '' : userAddress.address}
                            </Typography>
                            <br/>
                            <Typography  variant="caption">
                                {userAddress === null ? '' : userAddress.city + ' ' + userAddress.state + ' , ' + userAddress.pincode}
                            </Typography>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <Button variant="outlined" onClick={()=>onActionClickHandler(DELETE_ADDRESS,userAddress)} className={classes.button}>Remove</Button>
                                <Button variant="outlined" onClick={()=>onActionClickHandler(EDIT_ADDRESS,userAddress)} className={classes.button}>Edit</Button>
                            </div>
                        </Paper>
                    </div>
                    ))
                }
            </RightSideContainer>
            <Modal
                open={visibleActionPopup===ADD_ADDRESS}
                onClose={handleActionPopupClose}
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
                {addAddressBody}
            </Modal>
            <Modal
                open={visibleActionPopup===EDIT_ADDRESS}
                onClose={handleActionPopupClose}
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
                {editAddressBody}
            </Modal>
            <Modal
                open={visibleActionPopup===DELETE_ADDRESS}
                onClose={handleActionPopupClose}
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            >
                {deleteAddressBody}
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