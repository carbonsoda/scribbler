import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import ClearIcon from '@material-ui/icons/Clear';
import UndoIcon from '@material-ui/icons/Undo';
import copy from 'clipboard-copy';

import * as apiClient from '../../apiClient';
import { useStyles, ToolButton } from '../../assets/MUIStyles';

import DownloadBtn from './DownloadBtn';
import ShareBtn from './ShareBtn';

export default function ImgUtils({ canvas }) {
  const { user } = useAuth0();
  const classes = useStyles();

  const uploadImg = async () => {
    const drawnLayer = canvas.current.canvasContainer.children[1].toDataURL('image/png');

    const url = await apiClient.uploadImg(drawnLayer, user);
    copy(url);
  };

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
        <ShareBtn uploadImg={uploadImg} />
      </div>
    </>
  );
}
