import React from 'react';

export default function UserIcon({ iconUrl }) {
  return (
    <div className="UserIcon">
      {iconUrl ? <img src={iconUrl} alt="Current user's icon" /> : ''}
    </div>
  );
}
