import React, { Fragment } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { getShareIcon } from '../../../../util';


const ShareMenuItem = ({ name }) => {
  const iconComponent = getShareIcon(name);

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