import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';

import PoolIcon from '@material-ui/icons/Pool';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import StoreIcon from '@material-ui/icons/Store';


const useStyles = makeStyles(theme => ({
    listItemAvatar: {
        minWidth: '45px'
    },
    avatar: {
        fontSize: '20px',
        width: '30px',
        height: '30px'
    },
    primaryText:{
        fontSize: '13px'
    },
    secondaryText:{
        fontSize: '10px'
    },
    button: {
        fontSize: '10px',
        maxWidth: '45px',
        minWidth: '45px',
        maxHeight: '25px',
        minHeight: '25px'
    }
}));

const ResultItem = ({ name }) => {
    const classes = useStyles();

    let iconComponent, urlAddress = null;
    if(name === 'Digital Ocean') {
        iconComponent = <PoolIcon fontSize='inherit'/>;
        urlAddress = 'blog.digitalocean.com';
    }
    else if(name === 'Heap Analytics') {
        iconComponent = <MultilineChartIcon fontSize='inherit'/>;
        urlAddress = 'heap.io/blog';
    }
    else if(name === 'Shopify') {
        iconComponent = <StoreIcon fontSize='inherit'/>;
        urlAddress = 'shopify.com/blog';
    }
    
    return(
        <ListItem>
            <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar className={classes.avatar}>
                    { iconComponent }
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
                classes={{ primary: classes.primaryText, secondary: classes.secondaryText }} 
                primary={name}
                secondary={urlAddress}
            />
            <ListItemSecondaryAction>
                <Button className={classes.button} size='small' variant="contained">Read</Button>
            </ListItemSecondaryAction>
        </ListItem>
    )
}


export default ResultItem;