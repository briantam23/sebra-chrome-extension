import React from 'react';
import { useSelector } from 'react-redux';
import Balance from './Balance';
import SnippetContainer from './SnippetContainer';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    marginTop: '8px',
  }
}));


const Dashboard = ({ history }) => {
  const classes = useStyles();
  const auth = useSelector(store => store.auth);

  return (
    <Grid container className={classes.root}>
      <Balance auth={ auth }/>
      <SnippetContainer auth={ auth }/>
    </Grid>
  );
}


export default Dashboard;