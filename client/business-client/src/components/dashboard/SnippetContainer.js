import React, { useState } from 'react';
import SnippetInput from './SnippetInput';
import Snippet from './Snippet';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
    rightContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        width: '50%',
        [theme.breakpoints.down('1080')]: { marginRight: '40px' } 
    },
    paperRightContainer: {
        padding: theme.spacing(3, 3),
        backgroundColor: 'rgba(250,250,250)',
        height: '230px',
        marginTop: '100px',
        [theme.breakpoints.down('1080')]: {
          height: '180px',
          width: '380px',
          marginTop: '-4px'
        }  
    }
}))

const SnippetContainer = () => {
  const classes = useStyles();

  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleChange = () => e => {
    setAmount(e.target.value);
    isNaN(Number(e.target.value)) ? setError('Not a valid amount.') : setError('');
  }

  return (
    <Grid item xs className={classes.rightContainer}>
        <Paper className={classes.paperRightContainer}>
          <FormControl className={classes.formControl} error>
            <SnippetInput amount={ amount } error={ error } handleChange={ handleChange }/>
            <Snippet amount={ amount } error={ error }/>
          </FormControl>
        </Paper>
      </Grid>
  );
}


export default SnippetContainer;