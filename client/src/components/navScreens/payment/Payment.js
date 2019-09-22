import React, { Fragment } from 'react';
//import { useSelector } from 'react-redux';
import ErrorSnackbar from './ErrorSnackbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    width: '253px'
  },
  header: {
    fontSize: '32px',
    fontWeight: 500,
    margin: '7px 0px -10px 15px',
    color: 'darkslateblue',
    alignSelf: 'center'
  },
  paperContainer: { 
    margin: '22px 10px 0px 10px',
    padding: theme.spacing(3, 2),
    backgroundColor: 'whitesmoke',
    height: '200px'
  },
  subheaderContainer: {
    display: 'flex',
    flexDirection: 'column'
  },  
  subheader1: {
    display: 'inline-block',
    fontSize: '22px',
    fontWeight: 400,
    textAlign: 'center',
    margin: '17px 0px 0px 0px'
  },
  subheader2: {
    display: 'inline-block',
    fontSize: '18px',
    textAlign: 'center',
    margin: '22px 0px 0px 0px'
  },
  emojiContainer: {
    margin: '0px auto -20px'
  },  
  emoji: {
    display: 'inline-block',
    fontSize: '30px',
    textAlign: 'center',
    margin: '25px 0px -20px 0px'
  }
}));


const Payment = ({ pathname, params, history }) => {
  const classes = useStyles();
  //const auth = useSelector(store => store.auth);
  pathname = pathname.slice(-17);

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.header} variant="h2" align="left">
        Sebra
      </Typography>
      <Paper className={classes.paperContainer}>
        <Fragment>
          <div className={classes.subheaderContainer}>
            <Typography className={classes.subheader1} variant="h2">
              { pathname !== '/payment-complete' ? 'Wall Street Journal' : 'Paid with Libra!' }
            </Typography>
            {
              pathname !== '/payment-complete' 
                ? <Typography className={classes.subheader2} variant="h2">Pay ≋0.25 to read</Typography>
                : <div className={classes.emojiContainer}>
                    <span className={classes.emoji} role="img" aria-label="party-popper">🎉</span>
                  </div>
            }
          </div>
          <ErrorSnackbar pathname={ pathname } history={ history } params={ params }/>
        </Fragment>
      </Paper>
    </div>
  );
}


export default Payment;