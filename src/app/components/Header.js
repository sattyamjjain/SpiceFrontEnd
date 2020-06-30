/* eslint-disable no-sequences */
import React from "react";
import styled from 'styled-components';
import {AppBar,Modal,Toolbar,Button,Popper,Grow,Paper,ClickAwayListener,MenuList,MenuItem} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthContainer from './Auth/AuthContainer';

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
}));

export default function Header () {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [visibleActionPopup, setVisibleActionPopup] = React.useState(null);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const authBody = (
    <div style={modalStyle} className={classes.paper}>
      <AuthContainer/>
    </div>
  );

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
    setVisibleActionPopup(AUTH)
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
            <Button color="inherit">Home</Button>
            <Button color="inherit">About Us</Button>
            <div>
              <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                color="inherit"
                onClick={handleToggle}
              >
                Products
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem ><Link to="/product">Haldi</Link></MenuItem>
                          <MenuItem onClick={handleClose}>Mirch</MenuItem>
                          <MenuItem onClick={handleClose}>Khatai</MenuItem>
                          <MenuItem onClick={handleClose}>Garam Masala</MenuItem>
                          <MenuItem onClick={handleClose}>Jeera</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
            <Button color="primary"><Link to="/contactUs">Contact Us</Link></Button>
            <Button color="inherit" onClick={()=>onActionClickHandler(AUTH)}>Login</Button>
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
