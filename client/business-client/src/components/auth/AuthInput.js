import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: '93%',
        [theme.breakpoints.down('1080')]: { margin: theme.spacing(1) }
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '102.5%',
        [theme.breakpoints.down('1080')]: { 
            marginLeft: '-2px',
            width: '104%' 
        }
    },
    error: {
        margin: '2px 0px -14px 8px',
        [theme.breakpoints.down('1080')]: { 
            margin: '0px 0px -12px -2px'
        }
    }
}))


const AuthInput = ({ state, handleChange }) => {
  const classes = useStyles();

  return (
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
                inputProps={{ style: { height: '6px' } }} 
                InputLabelProps={{ style: { top: '-9px' }}}
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
                inputProps={{ style: { height: '6px' } }} 
                InputLabelProps={{ style: { top: '-9px' }}}
            />
        </FormControl> 
    </Fragment>
  )
}


export default AuthInput;