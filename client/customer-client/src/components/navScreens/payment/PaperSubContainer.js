import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  paperSubContainer: {
    display: 'flex',
    flexDirection: 'column'
  },  
  subheader1a: {
    display: 'inline-block',
    fontSize: '22px',
    fontWeight: 400,
    textAlign: 'center',
    margin: '17px 0px 0px 0px'
  },
  subheader1b: {
    display: 'inline-block',
    fontSize: '19px',
    fontWeight: 400,
    textAlign: 'center',
    margin: '17px 0px 3px 0px'
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
  },
  /* emptyContainer: {
    margin: '0px auto 18px'
  },  */
}));


const PaperSubContainer = ({ pathname }) => {
    const classes = useStyles();
    return(
        <div className={classes.paperSubContainer}>
        {  
          pathname === '/payment-completed' 
            ? <Fragment>
                <Typography className={classes.subheader1a} variant="h2">Paid with Libra!</Typography>
                <div className={classes.emojiContainer}>
                  <span className={classes.emoji} role="img" aria-label="party-popper">🎉</span>
                </div>
              </Fragment>
            : <Fragment>
                <Typography className={classes.subheader1a} variant="h2">Pay with Libra</Typography>
                <Typography className={classes.subheader2} variant="h2">≋0.25 to read</Typography>
              </Fragment>         
                /*<Fragment>
                    <Typography className={classes.subheader1b} variant="h2">Find Participating Sites</Typography>
                    <div className={classes.emojiContainer}>
                      <span className={classes.emoji} role="img" aria-label="search">🔍</span>
                    </div>
                  </Fragment> */
        }
        </div>
    )
}


export default PaperSubContainer;