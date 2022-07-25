import React, { useState } from 'react';

import Navbar from '../navbar/navbar';
import './profile.scss';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  // let langList = [
  //   { key: 'en', value: 'English' },
  //   { key: 'tn', value: 'Tamil' },
  // ];
  // let defaultValue = 'en';
  // const [selected, setSelected] = useState(defaultValue);
  const { t, i18n } = useTranslation();
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
              <span style={{ fontSize: '13px' }}>{t('role')}: </span>
              {user.result.role}
            </div>
            <div className="pad-8px">
              <span style={{ fontSize: '13px' }}>{t('email')}: </span>
              {user.result.email}
            </div>
            <div className="pad-8px">
              <span style={{ fontSize: '13px' }}>{t('select_language')}: </span>
              <select
                className="select-lang"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                {/* {langList.map((l) => {
                  <option value={l.key}>{t(l.value)}</option>;
                })} */}
                <option value="en">{t('english')}</option>
                <option value="ta">{t('tamil')}</option>
              </select>
            </div>
            <div style={{ marginTop: '50px' }}>
              <span style={{ fontSize: '13px' }}>{t('social_profile')} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
