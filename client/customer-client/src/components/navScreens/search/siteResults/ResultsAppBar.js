import React from 'react';
import { Link } from 'react-router-dom';
import ShareMenu from './ShareMenu';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
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
    rightContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    deleteIcon: {
        margin: '0px 10px',
        cursor: 'pointer'
    }
}));

const ResultsAppBar = ({ handleDeleteClick }) => {
    const classes = useStyles();

    return(
        <div className={classes.iconContainer}>
            <Link to={'/account/search'}>
                <ArrowBackIcon className={classes.arrowIcon}/>
            </Link>
            <div className={classes.rightContainer}>
                <ShareMenu/>
                <DeleteOutlineIcon onClick={ e => handleDeleteClick(e) } className={classes.deleteIcon}/>
            </div>
        </div>
    )
}


export default ResultsAppBar;