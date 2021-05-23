import React from 'react';

import FileCopyIcon from '@material-ui/icons/FileCopy';

import { useStyles, ToolButton } from '../../assets/MUIStyles';
import CopyAlert from '../CopyAlert';

export default function ShareBtn({ uploadImg }) {
  const classes = useStyles();
  const [urlCopied, setUrlCopied] = React.useState(false);

  // From Material UI docs
  const handleClick = async (e) => {
    await uploadImg();
    setUrlCopied(true);
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
      <CopyAlert urlCopied={urlCopied} />
    </>
  );
}
