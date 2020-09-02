/* eslint-disable no-unused-vars */
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import * as FeatherIcon from 'react-feather';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ProductContainer from './ProductContainer';
import {UserContainer} from './UserContainer';
import DashboardContainer from './DashboardContainer';
import OrderContainer from './OrderContainer';
import ReviewContainer from './ReviewContainer';
import PaymentContainer from './PaymentContainer';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AdminPanelContainer() {
  const classes = useStyles();
  const theme = useTheme();
  const [openPanel,setOpenPanel] = React.useState('dashboard')
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlePanel = (val) => {
    setOpenPanel(val);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <FeatherIcon.Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Shukla Masala Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <FeatherIcon.ChevronRight /> : <FeatherIcon.ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button onClick={()=>handlePanel('dashboard')}>
              <ListItemIcon><FeatherIcon.Monitor /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={()=>handlePanel('orders')}>
              <ListItemIcon><FeatherIcon.Book /></ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button onClick={()=>handlePanel('products')}>
              <ListItemIcon><FeatherIcon.Tag /></ListItemIcon>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button onClick={()=>handlePanel('users')}>
              <ListItemIcon><FeatherIcon.Users /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={()=>handlePanel('reviews')}>
            <ListItemIcon><FeatherIcon.Bookmark /></ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItem>
          <ListItem button onClick={()=>handlePanel('payments')}>
            <ListItemIcon><FeatherIcon.CreditCard /></ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          openPanel==='dashboard'?<DashboardContainer/>: 
          (openPanel==='orders' ? <OrderContainer />: 
          (openPanel==='products'? <ProductContainer /> :
          (openPanel==='users'?<UserContainer/>:
          (openPanel==='reviews'?<ReviewContainer/>:
          (openPanel==='payments'?<PaymentContainer/>:null)))))
        }
      </main>
    </div>
  );
}