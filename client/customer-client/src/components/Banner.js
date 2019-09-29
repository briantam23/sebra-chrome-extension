import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    margin: '12px 15px',
    width: '261px',
    display: 'flex',
    flexDirection: 'row'
  },
  header: {
    fontSize: '30px',
    fontWeight: 400,
    marginRight: '28px',
    color: 'darkslateblue'
  },
  button: {
    fontSize: '9px',
    padding: '8px 8px'
  }
}));


const Banner = ({ params, history }) => {
  const classes = useStyles();
  const auth = useSelector(store => store.auth);
  
  let recipientUsername, itemUrl = null;
  if(params && params.itemUrl) {
    itemUrl = params.itemUrl;
    recipientUsername = params.recipientUsername;
  }

  const handleClick = () => {
    if(!auth.address) { 
      if(itemUrl) history.push(`/login/${recipientUsername}/${itemUrl}`); 
      else history.push('/login');
    }
    else if(!auth.articleGranted) {
      if(itemUrl) history.push(`/account/payment/${recipientUsername}/${itemUrl}`);
      else history.push('/account/payment');
    }
    else {
      if(itemUrl) history.push(`/account/payment-completed/${recipientUsername}/${itemUrl}`);
      else history.push('/account/payment-completed');
    }
  }
  return(
      <div className={classes.container}>
          <Typography variant="h2" className={classes.header}>Sebra</Typography>
          <Button 
            onClick={ handleClick } 
            variant="contained" 
            color="primary" 
            className={classes.button}
          >
            { !auth.address ? 'Activate to Pay for Content' : 'Start Enjoying Content' }
          </Button>
      </div>
  )
}


export default Banner;