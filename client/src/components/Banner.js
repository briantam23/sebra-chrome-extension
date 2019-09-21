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


const Banner = ({ history }) => {
  const classes = useStyles();
  const auth = useSelector(store => store.auth);
  const handleClick = () => {
    !auth.address ? history.push('/create-account') : history.push(`/account/${auth.address}`)
  }
  return(
      <div className={classes.container}>
          <Typography variant="h2" className={classes.header}>Sebra</Typography>
          <Button 
            onClick={ () => handleClick() } 
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