import React, { useState } from 'react';
import ShareMenuItem from './ShareMenuItem';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import ShareIcon from '@material-ui/icons/Share';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));


const menuItems = ['Facebook', 'LinkedIn', 'Instagram'];

const ShareMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <ShareIcon onClick={handleClick}/> 
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
    {
        menuItems.map((menuItem, idx) => (
            <ShareMenuItem key={ idx } name={ menuItem }/>
        ))
    }
      </StyledMenu>
    </div>
  )
}


export default ShareMenu;