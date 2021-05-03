import React from 'react';

import ColorPalette from './sidebar/ColorPalette';
import DownloadBtn from './sidebar/DownloadBtn';
import ShareBtn from './sidebar/ShareBtn';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ShareBtn />
      <DownloadBtn />
      <ColorPalette />
    </div>
  );
}
