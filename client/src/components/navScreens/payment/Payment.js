import React from 'react';
import PaperContainer from './PaperContainer';
import { makeStyles } from '@material-ui/core/styles';
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
  }
}));


const Payment = ({ pathname, params, history }) => {
  const classes = useStyles();
  pathname = pathname.slice(-17);

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.header} variant="h2" align="left">
        Sebra
      </Typography>
      <PaperContainer pathname={ pathname } params={ params } history={ history }/>
    </div>
  );
}


export default Payment;