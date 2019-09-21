import React, { useState } from 'react';
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
    width: '253px'
  }
});


const Nav = ({ pathname, history }) => {
  const classes = useStyles();

  const [value, setValue] = useState('payment');
  const auth = useSelector(store => store.auth);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    if(newValue === 'payment') history.push(`/account/${auth.address}/payment`);
    else if(newValue === 'search') history.push(`/account/${auth.address}/search`);
    else if(newValue === 'participatingSites') history.push(`/account/${auth.address}/search-results`);
    else history.push(`/account/${auth.address}/settings`);
  }

  if(!auth.address || pathname === '/') return null;
  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Payment" value="payment" icon={<PaymentIcon />} />
      <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Participating Sites" value="participatingSites" icon={<FolderOpenIcon />} />
      <BottomNavigationAction label="Settings" value="settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}


export default Nav;