import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const variantIcon = { success: CheckCircleIcon, error: ErrorIcon };

const useStyles = makeStyles(theme => ({
  success: { backgroundColor: green[600] },
  error: { backgroundColor: theme.palette.error.dark },
  icon: { fontSize: 20 },
  iconVariant: { opacity: 0.9, marginRight: theme.spacing(1) },
  message: { display: 'flex', alignItems: 'center' }
}));

const SnackbarContentWrapper = ({ className, message, onClose, variant, ...other }) => {
  const classes = useStyles();
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
SnackbarContentWrapper.propTypes = {
  className: string,
  message: string,
  onClose: func,
  variant: oneOf(['error', 'success']).isRequired
};


export default SnackbarContentWrapper;