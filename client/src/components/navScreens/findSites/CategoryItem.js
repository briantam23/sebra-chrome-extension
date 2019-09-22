import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


const useStyles = makeStyles(theme => ({
    listItemAvatar: {
        minWidth: '45px'
    },
    avatar: {
        fontSize: '20px',
        width: '30px',
        height: '30px'
    },
    listItemText:{
        fontSize:'0.7em'
    }
}));

const CategoryItem = ({ name }) => {
    const classes = useStyles();

    let iconComponent = null;
    if(name === 'Photos') iconComponent = <ImageIcon fontSize='inherit'/>;
    else if(name === 'Work') iconComponent = <WorkIcon fontSize='inherit'/>;
    else if(name === 'Vacation') iconComponent = <BeachAccessIcon fontSize='inherit'/>;
    
    return(
        <ListItem>
            <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar className={classes.avatar}>
                    { iconComponent }
                </Avatar>
            </ListItemAvatar>
            <ListItemText classes={{ primary: classes.listItemText }} primary={name}/>
        </ListItem>
    )
}


export default CategoryItem;