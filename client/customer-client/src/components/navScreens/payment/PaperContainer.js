import React, { Fragment } from 'react';
import PaperSubContainer from './PaperSubContainer';
import ErrorSnackbar from './ErrorSnackbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  paperContainer: { 
    margin: '22px 10px 0px 10px',
    padding: theme.spacing(3, 2),
    backgroundColor: 'whitesmoke',
    height: '200px'
  }
}));


const PaperContainer = ({ pathname, history }) => {
  const classes = useStyles();
  return(
    <Paper className={classes.paperContainer}>
      <Fragment>
        <PaperSubContainer pathname={ pathname }/>
        <ErrorSnackbar pathname={ pathname } history={ history }/>
      </Fragment>
    </Paper>
  )
}


export default PaperContainer;