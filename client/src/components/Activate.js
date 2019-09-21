import React from 'react';
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


const Activate = ({ history }) => {
  const classes = useStyles();
  return(
      <div className={classes.container}>
          <Typography variant="h2" className={classes.header}>Sebra</Typography>
          <Button 
            onClick={ () => history.push('/create-account') } 
            variant="contained" 
            color="primary" 
            className={classes.button}
          >
            Activate to Pay for Content
          </Button>
      </div>
  )
}


export default Activate;