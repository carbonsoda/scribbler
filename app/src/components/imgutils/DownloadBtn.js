import React from 'react';

import GetAppIcon from '@material-ui/icons/GetApp';

import { useStyles, ToolButton } from '../../assets/MUIStyles';

export default function DownloadBtn({ canvas }) {
  const downloadImg = (e) => {
    e.preventDefault();

    // children[1] = the user's drawing layer, without background
    const drawnLayer = canvas.current.canvasContainer.children[1].toDataURL('image/png');

    // converts the base64-encoded png file so it can be downloaded as proper png
    // src: Ehsan Ahmadi https://stackoverflow.com/a/60719585
    const downloadLink = document.createElement('a');
    downloadLink.href = drawnLayer;
    downloadLink.download = 'scribbled-img.png';
    downloadLink.click();
  };

  const classes = useStyles();

  return (
    <ToolButton
      variant="contained"
      color="primary"
      className={classes.margin}
      onClick={(e) => downloadImg(e)}
      endIcon={<GetAppIcon />}
    >
      Download
    </ToolButton>
  );
}
