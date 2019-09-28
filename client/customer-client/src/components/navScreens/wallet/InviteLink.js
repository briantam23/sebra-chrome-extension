import React from 'react';
import { handleCopyClick } from '../../../util';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    paperContainer: { 
        margin: '22px 10px 0px 10px',
        padding: theme.spacing(3, 2),
        backgroundColor: 'black',
        height: '30px'
    },
    header: {
        fontSize: '10px',
        fontWeight: 500,
        color: 'white'
    },
    input: {
        backgroundColor: 'white',
        height: '20px',
        width: '155px',
        paddingLeft: '7px',
        borderRadius: '4px',
        fontSize: '9px',
        fontWeight: 500,
    },
    button: {
        backgroundColor: 'whitesmoke',
        fontSize: '9px',
        maxWidth: '40px',
        minWidth: '40px',
        maxHeight: '18px',
        minHeight: '18px',
        padding: '0px',
        top: '-1px',
        margin: '4px 0px 0px 6px'
    }
}));


const InviteLink = () => {
    const classes = useStyles();

    return(
        <Paper className={classes.paperContainer}>
            <Typography variant="h2" className={classes.header}>
                Invite friends to enjoy great content with Libra
            </Typography> 
            <div>
                <Input value='sebra.co/ref/jTTG4QU8' id='copyInput' className={classes.input}/>
                <Button onClick={ handleCopyClick } variant="contained" className={classes.button}>Copy</Button>
            </div>
        </Paper>
    )
}


export default InviteLink;