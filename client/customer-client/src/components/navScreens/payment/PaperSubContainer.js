import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  paperSubContainer: {
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


const PaperSubContainer = ({ pathname }) => {
    const classes = useStyles();
    
    return(
        <div className={classes.paperSubContainer}>
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
    )
}


export default PaperSubContainer;