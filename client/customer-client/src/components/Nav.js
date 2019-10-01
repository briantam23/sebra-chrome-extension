import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PaymentIcon from '@material-ui/icons/Payment';
import SearchIcon from '@material-ui/icons/Search';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
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
  walletButton: {
    marginLeft:'-17px'
  },
  settingsButton: {
    marginLeft:'-17px'
  }
});


const Nav = ({ pathname, history }) => {
  const classes = useStyles();

  const [value, setValue] = useState('payment');

  let _pathname = null;
  if(pathname) _pathname = pathname.split('/')[2];
  pathname = pathname.slice(0, 8)

  useEffect(() => {
    if(_pathname === 'payment') setValue('payment');
    else if(_pathname === 'payment-completed') setValue('payment');
    else if(_pathname === 'search') setValue('search');
    else if(_pathname === 'search-results') setValue('search');
    else if(_pathname === 'wallet') setValue('wallet');
    else if(_pathname === 'wallet') setValue('settings');
  }, [_pathname])

  const handleChange = (e, newValue) => {
    setValue(newValue);

    if(newValue === 'payment') history.push(`/account/payment`);
    else if(newValue === 'search') history.push(`/account/search`);
    else if(newValue === 'wallet') history.push(`/account/wallet`);
    else history.push(`/account/settings`);
  }
  
  if(pathname !== '/account') return null;
  return (
    <div className={classes.root}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.navContainer}>
        <BottomNavigationAction className={classes.paymentButton} label="Payment" value="payment" icon={<PaymentIcon fontSize="small"/>} />
        <BottomNavigationAction className={classes.searchButton} label="Search" value="search" icon={<SearchIcon fontSize="small"/>} />
        <BottomNavigationAction className={classes.walletButton} label="Wallet" value="wallet" icon={<AccountBalanceWalletIcon fontSize="small"/>} />
        <BottomNavigationAction className={classes.settingsButton} label="Settings" value="settings" icon={<SettingsIcon fontSize="small"/>} />
      </BottomNavigation>
    </div>
  );
}


export default Nav;