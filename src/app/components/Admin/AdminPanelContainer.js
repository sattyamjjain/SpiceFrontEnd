/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import * as FeatherIcon from 'react-feather';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {ProductContainer} from './ProductContainer';
import {UserContainer} from './UserContainer';
import {DashboardContainer} from './DashboardContainer';
import {OrderContainer} from './OrderContainer';
import {ReviewContainer} from './ReviewContainer';
import {PaymentContainer} from './PaymentContainer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(2),
  },
}));

export default function AdminPanelContainer() {
  const classes = useStyles();
  const theme = useTheme();
  const [openPanel,setOpenPanel] = React.useState('dashboard')

  const handlePanel = (val) => {
    setOpenPanel(val);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Shukla Masala Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
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
              <ListItem button onClick={()=>handlePanel('reviews')}>
                <ListItemIcon><FeatherIcon.Bookmark /></ListItemIcon>
                <ListItemText primary="Reviews" />
              </ListItem>
              <ListItem button onClick={()=>handlePanel('payments')}>
                <ListItemIcon><FeatherIcon.CreditCard /></ListItemIcon>
                <ListItemText primary="Payments" />
              </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
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