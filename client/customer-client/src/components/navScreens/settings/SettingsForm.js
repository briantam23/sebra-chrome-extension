import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../store/actions/users';
import Spinner from '../../shared/spinner/Spinner';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    formControl: {
        width: '227px',
        margin: '7px 0px -15px'
    },
    error: {
      marginLeft: '15px',
      marginBottom: '-12px',
      marginTop: '1px',
      fontSize: '10.75px'
    },
    textField: {
        marginLeft: '12px',
        width: '100%'
    },
    updateButton: {
      fontSize: '11px',
      maxWidth: '230px',
      minWidth: '230px',
      maxHeight: '30px',
      minHeight: '30px',
      padding: '0px',
      margin: 'auto'
    },
    faqButton: {
      backgroundColor: 'black',
      color: 'white',
      fontSize: '11px',
      maxWidth: '230px',
      minWidth: '230px',
      maxHeight: '30px',
      minHeight: '30px',
      padding: '0px',
      margin: '-8px auto auto'
    }
}));

const inputStyle = {
    fontSize: '13px',
    height: '0px'
  }
const inputLabelStyle = {
    fontSize: '13px',
    top: '-6px'
}

const SettingsForm = ({ history }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [state, setState] = useState({
      password: '',
      confirmPassword: '',
      error: '',
      loading: false
    })
    
    const handleChange = id => e => setState({ ...state, [id]: e.target.value });

    const handleUpdateClick = () => {
      const { password, confirmPassword } = state;
      
      if(password !== confirmPassword) {
        return setState({ ...state, error: 'Passwords must match! Please try again.'})
      }
      
      setState({ ...state, loading: true });
      
      dispatch(updateUser(state))
        .then(() => setState({ ...state, loading: false }))
        .catch(() => setState({ ...state, loading: false, error: 'Invalid password! Please try again.'}))
    }

    const handleFaqClick = () => history.push(`/account/faq`);

    return(
        <Fragment>
          { state.loading ? <Spinner/> : null }
          <FormControl className={classes.formControl} error>
            {
              state.error 
              ? <FormHelperText className={classes.error}>{state.error}</FormHelperText>  
              : null
            }
            <TextField
              required
              fullWidth
              id="password"
              type='password'
              label="Password"
              className={classes.textField}
              value={state.password}
              onChange={handleChange('password')}
              margin="normal"
              variant="filled"
              inputProps={{ style: inputStyle }} 
              InputLabelProps={{ style: inputLabelStyle }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              required
              fullWidth
              id="confirmPassword"
              type='password'
              label="Confirm Password"
              className={classes.textField}
              value={state.confirmPassword}
              onChange={handleChange('confirmPassword')}
              margin="normal"
              variant="filled"
              inputProps={{ style: inputStyle }} 
              InputLabelProps={{ style: inputLabelStyle }}
            />
          </FormControl>
          <Button onClick={handleUpdateClick} className={classes.updateButton} color='primary' variant='contained'>Update</Button>
          <Button onClick={handleFaqClick} className={classes.faqButton} variant='contained'>FAQ</Button>
        </Fragment>
    )
}


export default SettingsForm;