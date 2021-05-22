import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MuiAlert from '@material-ui/lab/Alert';

import { useStyles, ToolButton } from '../../assets/MUIStyles';

export default function ShareBtn({ uploadImg }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // From Material UI docs
  const handleClick = async (e) => {
    await uploadImg();
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <ToolButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={(e) => handleClick(e)}
        endIcon={<FileCopyIcon />}
      >
        Share
      </ToolButton>
      <Snackbar
        open={open}
        autoHideDuration={7000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
        >
          Scribble link copied to clipboard!
        </MuiAlert>
      </Snackbar>
    </>
  );
}
