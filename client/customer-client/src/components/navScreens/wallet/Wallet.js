import React from 'react';
import Header from '../../shared/Header';
import WalletBalance from './WalletBalance';
import InviteLink from './InviteLink';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
        width: '253px'
    }
}));


const Wallet = () => {
    const classes = useStyles();
    return(
        <div className={classes.mainContainer}>
            <Header heading='Sebra'/>
            <WalletBalance/>
            <InviteLink/>
        </div>
    )
}


export default Wallet;