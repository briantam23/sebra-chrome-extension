import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


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
    },
}));

const FindSites = () => {
    const classes = useStyles();
    return(
        <div className={classes.mainContainer}>
            <Typography variant="h2" className={classes.header}>Find Participating Sites</Typography>
        </div>
    )
}


export default FindSites;