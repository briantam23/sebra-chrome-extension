import React from 'react';
import SettingsAppBar from './SettingsAppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SettingsForm from './SettingsForm';


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

const Settings = ({ history }) => {
    const classes = useStyles();

    return(
        <div className={classes.mainContainer}>
            <SettingsAppBar history={ history }/>
            <Typography variant="h2" className={classes.header}>Settings</Typography>
            <SettingsForm history={ history }/>
        </div>
    )
}


export default Settings;