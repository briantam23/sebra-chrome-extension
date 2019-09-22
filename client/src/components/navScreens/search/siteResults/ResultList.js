import React from 'react';
import ResultItem from './ResultItem';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));


const ResultList = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    { 
        ['Digital Ocean', 'Heap Analytics', 'Shopify'].map((resultName, idx) => (
            <ResultItem name={ resultName } key={ idx }/>
        ))
    }
    </List>
  );
}


export default ResultList;