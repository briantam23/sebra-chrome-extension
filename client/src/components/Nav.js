import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PaymentIcon from '@material-ui/icons/Payment';
import SearchIcon from '@material-ui/icons/Search';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SettingsIcon from '@material-ui/icons/Settings';


const useStyles = makeStyles({
  root: {
    /* width: '243px' */
  },
  navContainer: {
    width: '233px',
    height: '42px'
  },
  paymentButton: {
    marginLeft:'20px'
  },
  searchButton: {
    marginLeft:'-17px'
  },
  resultsButton: {
    marginLeft:'-17px'
  },
  settingsButton: {
    marginLeft:'-17px'
  }
});


const Nav = ({ pathname, history }) => {
  const classes = useStyles();

  const [value, setValue] = useState('payment');
  const auth = useSelector(store => store.auth);

  useEffect(() => setValue('payment'), [auth]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    if(newValue === 'payment') history.push(`/account/${auth.address}/payment`);
    else if(newValue === 'search') history.push(`/account/${auth.address}/search`);
    else if(newValue === 'participatingSites') history.push(`/account/${auth.address}/search-results`);
    else history.push(`/account/${auth.address}/settings`);
  }

  if(!auth.address || pathname === '/') return null;
  return (
    <div className={classes.root}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.navContainer}>
        <BottomNavigationAction className={classes.paymentButton} label="Payment" value="payment" icon={<PaymentIcon fontSize="small"/>} />
        <BottomNavigationAction className={classes.searchButton} label="Search" value="search" icon={<SearchIcon fontSize="small"/>} />
        <BottomNavigationAction className={classes.resultsButton} label="Results" value="participatingSites" icon={<FolderOpenIcon fontSize="small"/>} />
        <BottomNavigationAction className={classes.settingsButton} label="Settings" value="settings" icon={<SettingsIcon fontSize="small"/>} />
      </BottomNavigation>
    </div>
  );
}


export default Nav;