import React from 'react';

import DrawPanel from '../components/DrawPanel';

export default function Home() {
  return (
    <div className="main-page">
      <p className="description">
        Scribble an idea and quickly share it with others
        via a temporary link
        <br />
        After 30 minutes, the link will expire.
        <br />
        Registered users can refresh the link for up to 24 hours.
      </p>
      <DrawPanel />
    </div>
  );
}
