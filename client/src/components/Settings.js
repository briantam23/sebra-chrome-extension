import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/auth';
import Button from '@material-ui/core/Button';


const Settings = ({ history }) => {
    const dispatch = useDispatch();
    const handleLogout = () => dispatch(logout(history));

    return(
        <div>
            <h1>Settings</h1>
            <Button onClick={ () => handleLogout() } color="inherit">
                Logout
            </Button>
        </div>
    )
}


export default Settings;