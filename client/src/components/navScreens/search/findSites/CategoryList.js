import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryItem from './CategoryItem';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}));


const CategoryList = () => {
  const classes = useStyles();
  const auth = useSelector(store => store.auth);

  return (
    <List className={classes.root}>
    { 
      ['Photos', 'Work', 'Vacation'].map((categoryName, idx) => (
        <Link to={`/account/${auth.address}/search-results`} className={classes.link}>
          <CategoryItem name={ categoryName } key={ idx }/>
        </Link>
      ))
    }
    </List>
  );
}


export default CategoryList;