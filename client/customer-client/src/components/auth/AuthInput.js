import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



const useStyles = makeStyles(theme => ({
  formControl: {
      width: '227px'
  },
  textField: {
      marginLeft: '15px',
      width: '100%'
  },
  error: {
      marginLeft: '15px',
      marginBottom: '-5px',
      marginTop: '-7px'
  }
}));

const inputStyle = {
  fontSize: '13px',
  height: '3px'
}
const inputLabelStyle = {
  fontSize: '13px',
  top: '1px',
  height: '3px'
}

const CustomTextField = ({ InputLabelProps = {}, ...props }) => (
  <TextField InputLabelProps={{ ...InputLabelProps, shrink: true }} {...props} />
)

const AuthInput = ({ state, handleChange, handleClickShowPassword }) => {
  const classes = useStyles();
  const handleMouseDownPassword = e => e.preventDefault();
  
  return(
    <Fragment>
      <FormControl className={classes.formControl} error>
        {
          state.error 
            ? <FormHelperText className={classes.error}>{state.error}</FormHelperText>  
            : null
        }
        <CustomTextField
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
      </FormControl>
      <FormControl className={classes.formControl}>
        <CustomTextField
          required
          fullWidth
          id="password"
          type={state.showPassword ? 'text' : 'password'}
          label="Password"
          className={classes.textField}
          value={state.password}
          onChange={handleChange('password')}
          margin="normal"
          variant="outlined"
          inputProps={{ style: inputStyle }} 
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
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
          InputLabelProps={{ style: inputLabelStyle }}
        />
      </FormControl>
    </Fragment>
  )
}


export default AuthInput;