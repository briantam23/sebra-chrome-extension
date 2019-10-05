/* global chrome */

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
    const [itemUrl, setItemUrl] = useState(null);

    const { username, password, loading, showPassword } = state;

    useEffect(() => {
      if(chrome.storage) {
        chrome.storage.local.get(['itemUrl'], items => setItemUrl(items.itemUrl));
      }
    }, [])

    useEffect(() => setState({
      username: '',
      password: '',
      error: ''
     }), [pathname])

    const handleChange = id => e => setState({ ...state, [id]: e.target.value });
  
    const handleClick = () => {
      setState({ ...state, loading: true });
      
      if(pathname.slice(0, 6) === '/login') {
        dispatch(login(username, password, null, itemUrl, history))
          .then(() => setState({ ...state, loading: false }))
          .catch(() => setState({ ...state, loading: false, error: 'Invalid credentials! Please try again.'}))
      }
      else {
        dispatch(createUser(username, password))
          .then(() => dispatch(login(username, password, null, itemUrl, history)))
          .then(() => setState({ ...state, loading: false }))
          .catch(() => setState({ ...state, loading: false, error: 'Username taken! Please try again.'}))
      }
    }

    const handleClickShowPassword = () => setState({ ...state, showPassword: !showPassword });
    
    return(
      <form className={classes.formContainer2} noValidate autoComplete="off">
        { loading ? <Spinner/> : null }
        <AuthInput 
          { ...state }
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