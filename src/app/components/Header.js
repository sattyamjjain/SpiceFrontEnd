/* eslint-disable no-sequences */
import React from "react";
import styled from 'styled-components';
import {AppBar,Toolbar,Button,Popper,Grow,Paper,ClickAwayListener,MenuList,MenuItem} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'

const HeaderMainContainer = styled.div`
`;

const NotificationContainer = styled.div`
  height:40px;
  background-color:yellow;
`;

const HeaderContainer = styled.div`
  background-color:red;
`;

export default function Header () {
  const [open, setOpen] = React.useState(false);
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

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <HeaderMainContainer>
      <NotificationContainer>
        Notification
      </NotificationContainer>
      <HeaderContainer>
        <AppBar position="static">
          <Toolbar style={{backgroundColor:'#EE6622',align:'right'}}>
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
                          <MenuItem onClick={handleClose}>Haldi</MenuItem>
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
            <Button color="inherit">Contact Us</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
          </Toolbar>
        </AppBar>
      </HeaderContainer>
    </HeaderMainContainer>
  );
};

// export default Header;