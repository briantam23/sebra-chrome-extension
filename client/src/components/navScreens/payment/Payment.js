import React from 'react';
import Header from '../../shared/Header';
import PaperContainer from './PaperContainer';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
    width: '253px'
  }
}));


const Payment = ({ pathname, params, history }) => {
  const classes = useStyles();
  pathname = pathname.slice(-17);

  return (
    <div className={classes.mainContainer}>
      <Header heading='Sebra'/>
      <PaperContainer pathname={ pathname } params={ params } history={ history }/>
    </div>
  );
}


export default Payment;