import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        }
      }
    }
}))(MenuItem);


const ShareMenuItem = ({ name }) => {

    let iconComponent;
    if(name === 'Facebook') iconComponent = <FacebookIcon/>;
    else if(name === 'LinkedIn') iconComponent = <LinkedInIcon/>;
    else if(name === 'Instagram') iconComponent = <InstagramIcon/>;

    return(
        <StyledMenuItem>
          <ListItemIcon>
            { iconComponent }
          </ListItemIcon>
          <ListItemText primary={ name }/>
        </StyledMenuItem>
    )
}


export default ShareMenuItem;