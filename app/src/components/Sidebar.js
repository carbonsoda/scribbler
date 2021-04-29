import React from 'react';

import DownloadBtn from './sidebar/DownloadBtn';
import HistoryBtn from './sidebar/HistoryBtn';
import ShareBtn from './sidebar/ShareBtn';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ShareBtn />
      <DownloadBtn />
      <HistoryBtn />
    </div>
  )
}
