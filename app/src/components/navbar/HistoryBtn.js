import React from 'react';

import { Link } from '@reach/router';

export default function HistoryBtn({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <></>;
  }
  return (
    <button className="history-btn">
      <Link to="/history">Share History</Link>
    </button>
  );
}
