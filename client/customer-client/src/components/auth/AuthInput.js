import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    formControl: {
        width: '227px'
    },
    textField: {
        marginLeft: '15px',
        width: '100%'
    },
    error: {
        marginLeft: '8px',
        marginBottom: '-15px',
        marginTop: '0px'
    }
}));

const inputStyle = {
    fontSize: '13px',
    height: '3px'
  }
const inputLabelStyle = {
    fontSize: '13px',
    top: '-6px'
}

const AuthInput = ({ state, handleChange }) => {
    const classes = useStyles();

    return(
        <Fragment>
          <FormControl className={classes.formControl} error>
            <TextField
              required
              autoFocus
              fullWidth
              id="username"
              label="Username"
              className={classes.textField}
              value={state.username}
              onChange={handleChange('username')}
              margin="normal"
              variant="outlined"
              inputProps={{ style: inputStyle }} 
              InputLabelProps={{ style: inputLabelStyle }}
            />
            {
              state.error 
                ? <FormHelperText className={classes.error}>{state.error}</FormHelperText>  
                : null
            }
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              required
              fullWidth
              id="password"
              type="password"
              label="Password"
              className={classes.textField}
              value={state.password}
              onChange={handleChange('password')}
              margin="normal"
              variant="outlined"
              inputProps={{ style: inputStyle }} 
              InputLabelProps={{ style: inputLabelStyle }}
            />
          </FormControl>
        </Fragment>
    )
}


export default AuthInput;