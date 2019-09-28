import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    leftContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1%',
        width: '50%',
    },
    paperLeftContainer: { 
        padding: theme.spacing(3, 3),
        height: '325px',
        marginTop: '70px',
        [theme.breakpoints.down('1080')]: {
          height: '350px',
          marginTop: '13px'
        }  
    },
    headerContainer: {
        width: '100%',
        /* maxWidth: 500, */
        margin: '40px 0px',
        [theme.breakpoints.down('1080')]: { margin: '0px' }  
    },
    header1: {
        [theme.breakpoints.down('1080')]: { fontSize: '45px' }  
    },
    header2: {
        margin: '65px 0px',
        fontWeight: 250,
        [theme.breakpoints.down('1080')]: { 
          margin: '30px 0px 110px',
          fontSize: '22px'
        }
    },
    balanceContainer: { textAlign: 'right' },
    balance: { [theme.breakpoints.down('1080')]: { fontSize: '40px' } },
}))

const Balance = ({ auth }) => {
  const classes = useStyles();

  return (
    <Grid item xs className={classes.leftContainer}>
        <Paper className={classes.paperLeftContainer}>
        <div className={classes.headerContainer}>
            <Typography variant="h2" align="left" className={classes.header1}>{ auth.name }</Typography>
            <Typography variant="h5" align="left" className={classes.header2}>Your account balance.</Typography>
        </div>
        <div className={classes.balanceContainer}>
            <Typography className={classes.balance} variant="h2">
            { isNaN(Number(auth.accountBalance)) ? '≋' : '≋' + auth.accountBalance }
            </Typography>
        </div>
        </Paper>
    </Grid>   
  );
}


export default Balance;