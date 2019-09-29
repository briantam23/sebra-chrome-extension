import React from 'react';
import AuthHeader from './AuthHeader';
import AuthForm from './AuthForm';
import AuthLinks from './AuthLinks';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1.5%'
  },
  paperContainer: { 
    padding: theme.spacing(3, 3),
    [theme.breakpoints.down('1080')]: {
      height: '394px',
      marginTop: '-4px'
    } 
  },
  formContainer1: {
    backgroundColor: 'white'
  }
}));


const Auth = ({ pathname, history }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Paper className={classes.paperContainer}>
        <AuthHeader pathname={ pathname } />
        <div className={classes.formContainer1}>
          <AuthForm pathname={ pathname } history={ history }/>
          <AuthLinks pathname={ pathname }/>
        </div>
      </Paper>
    </div>
  );
}


export default Auth;