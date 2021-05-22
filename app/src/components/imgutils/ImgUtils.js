import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import ClearIcon from '@material-ui/icons/Clear';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import UndoIcon from '@material-ui/icons/Undo';
import copy from 'clipboard-copy';

import * as apiClient from '../../apiClient';
import { useStyles, ToolButton } from '../../assets/MUIStyles';

import DownloadBtn from './DownloadBtn';

export default function ImgUtils({ canvas }) {
  const [shareUrl, setShareUrl] = React.useState('');
  const { user } = useAuth0();
  const classes = useStyles();

  const uploadImg = async (e) => {
    e.preventDefault();
    const drawnLayer = canvas.current.canvasContainer.children[1].toDataURL('image/png');

    const url = await apiClient.uploadImg(drawnLayer, user);

    setShareUrl(url);
    copy(url);
  };

  React.useEffect(() => {
    setShareUrl('');
  }, []);

  return (
    <>
      <div className="img-utils">
        <ToolButton
          variant="contained"
          color="primary"
          className={classes.margin}
          onClick={() => canvas.current.clear()}
          endIcon={<ClearIcon />}
        >
          Clear
        </ToolButton>
        <ToolButton
          variant="contained"
          color="primary"
          className={classes.margin}
          onClick={() => canvas.current.undo()}
          endIcon={<UndoIcon />}
        >
          Undo
        </ToolButton>
        <DownloadBtn />
        <ToolButton
          variant="contained"
          color="primary"
          className={classes.margin}
          onClick={(e) => uploadImg(e)}
          endIcon={<FileCopyIcon />}
        >
          Share
        </ToolButton>
      </div>
      <div className="share-url">
        {shareUrl ? 'Copied to clipboard!' : ''}
      </div>
    </>
  );
}
