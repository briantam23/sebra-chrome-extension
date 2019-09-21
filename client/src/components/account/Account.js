import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ErrorSnackbar from './ErrorSnackbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    width: '253px'
  },
  header: {
    fontSize: '30px',
    fontWeight: 400,
    margin: '0px 0px 0px 15px',
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
    /* height: '225px' */
  },  
  subheader1: {
    display: 'inline-block',
    fontSize: '22px',
    fontWeight: 400,
    textAlign: 'center',
    margin: '17px 0px 0px 11px'
  },
  subheader2: {
    display: 'inline-block',
    fontSize: '18px',
    textAlign: 'center',
    margin: '22px 0px 0px 33px'
  },
  emojiContainer: {
    width: '50px',
    height: '225px',
    margin: 'auto'
  },  
  emoji: {
    display: 'inline-block',
    fontSize: '75px',
    lineHeight: '170px',
    textAlign: 'center',
    paddingTop: '7px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '17px',
    marginTop: '-22px',
    textAlign: 'right',
    marginLeft: '70%'
  },
}));


const Account = ({ pathname, params, history }) => {
  const classes = useStyles();
  const auth = useSelector(store => store.auth);
  pathname = pathname.slice(8);
  
  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.header} variant="h2" align="left">
        Sebra
      </Typography>
      <Paper className={classes.paperContainer}>
        {
          pathname !== '/completed' 
            ? (
              <Fragment>
                <div className={classes.subheaderContainer}>
                <Typography className={classes.subheader1} variant="h2">Wall Street Journal</Typography>
                  <Typography className={classes.subheader2} variant="h2">Pay ≋0.25 to read</Typography>
                </div>
                <ErrorSnackbar history={ history } params={ params }/>
              </Fragment>
            )
            : (
              <Fragment>
                <div className={classes.emojiContainer}>
                  <span className={classes.emoji} role="img" aria-label="party-popper">🎉</span>
                </div>
                <Button onClick={ () => history.push('/account')} variant="contained" color="primary" className={classes.button}>Done</Button>
              </Fragment>
            )
        }    
      </Paper>
    </div>
  );
}


export default Account;