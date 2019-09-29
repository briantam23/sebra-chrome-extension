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
//import WebIcon from '@material-ui/icons/Web';


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
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    button: {
        fontSize: '10px',
        maxWidth: '45px',
        minWidth: '45px',
        maxHeight: '25px',
        minHeight: '25px'
    }
}));

const ResultItem = ({ name, idx, selectedIdx, handleListItemClick }) => {
    const classes = useStyles();

    let backgroundColor, iconComponent, urlAddress = null;
    if(name === 'Digital Ocean') {
        backgroundColor = 'dodgerblue';
        iconComponent = <PoolIcon fontSize='inherit'/>;
        urlAddress = 'blog.digitalocean.com';
    }
    else if(name === 'Heap Analytics') {
        backgroundColor = 'mediumseagreen';
        iconComponent = <MultilineChartIcon fontSize='inherit'/>;
        urlAddress = 'heap.io/blog';
    }
    else if(name === 'Shopify') {
        backgroundColor = 'lightcoral';
        iconComponent = <StoreIcon fontSize='inherit'/>;
        urlAddress = 'shopify.com/blog';
    }
    /* else if(name === 'Heroku') {
        backgroundColor = 'gold';
        iconComponent = <WebIcon fontSize='inherit'/>;
        urlAddress = 'heroku.com';
    } */
    return(
        <ListItem 
            button
            selected={selectedIdx === idx}
            onClick={e => handleListItemClick(e, idx)}
        >
            <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar style={{ backgroundColor }} className={classes.avatar}>
                    { iconComponent }
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
                classes={{ primary: classes.primaryText, secondary: classes.secondaryText }} 
                primary={name}
                secondary={urlAddress}
            />
            <ListItemSecondaryAction>
                <a className={classes.link} href={`https://${urlAddress}`} rel="noopener noreferrer" target="_blank">
                    <Button className={classes.button} size='small' variant="contained">Read</Button>
                </a>
            </ListItemSecondaryAction>
        </ListItem>
    )
}


export default ResultItem;