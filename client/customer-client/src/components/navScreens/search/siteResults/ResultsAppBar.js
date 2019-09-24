import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
        marginLeft: '10px',
        color: 'black'
    },
    deleteIcon: {
        margin: '0px 10px'
    }
}));

const ResultsAppBar = () => {
    const classes = useStyles();
    const auth = useSelector(store => store.auth);

    return(
        <div className={classes.iconContainer}>
            <Link to={`/account/${auth.address}/search`}>
                <ArrowBackIcon className={classes.arrowIcon}/>
            </Link>
            <div>
                <ShareIcon/>
                <DeleteOutlineIcon className={classes.deleteIcon}/>
            </div>
        </div>
    )
}


export default ResultsAppBar;