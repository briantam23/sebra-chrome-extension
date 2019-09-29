import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    paperContainer: { 
        margin: '22px 10px 0px 10px',
        padding: '15px 15px',
        backgroundColor: 'whitesmoke',
        height: '110px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    smallHeader: {
        fontSize: '15px',
        fontWeight: 200
    },
    largeHeader: {
        fontSize: '35px',
        fontWeight: 400
    }
}));


const WalletBalance = () => {
    const classes = useStyles();
    const auth = useSelector(store => store.auth);
    
    return(
        <Paper className={classes.paperContainer}>
            <Typography variant="h2" className={classes.smallHeader}>Wallet</Typography> 
            <Typography variant="h2" className={classes.largeHeader}>
                { isNaN(Number(auth.accountBalance)) ? '≋  Libra' : `≋${auth.accountBalance} Libra` }
            </Typography>   
            <Typography variant="h2" className={classes.smallHeader}>$(?) USD</Typography>  
        </Paper>
    )
}


export default WalletBalance;