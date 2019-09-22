import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShareIcon from '@material-ui/icons/Share';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const useStyles = makeStyles(theme => ({
    iconContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '5px'
    },
    arrowIcon: {
        marginLeft: '10px'
    },
    deleteIcon: {
        margin: '0px 10px'
    }
}));

const SiteResultsIcons = () => {
    const classes = useStyles();

    return(
        <div className={classes.iconContainer}>
            <ArrowBackIcon className={classes.arrowIcon}/>
            <div>
                <ShareIcon/>
                <DeleteOutlineIcon className={classes.deleteIcon}/>
            </div>
        </div>
    )
}


export default SiteResultsIcons;