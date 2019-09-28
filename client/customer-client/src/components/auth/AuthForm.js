import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Spinner from '../shared/Spinner';
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


const AuthForm = ({ pathname, params, history, recipientAddress, chargeAmount }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [state, setState] = useState({
      username: '',
      password: '',
      loading: false,
      error: ''
    });
  
    const handleChange = id => e => setState({ ...state, [id]: e.target.value });
  
    const handleClick = () => {
      setState({ ...state, loading: true });
      
      if(pathname.slice(0, 6) === '/login') {
        dispatch(login(state, params, history))
          .then(() => setState({ ...state, loading: false }))
          .catch(() => setState({ ...state, loading: false, error: 'Invalid credentials! Please try again.'}))
      }
      else {
        dispatch(createUser(state))
          .then(() => dispatch(login(state, params, history)))
          .then(() => setState({ ...state, loading: false }))
          .catch(() => setState({ ...state, loading: false, error: 'Error! Username taken. Please try again.'}))
      }
    }
    return(
      <form className={classes.formContainer2} noValidate autoComplete="off">
        { state.loading ? <Spinner/> : null }
        <AuthInput state={ state } handleChange={ handleChange }/>
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