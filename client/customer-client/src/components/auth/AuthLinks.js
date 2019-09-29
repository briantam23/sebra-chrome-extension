import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    linkParent: {
      margin: '5px 0px 0px'
    },
    linkChild: {
      textDecoration: 'none',
      marginTop: '20px',
      marginLeft: '16px',
      fontSize: '12px'
    }
}));

const AuthLinks = ({ pathname, recipientAddress, itemUrl }) => {
    const classes = useStyles();
    return(
        <Typography className={classes.linkParent} variant="body2" align="left">
          {
            pathname.slice(0, 6) === '/login' 
              ? <Link to={`/create-account/${recipientAddress}/${itemUrl}`} className={classes.linkChild}>
                  New to Sebra? Create your account here.
                </Link>
              : <Link to={`/login/${recipientAddress}/${itemUrl}`} className={classes.linkChild}>
                  Have an account? Log in here.
                </Link>
          }
        </Typography> 
    )
}


export default AuthLinks;