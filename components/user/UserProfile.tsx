import React from 'react';

const UserProfile: React.FC = () => {
  return (
    <div className="user-profile">
      <h1>Your Profile</h1>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <button>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
