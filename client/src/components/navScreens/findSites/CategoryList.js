import React from 'react';
import CategoryItem from './CategoryItem';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));


const CategoryList = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    { 
        ['Photos', 'Work', 'Vacation'].map((categoryName, idx) => (
            <CategoryItem name={ categoryName } key={ idx }/>
        ))
    }
    </List>
  );
}


export default CategoryList;