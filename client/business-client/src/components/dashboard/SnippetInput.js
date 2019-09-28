import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles(theme => ({
    margin: { margin: theme.spacing(1) },
    textField: {
        /* flexBasis: 200, */
        width: '400',
        [theme.breakpoints.down('1080')]: { width: '367px' }  
    },
    error: { 
        margin: '-1px 0px -11px 8px'  
    }
}))


const SnippetInput = ({ amount, error, handleChange }) => {
  const classes = useStyles();

  return (
    <Fragment>
        <TextField
            id="amount"
            className={clsx(classes.margin, classes.textField)}
            variant="filled"
            placeholder="Enter amount for Snippet"
            value={amount}
            onChange={handleChange()}
            InputProps={{ startAdornment: <InputAdornment position="start">≋</InputAdornment> }}
        />
        {
            error 
            ? <FormHelperText className={classes.error}>{error}</FormHelperText>  
            : null
        }
    </Fragment>  
  );
}


export default SnippetInput;