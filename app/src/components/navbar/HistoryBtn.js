import React from 'react';

import { Link } from 'react-router-dom';

export default function HistoryBtn({ isAuthenticated }) {
  return (
    <button className="history-btn">
      <Link to="/history">Share History</Link>
    </button>
  );
}
