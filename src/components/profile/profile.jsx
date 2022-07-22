import React from 'react';

import Navbar from '../navbar/navbar';
import './profile.scss';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Navbar />
      <div>
        <h2 style={{ textAlign: 'center' }}>{t('my_profile')}</h2>
      </div>
      <div className="profile-wrapper display-flex justify-center">
        <div className="profile-container box-shadow-3a3939">
          <div className="first-item">
            <h1>
              {user.result.firstName.toUpperCase()}{' '}
              {user.result.lastName.toUpperCase()}
            </h1>
            <div className="pad-8px">
              {t('role')}: {user.result.role}
            </div>
            <div className="pad-8px">
              {t('email')}: {user.result.email}
            </div>
            <div style={{ marginTop: '50px' }}> {t('social_profile')}:</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
