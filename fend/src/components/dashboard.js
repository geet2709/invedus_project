import React from 'react';

function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user ? user.username : 'Guest'}</h2>
      <p>This is your dashboard.</p>
    </div>
  );
}

export default Dashboard;
