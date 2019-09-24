import React from 'react';
import { useDispatch } from 'react-redux';
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
        color: 'black',
        cursor: 'pointer'
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

const SettingsAppBar = ({ history }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    const handleArrowBack = () => history.goBack();
    const handleLogout = () => dispatch(logout(history));

    return(
        <div className={classes.navContainer}>
            <ArrowBackIcon onClick={ handleArrowBack } className={classes.arrowIcon}/>
            <div>
                <Button onClick={ handleLogout } className={classes.button} variant='contained' color='secondary'>
                    Logout
                </Button>
            </div>
        </div>
    )
}


export default SettingsAppBar;