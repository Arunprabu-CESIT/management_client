import React from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './profile.scss';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  return (
    <>
      <Navbar />
      <div className="back" onClick={() => history.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
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
