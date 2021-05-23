import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function CopyAlert({ urlCopied }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(urlCopied);
  }, [urlCopied]);

  return (
    <>
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
