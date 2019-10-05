import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { getCategoryIcon } from '../../../../util';


const useStyles = makeStyles(theme => ({
    listItemAvatar: {
        minWidth: '45px'
    },
    avatar: {
        fontSize: '20px',
        width: '30px',
        height: '30px',
        backgroundColor: 'dodgerblue'
    },
    listItemText:{
        fontSize:'12px'
    }
}));

const CategoryItem = ({ name }) => {
    const classes = useStyles();
    const [backgroundColor, iconComponent] = getCategoryIcon(name);
    
    return(
        <ListItem>
            <ListItemAvatar className={classes.listItemAvatar}>
                <Avatar style={{ backgroundColor }} className={classes.avatar}>
                    { iconComponent }
                </Avatar>
            </ListItemAvatar>
            <ListItemText classes={{ primary: classes.listItemText }} primary={name}/>
        </ListItem>
    )
}


export default CategoryItem;