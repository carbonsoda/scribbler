import React from 'react';

import { Link } from 'react-router-dom';

export default function HistoryBtn({ isAuthenticated }) {
  if (!isAuthenticated) {
    // TODO: Show, but route to auth page instead
    return <></>;
  }
  return (
    <button className="history-btn">
      <Link to="history">Share History</Link>
    </button>
  );
}
