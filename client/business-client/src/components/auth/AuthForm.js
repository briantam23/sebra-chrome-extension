import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthInput from './AuthInput';
import { login } from '../../store/actions/auth';
import { createUser } from '../../store/actions/users';
import Loading from './Loading';
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
        marginLeft: '76%',
        fontSize: '19px',
        padding: '20px 40px',
        [theme.breakpoints.down('1080')]: {
          marginTop: '20px',
          marginLeft: '80%',
          fontSize: '12px',
          padding: '8px 8px'
        }
    }
}))

const AuthForm = ({ pathname, params, history }) => {
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
    <form className={classes.formContainer2} noValidate autoComplete="off">
    { state.loading ? <Loading/> : null }
      <AuthInput state={ state } handleChange={ handleChange }/>
      <Button 
        onClick={ handleClick } 
        disabled={ !state.username || !state.password }
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