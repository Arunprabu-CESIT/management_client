import React from 'react';
import Navbar from '../navbar/navbar';

import './profile.scss';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <>
      <Navbar />
      <h2 style={{ textAlign: 'center' }}>My Profile</h2>
      <div className="profile-wrapper display-flex justify-center">
        <div className="profile-container box-shadow-3a3939">
          <div className="first-item">
            <h1>
              {user.result.firstName.toUpperCase()}{' '}
              {user.result.lastName.toUpperCase()}
            </h1>
            <div className="pad-8px">Role: {user.result.role}</div>
            <div className="pad-8px">Email: {user.result.email}</div>
            <div style={{ marginTop: '50px' }}> Social Profile:</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
