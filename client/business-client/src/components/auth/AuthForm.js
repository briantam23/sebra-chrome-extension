import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthInput from './AuthInput';
import { login } from '../../store/actions/auth';
import { createUser } from '../../store/actions/users';
import Spinner from '../spinner/Spinner';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    formContainer2: {
        display: 'flex',
        flexDirection: 'column'
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    },
    button: {
        textAlign: 'right',
        marginTop: '41px',
        marginLeft: '77%',
        marginRight: '7px',
        fontSize: '17px',
        padding: '7px 14px',
        [theme.breakpoints.down('1080')]: {
          marginLeft: '79%',
          marginBottom: '7px',
          fontSize: '13px'
        }
    }
}))

const AuthForm = ({ pathname, history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: '',
    password: '',
    loading: false,
    error: '',
    showPassword: false
  });

  useEffect(() => setState({ 
    username: '',
    password: '',
    error: ''
  }), [pathname])

  const handleChange = id => e => setState({ ...state, [id]: e.target.value });

  const handleClick = () => {

    if(pathname.slice(0, 6) === '/login') {
      setState({ ...state, loading: true });
      dispatch(login(state, history))
        .then(() => setState({ ...state, loading: false }))
        .catch(() => setState({ ...state, loading: false, error: 'Invalid credentials! Please try again.'}))
    }
    else {
      setState({ ...state, loading: true });
      dispatch(createUser(state))
        .then(() => dispatch(login(state, history)))
        .then(() => setState({ ...state, loading: false }))
        .catch(() => setState({ ...state, loading: false, error: 'Error! Username taken. Please try again.'}))
    }
  }

  const handleClickShowPassword = () => setState({ ...state, showPassword: !state.showPassword });

  return (
    <form className={classes.formContainer2} noValidate autoComplete="off">
    { state.loading ? <Spinner/> : null }
      <AuthInput 
        state={ state } 
        handleChange={ handleChange }
        handleClickShowPassword={ handleClickShowPassword }
      />
      <Button 
        onClick={ handleClick } 
        variant="contained" 
        color="primary" 
        className={classes.button}
      >
        { pathname.slice(0, 6) === '/login' ? 'Login' : 'Create' }  
      </Button>
    </form>
  )
}


export default AuthForm;