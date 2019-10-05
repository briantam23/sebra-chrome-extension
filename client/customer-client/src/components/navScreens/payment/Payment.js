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


const Payment = ({ pathname, history }) => {
  const classes = useStyles();
  pathname = pathname.slice(8, 26);
  
  return (
    <div className={classes.mainContainer}>
      <Header heading='Sebra'/>
      <PaperContainer pathname={ pathname } history={ history }/>
    </div>
  );
}


export default Payment;