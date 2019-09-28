import React from 'react';
import AuthForm from './AuthForm';
import AuthLinks from './AuthLinks';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '15px 10px',
    width: '253px'
  },
  header: {
    fontWeight: '240',
    fontSize: '25px',
    margin: '0px 0px 20px 15px'
  },
  formContainer1: {
    backgroundColor: 'white'
  }
}));


const Auth = ({ pathname, params, history }) => {
  const { recipientAddress, itemUrl } = params;
  const classes = useStyles();
 
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" align="left" className={classes.header}>
        { pathname.slice(0, 6) === '/login' ? 'Login.' : 'Create your account.' }  
      </Typography>
      <div className={classes.formContainer1}>
        <AuthForm
          pathname={ pathname } 
          history={ history }
          recipientAddress={ recipientAddress }
          itemUrl={ itemUrl }
        />
        <AuthLinks 
          pathname={ pathname } 
          recipientAddress={ recipientAddress }
          itemUrl={ itemUrl }
        />
      </div>
    </div>
  );
}


export default Auth;