import React from 'react';
import SiteResultsIcons from './SiteResultsIcons';
import ResultList from './ResultList';
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
        fontSize: '20px',
        fontWeight: 500,
        margin: '5px 0px 0px 15px',
        color: 'darkslateblue',
    }
}));

const SiteResults = () => {
    const classes = useStyles();
    return(
        <div className={classes.mainContainer}>
            <SiteResultsIcons/>
            <Typography variant="h2" className={classes.header}>Technology</Typography>
            <ResultList/>
        </div>
    )
}


export default SiteResults;