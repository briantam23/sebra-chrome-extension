import React, { Fragment } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const ShareMenuItem = ({ name }) => {

  let iconComponent;
  if(name === 'Facebook') iconComponent = <FacebookIcon/>;
  else if(name === 'LinkedIn') iconComponent = <LinkedInIcon/>;
  else if(name === 'Instagram') iconComponent = <InstagramIcon/>;

  return(
    <Fragment>
      <ListItemIcon>
        { iconComponent }
      </ListItemIcon>
      <ListItemText primary={ name }/>
    </Fragment>
  )
}


export default ShareMenuItem;