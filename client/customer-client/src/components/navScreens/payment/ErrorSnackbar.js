import React, { useState, Fragment } from 'react';
import Spinner from '../../shared/spinner/Spinner';
import Buttons from './Buttons';
import SnackbarContentWrapper from './SnackbarContentWrapper';
import Snackbar from '@material-ui/core/Snackbar';


const ErrorSnackbar = ({ pathname, history }) => {

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
        <SnackbarContentWrapper
          onClose={handleClose}
          variant={error ? "error" : "success"}
          message={error ? 'Payment error!' : "Success payment!"}
        />
      </Snackbar>
    </Fragment>
  )
}


export default ErrorSnackbar;