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
      ['Trending Sites', 'Money', 'Productivity'].map((categoryName, idx) => (
        <Link to={`/account/${auth.address}/search-results`} className={classes.link} key={ idx }>
          <CategoryItem name={ categoryName }/>
        </Link>
      ))
    }
    </List>
  );
}


export default CategoryList;