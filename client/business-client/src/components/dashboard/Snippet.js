import React from 'react';
import { useSelector } from 'react-redux';
import DialogTitle from './DialogTitle';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  openButton: {
      margin: theme.spacing(1),
      fontSize: '30px',
      padding: '20px 40px',
      backgrounColor: '#3f51b5',
      color: 'white',
      marginTop: '50px',
      [theme.breakpoints.down('1080')]: {
        marginTop: '30px',
        marginLeft: '8px',
        fontSize: '23px',
        padding: '10px 54px',
      }
  },
  divider: { margin: '20px 0px' },
  code: { color: 'rgba(0, 0, 0, 1)' }
}))

const DialogContent = withStyles(theme => ({ root: { padding: theme.spacing(2) }}))(MuiDialogContent);
const DialogActions = withStyles(theme => ({ root: { margin: 0, padding: theme.spacing(1) }}))(MuiDialogActions);


const Snippet = ({ amount, error }) => {
  amount = amount * 100;
  const classes = useStyles();
  const auth = useSelector(store => store.auth);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleClickOpen} 
        disabled={error !== ''} 
        className={classes.openButton}
      >
        Generate JS Snippet
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Your JS Snippet
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Include this in your page and create a container that will be used for the paymentRequestButton Element:
          </Typography>
          <Divider className={classes.divider} />
          <Typography gutterBottom className={classes.code}>
            { '<link rel="stylesheet" href="https://dgo.nz/hau0x/btn.css"></link>' } <br/>
            { '<button class="sebra-button">' } <br/> 
            &thinsp; { `<a class="sebra-link" rel="noopener noreferrer" target="_blank" href="https://sebra-client.herokuapp.com/#/login/${auth.address}/${amount}">Pay with Sebra</a>` } <br/>
            { '</button>' }
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Snippet;