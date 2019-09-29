import React from 'react';
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


const CategoryList = ({ filteredList }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    { 
      filteredList.map((categoryName, idx) => (
        <Link to={`/account/search-results`} className={classes.link} key={ idx }>
          <CategoryItem name={ categoryName }/>
        </Link>
      ))
    }
    </List>
  );
}


export default CategoryList;