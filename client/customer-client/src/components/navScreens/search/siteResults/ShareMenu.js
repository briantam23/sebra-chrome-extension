import React, { useState } from 'react';
import ShareMenuItem from './ShareMenuItem';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShareIcon from '@material-ui/icons/Share';


const StyledMenu = withStyles({ paper: { border: '1px solid #d3d4d5' } })(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    {...props}
  />
));

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

const menuItems = ['Facebook', 'LinkedIn', 'Instagram'];

const ShareMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <ShareIcon style={{ cursor: 'pointer' }} onClick={handleClick}/> 
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
    {
        menuItems.map((menuItem, idx) => (
          <StyledMenuItem key={ idx }>
            <ShareMenuItem name={ menuItem }/>
          </StyledMenuItem>
        ))
    }
      </StyledMenu>
    </div>
  )
}


export default ShareMenu;