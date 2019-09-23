import React, { useState, Fragment } from 'react';
import Spinner from '../../shared/Spinner';
import Buttons from './Buttons';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const variantIcon = { success: CheckCircleIcon, error: ErrorIcon };

const useStyles1 = makeStyles(theme => ({
  success: { backgroundColor: green[600] },
  error: { backgroundColor: theme.palette.error.dark },
  icon: { fontSize: 20 },
  iconVariant: { opacity: 0.9, marginRight: theme.spacing(1) },
  message: { display: 'flex', alignItems: 'center' }
}));

const MySnackbarContentWrapper = ({ className, message, onClose, variant, ...other }) => {
  const classes = useStyles1();
  const Icon = variantIcon[variant];
  
  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}
  
const { string, func, oneOf } = PropTypes;
MySnackbarContentWrapper.propTypes = {
  className: string,
  message: string,
  onClose: func,
  variant: oneOf(['error', 'success']).isRequired
};


const ErrorSnackbar = ({ pathname, history, params }) => {
  /* const { recipientAddress, chargeAmount } = params; */

  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClose = (event, reason) => {
    if(reason === 'clickaway') return;
    setOpen(false);
  }
  
  return (
    <Fragment>
      { loading ? <Spinner/> : null }
      <Buttons 
        pathname={ pathname }
        history={ history }
        params={ params } 
        setOpen={ setOpen } 
        setLoading={ setLoading }
        setError={ setError }
      />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant={error ? "error" : "success"}
          message={error ? 'Payment error!' : "Success payment!"}
        />
      </Snackbar>
    </Fragment>
  )
}


export default ErrorSnackbar;