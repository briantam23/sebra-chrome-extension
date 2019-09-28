import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Spinner from '../shared/spinner/Spinner';
import AuthInput from './AuthInput';

import { login } from '../../store/actions/auth';
import { createUser } from '../../store/actions/users';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    formContainer2: {
      display: 'flex',
      flexDirection: 'column'
    },
    button: {
      margin: '9px 0px 5px 14px',
      fontSize: '12px',
      width: '229px'
    }
}));


const AuthForm = ({ pathname, history, recipientAddress, itemUrl }) => {
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
      setState({ ...state, loading: true });
      
      if(pathname.slice(0, 6) === '/login') {
        dispatch(login(state, recipientAddress, itemUrl, history))
          .then(() => setState({ ...state, loading: false }))
          .catch(() => setState({ ...state, loading: false, error: 'Invalid credentials! Please try again.'}))
      }
      else {
        dispatch(createUser(state))
          .then(() => dispatch(login(state, recipientAddress, itemUrl, history)))
          .then(() => setState({ ...state, loading: false }))
          .catch(() => setState({ ...state, loading: false, error: 'Username taken! Please try again.'}))
      }
    }

    const handleClickShowPassword = () => setState({ ...state, showPassword: !state.showPassword });
    return(
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