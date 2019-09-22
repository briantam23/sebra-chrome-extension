import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/actions/auth';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        width: '253px'
    },
    header: {
        fontSize: '30px',
        fontWeight: 400,
        margin: '0px 0px 0px 15px',
        color: 'darkslateblue',
        alignSelf: 'center'
    }
}));

const Settings = ({ history }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    const handleLogout = () => dispatch(logout(history));

    return(
        <div className={classes.mainContainer}>
            <Typography variant="h2" className={classes.header}>Settings</Typography>
            <Button onClick={ () => handleLogout() } variant='contained' color='secondary'>
                Logout
            </Button>
        </div>
    )
}


export default Settings;