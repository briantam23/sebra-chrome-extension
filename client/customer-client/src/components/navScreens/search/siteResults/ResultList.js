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

const Results = ['Digital Ocean', 'Heap Analytics', 'Shopify'/* , 'Heroku' */];

const ResultList = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    { 
        Results.map((resultName, idx) => (
            <ResultItem name={ resultName } key={ idx }/>
        ))
    }
    </List>
  );
}


export default ResultList;