import React from 'react';
import SettingsAppBar from './SettingsAppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SettingsForm from './SettingsForm';
import Faq from './Faq';


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
        margin: '5px 0px 10px 15px',
        color: 'darkslateblue',
        alignSelf: 'center'
    }
}));

const Settings = ({ pathname, history }) => {
    const classes = useStyles();
    pathname = pathname.slice(8, 17);
    return(
        <div className={classes.mainContainer}>
            <SettingsAppBar history={ history }/>
            <Typography variant="h2" className={classes.header}>Settings</Typography>
        {
            pathname === '/settings' 
                ? <SettingsForm history={ history }/> 
                : <Faq/>
        }
        </div>
    )
}


export default Settings;