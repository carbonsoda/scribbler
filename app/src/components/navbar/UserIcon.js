import React from 'react';

export default function UserIcon({ user }) {
  return (
    <>
      {user
        ? <img className="user-icon" src={user.picture} alt={`${user.name}'s icon`} />
        : ''}
    </>
  );
}
