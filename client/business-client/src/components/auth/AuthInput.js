import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


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
    visibilityIcon: { top: '-2px' },
    error: {
        margin: '2px 0px -14px 8px',
        [theme.breakpoints.down('1080')]: { 
            margin: '0px 0px -12px -2px'
        }
    }
}))


const AuthInput = ({ state, handleChange, handleClickShowPassword }) => {
  const classes = useStyles();
  const handleMouseDownPassword = e => e.preventDefault();

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
                type={state.showPassword ? 'text' : 'password'}
                label="Password"
                className={classes.textField}
                value={state.password}
                onChange={handleChange('password')}
                margin="normal"
                inputProps={{ style: { height: '6px' } }} 
                InputLabelProps={{ style: { top: '-9px' }}}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                className={classes.visibilityIcon}
                                edge="end"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </FormControl> 
    </Fragment>
  )
}


export default AuthInput;