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



const ResultList = ({ results, selectedIdx, handleListItemClick }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    { 
        results.map((resultName, idx) => (
            <ResultItem 
              name={ resultName } 
              idx={ idx } 
              selectedIdx={ selectedIdx }
              handleListItemClick={ handleListItemClick }
              key={ idx }
            />
        ))
    }
    </List>
  );
}


export default ResultList;