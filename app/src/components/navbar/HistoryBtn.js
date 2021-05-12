import React from 'react';

import { Link } from 'react-router-dom';

export default function HistoryBtn({ isAuthenticated }) {
  if (!isAuthenticated) {
    // Don't show if not authenticated
    return <></>;
  }
  return (
    <button className="history-btn">
      <Link to="/history">Share History</Link>
    </button>
  );
}
