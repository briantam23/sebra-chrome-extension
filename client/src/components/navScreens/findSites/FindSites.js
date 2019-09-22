import React from 'react';
import CategoryList from './CategoryList';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


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
        margin: '10px 0px 0px 15px',
        color: 'darkslateblue',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.05),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.15),
        },
        margin: '10px 10px 0px',
        width: '228px'
    },
    searchIcon: {
        width: '40px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: '8px 8px 8px 49px',
        transition: theme.transitions.create('width'),
        width: '100%'
    }
}));


const FindSites = () => {
    const classes = useStyles();
    return(
        <div className={classes.mainContainer}>
            <Typography variant="h2" className={classes.header}>Find Participating Sites</Typography>
            <div className={classes.search}>
                <div className={classes.searchIcon}><SearchIcon/></div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <CategoryList/>
        </div>
    )
}


export default FindSites;