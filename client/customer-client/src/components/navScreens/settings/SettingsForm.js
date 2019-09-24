import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    formControl: {
        width: '227px'
    },
    textField: {
        marginLeft: '12px',
        width: '100%'
    },
    updateButton: {
      fontSize: '9px',
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
      fontSize: '9px',
      maxWidth: '230px',
      minWidth: '230px',
      maxHeight: '30px',
      minHeight: '30px',
      padding: '0px',
      margin: 'auto'
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

const SettingsForm = () => {
    const classes = useStyles();

    const [state, setState] = useState({
        username: '',
        password: ''
    })
    
    const handleChange = id => e => setState({ ...state, [id]: e.target.value });

    return(
        <Fragment>
          <FormControl className={classes.formControl}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              className={classes.textField}
              value={state.username}
              onChange={handleChange('username')}
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
              id="password"
              type='password'
              label="Password"
              className={classes.textField}
              value={state.lastName}
              onChange={handleChange('password')}
              margin="normal"
              variant="filled"
              inputProps={{ style: inputStyle }} 
              InputLabelProps={{ style: inputLabelStyle }}
            />
          </FormControl>
          <Button className={classes.updateButton} color='primary' variant='contained'>Update</Button>
          <Button className={classes.faqButton} variant='contained'>FAQ</Button>
        </Fragment>
    )
}


export default SettingsForm;