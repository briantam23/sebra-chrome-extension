import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    headerContainer: {
        width: '100%',
        maxWidth: 500,
        margin: '20px 0px'
    },
    header1: {
        marginLeft: '8px',
        [theme.breakpoints.down('1080')]: {
          margin: '-13px 0px',
          fontSize: '50px'
        }
    },
    header2: {
        margin: '45px 0px 45px 13px',
        fontWeight: 250,
        [theme.breakpoints.down('1080')]: {
          margin: '45px 0px -13px 5px',
          fontWeight: '240',
          fontSize: '25px'
        }
    }
}))

const AuthHeader = ({ pathname }) => {
    const classes = useStyles();

    return(
        <div className={classes.headerContainer}>
          <Typography variant="h2" align="left" className={classes.header1}>Welcome to Sebra!</Typography>
          <Typography variant="h5" align="left" className={classes.header2}>
            { pathname.slice(0, 6) === '/login' ? 'Login.' : 'Create your account.' }  
          </Typography>
        </div>
    )
}


export default AuthHeader;