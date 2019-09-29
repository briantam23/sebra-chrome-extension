import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    header: {
        fontSize: '32px',
        fontWeight: 500,
        margin: '7px 0px -10px 7px',
        color: 'darkslateblue',
        alignSelf: 'center'
    }
}));

const Header = ({ heading }) => {
    const classes = useStyles();

    return(
        <Typography className={classes.header} variant="h2" align="center">
            { heading }
        </Typography>
    )
}


export default Header;