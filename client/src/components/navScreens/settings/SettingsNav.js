import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../store/actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    navContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '5px'
    },
    arrowIcon: {
        marginLeft: '10px',
        color: 'black'
    },
    button: {
        fontSize: '9px',
        maxWidth: '60px',
        minWidth: '60px',
        maxHeight: '24px',
        minHeight: '24px',
        padding: '0px',
        marginRight: '12px'
    }
}));

const SettingsNav = ({ history }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    const handleLogout = () => dispatch(logout(history));
    const auth = useSelector(store => store.auth);

    return(
        <div className={classes.navContainer}>
            <Link to={`/account/${auth.address}/search`}>
                <ArrowBackIcon className={classes.arrowIcon}/>
            </Link>
            <div>
                <Button onClick={ () => handleLogout() } className={classes.button} variant='contained' color='secondary'>
                    Logout
                </Button>
            </div>
        </div>
    )
}


export default SettingsNav;