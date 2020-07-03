/* eslint-disable no-sequences */
import React from "react";
import styled from 'styled-components';
import {AppBar,Modal,Toolbar,ListItemIcon,ListItemText,Button,Popper,Grow,Paper,ClickAwayListener,MenuList,MenuItem,Menu} from '@material-ui/core'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthContainer from './Auth/AuthContainer';
import * as FeatherIcon from 'react-feather';

const AUTH = 'auth';

const HeaderMainContainer = styled.div`
`;

const NotificationContainer = styled.div`
  height:40px;
  background-color:yellow;
`;

const HeaderContainer = styled.div`
  background-color:red;
`;

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width:'100vh',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  },
  button:{
    textTransform:'capitalize',
    '&:focus':{
      oultine:'none',
      border:'none'
    }
  }
}));

const StyledMenu = withStyles((theme)=>({
  paper: {
    boxShadow: theme.shadows[5]
  },
}))((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Header () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [visibleActionPopup, setVisibleActionPopup] = React.useState(null);
  const [accountButton, setAccountButton] = React.useState(false);
  const [anchorProduct, setAnchorProduct] = React.useState(null);
  const [anchorAccount, setAnchorAccount] = React.useState(null);

  const handleProductClick = (event) => {
    setAnchorProduct(event.currentTarget);
  };

  const handleAccountClick = (event) => {
    setAnchorAccount(event.currentTarget);
  };

  const handleProductClose = () => {
    setAnchorProduct(null);
  };

  const handleAccountClose = () => {
    setAnchorAccount(null);
  };

  const authBody = (
    <div style={modalStyle} className={classes.paper}>
      <AuthContainer/>
    </div>
  );

  function onActionClickHandler(action) {
    switch (action) {
      case AUTH:
        handleLoginAction();
        break;
      default:
        break;
    }
  }

  function handleLoginAction() {
    setVisibleActionPopup(AUTH);
    setAccountButton(true);
  }

  function handleActionPopupClose() {
    setVisibleActionPopup(null)
  }

  return (
    <HeaderMainContainer>
      <NotificationContainer>
        Notification
      </NotificationContainer>
      <HeaderContainer>
        <AppBar position="static">
          <Toolbar style={{backgroundColor:'#EE6622',justifyContent:'flex-end'}}>
          <Button color="inherit" className={classes.button}><Link to="/" style={{color:'inherit'}}>Home</Link></Button>
            <Button color="inherit" className={classes.button}>About Us</Button>
            <div>
            <div>
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={handleProductClick}
                    className={classes.button}
                  >
                    Products
                  </Button>
                  <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorProduct}
                    keepMounted
                    open={Boolean(anchorProduct)}
                    onClose={handleProductClose}
                  >
                    <Link to="/product" style={{color:'inherit'}}>
                      <StyledMenuItem>
                        <ListItemText primary="Haldi" />
                      </StyledMenuItem>
                    </Link>
                    <StyledMenuItem>
                      <ListItemText primary="Mirchi" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                      <ListItemText primary="Khatai" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                      <ListItemText primary="Jeera" />
                    </StyledMenuItem>
                  </StyledMenu>
                </div>
            </div>
            <Button color="inherit" className={classes.button}><Link to="/contactUs" style={{color:'inherit'}}>Contact Us</Link></Button>
            {
              !accountButton ? <Button color="inherit" className={classes.button} onClick={()=>onActionClickHandler(AUTH)}>Login</Button> : (
                <div>
                  <Button
                    variant="text"
                    onClick={handleAccountClick}
                  >
                    <FeatherIcon.User size={28} color="#FFFFFF"/>
                  </Button>
                  <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorAccount}
                    keepMounted
                    open={Boolean(anchorAccount)}
                    onClose={handleAccountClose}
                  >
                    <Link to="/profile" style={{color:'inherit'}}>
                      <StyledMenuItem>
                          <ListItemIcon>
                            <FeatherIcon.User size={20} color="#000000"/>
                          </ListItemIcon>
                          <ListItemText primary="Profile" />
                      </StyledMenuItem>
                    </Link>
                    <Link to="/wishlist" style={{color:'inherit'}}>
                      <StyledMenuItem>
                          <ListItemIcon>
                            <FeatherIcon.Heart size={20} color="#000000"/>
                          </ListItemIcon>
                          <ListItemText primary="Wishlist" />
                      </StyledMenuItem>
                    </Link>
                    <Link to="/cart" style={{color:'inherit'}}>
                      <StyledMenuItem>
                          <ListItemIcon>
                            <FeatherIcon.Truck size={20} color="#000000"/>
                          </ListItemIcon>
                          <ListItemText primary="Your Cart" />
                      </StyledMenuItem>
                    </Link>
                    <StyledMenuItem>
                      <ListItemIcon>
                        <FeatherIcon.Truck size={20} color="#000000"/>
                      </ListItemIcon>
                      <ListItemText primary="Your orders" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                      <ListItemIcon>
                        <FeatherIcon.LogOut size={20} color="#000000"/>
                      </ListItemIcon>
                      <ListItemText primary="Logout" />
                    </StyledMenuItem>
                  </StyledMenu>
                </div>
              )}
          </Toolbar>
        </AppBar>
      </HeaderContainer>
      <Modal
        open={visibleActionPopup===AUTH}
        onClose={handleActionPopupClose}
      >
        {authBody}
      </Modal>
    </HeaderMainContainer>
  );
};
