/* eslint-disable no-unused-vars */
import React from "react";
import styled from 'styled-components';
import {AppBar,Modal,Toolbar,ListItemIcon,ListItemText,Button,MenuItem,Menu} from '@material-ui/core'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {
  Link
} from "react-router-dom";
import Ticker from 'react-ticker'
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthContainer from './Auth/AuthContainer';
import * as FeatherIcon from 'react-feather';
import {history} from '../_helpers'

const AUTH = 'auth';

const HeaderMainContainer = styled.div`
  position: fixed;
  width:100%;
  z-index:999999;
`;

const NotificationContainer = styled.div`
  height:30px;
  background-color:#FBB45F;
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

function Header (props) {
  const classes = useStyles();
  // const productList = JSON.parse(localStorage.getItem('productList'))
  const user = JSON.parse(localStorage.getItem('user'))
  const [modalStyle] = React.useState(getModalStyle);
  const [visibleActionPopup, setVisibleActionPopup] = React.useState(null);
  const [accountButton, setAccountButton] = React.useState(false);
  const [anchorProduct, setAnchorProduct] = React.useState(null);
  const [anchorAccount, setAnchorAccount] = React.useState(null);

  //console.log('productList',JSON.parse(localStorage.getItem('productList')))

  React.useEffect(() => {
    if(localStorage.getItem('user')){
      setAccountButton(true)
    }
  },[]);

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

  const handleUserLogout = () =>{
    localStorage.removeItem('user')
    localStorage.setItem('isAuthenticated',false)
    history.go(0)
  }

  const authBody = (
    <div style={modalStyle} className={classes.paper} >
      <AuthContainer handleClose={handleActionPopupClose} loginEnable={loginEnable}/>
    </div>
  );

  function loginEnable(val){
    setAccountButton(val)
  }

  function onActionClickHandler(action) {
    switch (action) {
      case AUTH:
        handleAuthAction();
        break;
      default:
        break;
    }
  }

  function handleAuthAction() {
    setVisibleActionPopup(AUTH);
  }

  function handleActionPopupClose() {
    setVisibleActionPopup(null)
  }

  return (
    <HeaderMainContainer>
      <NotificationContainer>
        <Ticker mode="chain" speed={15}>
          {({ index }) => (
            <div style={{padding:'1vh'}}>
              notification
            </div> 
          )}
        </Ticker>
      </NotificationContainer>
      <HeaderContainer>
        <AppBar position="static">
          <Toolbar style={{backgroundColor:'#EE6622',justifyContent:'flex-end'}}>
              <Button color="inherit" className={classes.button}><Link to="/" style={{color:'inherit'}}>Home</Link></Button>
              <Button color="inherit" className={classes.button}><Link to="/aboutUs" style={{color:'inherit'}}>About Us</Link></Button>
              <div>
                <Button
                  variant="text"
                  color="inherit"
                  onMouseOver={handleProductClick}
                  className={classes.button}
                >
                  Products
                </Button>
                <StyledMenu
                    anchorEl={anchorProduct}
                    keepMounted
                    open={Boolean(anchorProduct)}
                    onClose={handleProductClose}
                    style={{zIndex:'999999999'}}
                  >
                    <Link to={`/product/1aea731a-ea7a-4515-ab7d-4749948584da`} style={{color:'inherit'}} >
                      <StyledMenuItem>
                        <ListItemText primary='Haldi' />
                      </StyledMenuItem>
                    </Link>
                    <Link to={`/product/2`} style={{color:'inherit'}} >
                      <StyledMenuItem>
                        <ListItemText primary='Mirchi' />
                      </StyledMenuItem>
                    </Link>
                    <Link to={`/product/3`} style={{color:'inherit'}} >
                      <StyledMenuItem>
                        <ListItemText primary='Dhaniya' />
                      </StyledMenuItem>
                    </Link>
                    <Link to={`/product/4`} style={{color:'inherit'}} >
                      <StyledMenuItem>
                        <ListItemText primary='Khatai' />
                      </StyledMenuItem>
                    </Link>
                  </StyledMenu>
                {/* {
                  props.products && props.products.length !== 0 && (
                  <StyledMenu
                    anchorEl={anchorProduct}
                    keepMounted
                    open={Boolean(anchorProduct)}
                    onClose={handleProductClose}
                    style={{zIndex:'999999999'}}
                  >
                    {
                      props.products.map(((product,index)=>(
                        <Link to={`/product/${product.id}`} style={{color:'inherit'}} key={index}>
                          <StyledMenuItem>
                            <ListItemText primary={product.product.title} />
                          </StyledMenuItem>
                        </Link>
                      )))
                    }
                  </StyledMenu>
                )} */}
              </div>
              <Button color="inherit" className={classes.button}><Link to="/contactUs" style={{color:'inherit'}}>Contact Us</Link></Button>
              {
                !accountButton ? <Button color="inherit" className={classes.button} onClick={()=>onActionClickHandler(AUTH)}>Login</Button> : (
                  <div>
                    <Button
                      variant="text"
                      onMouseOver={handleAccountClick}
                    >
                      <FeatherIcon.User size={24} color="#FFFFFF"/>
                    </Button>
                    <StyledMenu
                      anchorEl={anchorAccount}
                      keepMounted
                      open={Boolean(anchorAccount)}
                      onClose={handleAccountClose}
                      style={{zIndex:'999999999'}}
                    >
                      <Link to={`/${user === null? '' : user.id}/profile`} style={{color:'inherit'}}>
                        <StyledMenuItem >
                            <ListItemIcon>
                              <FeatherIcon.User size={20} color="#000000"/>
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </StyledMenuItem>
                      </Link>
                      <Link to={`/${user === null? '' : user.id}/wishlist`} style={{color:'inherit'}}>
                        <StyledMenuItem>
                            <ListItemIcon>
                              <FeatherIcon.Heart size={20} color="#000000"/>
                            </ListItemIcon>
                            <ListItemText primary="Wishlist" />
                        </StyledMenuItem>
                      </Link>
                      <Link to={`/${user === null? '' : user.id}/cart`} style={{color:'inherit'}}>
                        <StyledMenuItem>
                            <ListItemIcon>
                              <FeatherIcon.Truck size={20} color="#000000"/>
                            </ListItemIcon>
                            <ListItemText primary="Your Cart" />
                        </StyledMenuItem>
                      </Link>
                      <Link to={`/${user === null? '' : user.id}/orders`} style={{color:'inherit'}}>
                        <StyledMenuItem>
                          <ListItemIcon>
                            <FeatherIcon.Truck size={20} color="#000000"/>
                          </ListItemIcon>
                          <ListItemText primary="Your orders" />
                        </StyledMenuItem>
                      </Link>
                      <StyledMenuItem onClick={handleUserLogout}>
                        <ListItemIcon>
                          <FeatherIcon.LogOut size={20} color="#000000"/>
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </StyledMenuItem>
                    </StyledMenu>
                  </div>
                )}
              {/* </div> */}
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

export {Header};

// function mapState(state) {
//   const { products } = state.product;
//   console.log('header product',products)
//   return { products };
// }

// const actionCreators = {
//   getAll:productActions.getAll
// };

// const connectedHeader = connect(mapState, actionCreators)(Header);
// export { connectedHeader as Header };
