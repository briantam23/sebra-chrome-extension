import React, { useState, useEffect, Fragment } from 'react';
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
  pathname = pathname.split('/')[2];

  useEffect(() => {
    if(pathname === 'payment-completed') setValue('payment');
    else if(pathname === 'search-results') setValue('search');
    else setValue(pathname);
  }, [pathname])

  const handleChange = (e, newValue) => {
    setValue(newValue);
    history.push(`/account/${newValue}`);
  }

  return (
    <Fragment>
    {
      pathname 
        ? <div className={classes.root}>
            <BottomNavigation value={value} onChange={handleChange} className={classes.navContainer}>
              <BottomNavigationAction className={classes.paymentButton} label="Payment" value="payment" icon={<PaymentIcon fontSize="small"/>} />
              <BottomNavigationAction className={classes.searchButton} label="Search" value="search" icon={<SearchIcon fontSize="small"/>} />
              <BottomNavigationAction className={classes.walletButton} label="Wallet" value="wallet" icon={<AccountBalanceWalletIcon fontSize="small"/>} />
              <BottomNavigationAction className={classes.settingsButton} label="Settings" value="settings" icon={<SettingsIcon fontSize="small"/>} />
            </BottomNavigation>
          </div>
        : null
    }
    </Fragment>
  );
}


export default Nav;