import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/auth';
import { createUser } from '../store/actions/users';
import Loading from './Loading';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '15px 10px',
    width: '253px'
  },
  header: {
    fontWeight: '240',
    fontSize: '25px',
    margin: '0px 0px 20px 15px'
  },
  formContainer1: {
    backgroundColor: 'white'
  },
  formContainer2: {
    display: 'flex',
    flexDirection: 'column'
  },
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
  },
  button: {
    margin: '9px 0px 5px 14px',
    fontSize: '12px',
    width: '229px'
  },
  linkParent: {
    margin: '5px 0px 0px'
  },
  linkChild: {
    textDecoration: 'none',
    marginTop: '20px',
    marginLeft: '16px',
    fontSize: '12px'
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

const Auth = ({ pathname, params, history }) => {
  const { recipientAddress, chargeAmount } = params;
  const classes = useStyles();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: '',
    password: '',
    loading: false,
    error: ''
  });

  const handleChange = id => e => setState({ ...state, [id]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if(pathname.slice(0, 6) === '/login') {
      setState({ ...state, loading: true });
      dispatch(login(state, params, history))
        .then(() => setState({ ...state, loading: false }))
        .catch(() => setState({ ...state, loading: false, error: 'Invalid credentials! Please try again.'}))
    }
    else {
      setState({ ...state, loading: true });
      dispatch(createUser(state))
        .then(() => dispatch(login(state, params, history)))
        .then(() => setState({ ...state, loading: false }))
        .catch(() => setState({ ...state, loading: false, error: 'Error! Username taken. Please try again.'}))
    }
  }
  return (
    <div className={classes.mainContainer}>
      { state.loading ? <Loading/> : null }
      <Typography variant="h5" align="left" className={classes.header}>
        { pathname.slice(0, 6) === '/login' ? 'Login.' : 'Create your account.' }  
      </Typography>
      <div className={classes.formContainer1}>
        <form className={classes.formContainer2} noValidate autoComplete="off">
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
          <Button 
            onClick={ e => handleSubmit(e) } 
            variant="contained" 
            color="primary" 
            className={classes.button}
          >
            { pathname.slice(0, 6) === '/login' ? 'Login' : 'Create' }  
          </Button>
        </form>
        <Typography className={classes.linkParent} variant="body2" align="left">
          {
            pathname.slice(0, 6) === '/login' 
              ? <Link to={`/create-account/${recipientAddress}/${chargeAmount}`} className={classes.linkChild}>
                  New to Sebra? Create your account here.
                </Link>
              : <Link to={`/login/${recipientAddress}/${chargeAmount}`} className={classes.linkChild}>
                  Have an account? Log in here.
                </Link>
          }
        </Typography> 
      </div>
    </div>
  );
}


export default Auth;