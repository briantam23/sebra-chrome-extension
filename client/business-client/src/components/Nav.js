import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  nav: {
    [theme.breakpoints.down('1080')]: {
      marginTop: '-8px',
      minHeight: '55px'
    }
  },
  title: { 
    flexGrow: 1,
    fontSize: '27px',
    [theme.breakpoints.down('1080')]: {
      marginTop: '8px',
      fontSize: '18px'
    } 
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  button: {
    [theme.breakpoints.down('1080')]: {
      fontSize: '12px',
      margin: '9px -9px 0px 0px'
    } 
  }
}));

const Nav = ({ pathname, history }) => {

  const classes = useStyles();
  const auth = useSelector(store => store.auth);
  const dispatch = useDispatch();

  if(pathname === '/') auth.username ? history.push('/dashboard') : history.push('/login'); 

  const handleClick = () => {
    if(auth.username) dispatch(logout(history));
    else history.push('/login');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.nav}>
          <Typography variant="h6" className={classes.title}>
          <Link to={ auth.username ? '/dashboard' : '/login' } className={classes.link}>
            Sebra
          </Link>
          </Typography>
          <Button className={classes.button} onClick={ handleClick } color="inherit">
            { auth.username ? 'Logout' : 'Login' }
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default Nav;