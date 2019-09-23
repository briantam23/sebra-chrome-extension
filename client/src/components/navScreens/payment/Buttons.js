import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrder } from '../../../store/actions/orders';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    button: {
      width: '202px',
      height: '56px',
      marginTop: '60px',
      fontSize: '17px',
      padding: '10px 20px'
    },
    redirectLink: {
      textDecoration: 'none',
      color: 'white'
    }
}))


const Buttons = ({ pathname, history, params, setOpen, setLoading, setError }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const auth = useSelector(store => store.auth);

    const handleClick = e => {
        e.preventDefault();
        setOpen(true);
        setLoading(true);
        return (
          dispatch(updateOrder(auth, history, params))
            .then(() => setLoading(false))
            .catch(() => {
              setLoading(false);
              setError('Payment error!');
            })
        )
    }
    
    return pathname !== '/payment-complete' 
        ? <Button onClick={handleClick} className={classes.button} variant="contained" color="primary" >
            Pay with Libra
          </Button>
        : <a className={classes.redirectLink} href='https://www.wsj.com' rel="noopener noreferrer" target="_blank">
            <Button className={classes.button} variant="contained" color="primary" >
                Proceed to WSJ!
            </Button>
          </a>
}


export default Buttons;