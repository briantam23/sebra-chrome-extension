import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    link: {
      textDecoration: 'none',
      marginLeft: '19px',
      [theme.breakpoints.down('1080')]: {
        marginTop: '20px',
        marginLeft: '8px',
        fontSize: '12px',
      }
    }
}));


const AuthLinks = ({ pathname, recipientAddress, chargeAmount }) => {
    const classes = useStyles();
    return(
        <Fragment>
            { 
            pathname.slice(0, 6) === '/login' 
            ? <Typography variant="body2" align="left">
                <Link to={`/create-account/${recipientAddress}/${chargeAmount}`} className={classes.link}>
                    New to Sebra? Create your account here.
                </Link>
                </Typography> 
            : <Typography variant="body2" align="left">
                <Link to={`/login/${recipientAddress}/${chargeAmount}`} className={classes.link}>
                    Have an account? Log in here.
                </Link>
                </Typography> 
            }
        </Fragment>
    )
}


export default AuthLinks;