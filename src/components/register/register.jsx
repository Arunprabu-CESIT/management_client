import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './register.scss';
import { Validate } from '../../helper/util';

import { signup } from '../../actions/auth';
import { useTranslation } from 'react-i18next';

const initialState = {
  firstName: '',
  lastName: '',
  role: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(formData, 'register'));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(signup(formData, history));
    }
  }, [formErrors, dispatch]);

  return (
    <>
      <div className="main-register">
        <div className="register-container">
          <div className="register-form">
            <div className="title">{t('new_user_regiter_here')}!</div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label-section" htmlFor="firstName">
                  {t('first_name')}
                </label>
                <input
                  className="input-section"
                  placeholder="Enter your First name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <div className="error">{formErrors.firstName}</div>
              </div>
              <div>
                <label className="label-section" htmlFor="lastName">
                  {t('last_name')}
                </label>
                <input
                  className="input-section"
                  placeholder="Enter your Last name"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <div className="error">{formErrors.lastName}</div>
              </div>
              <div>
                <label className="label-section" htmlFor="role">
                  {t('role')}
                </label>
                <select
                  className="role-section"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="select-role" disabled>
                    Select role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="hr">HR</option>
                  <option value="manager">Manager</option>
                </select>
                <div className="error">{formErrors.role}</div>
              </div>
              <div>
                <label className="label-section" htmlFor="email">
                  {t('email')}
                </label>
                <input
                  className="input-section"
                  placeholder="Enter your Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="error">{formErrors.email}</div>
              </div>
              <div>
                <label className="label-section" htmlFor="password">
                  {t('password')}
                </label>
                <input
                  className="input-section"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="error">{formErrors.password}</div>
              </div>
              <div>
                <label className="label-section" htmlFor="confirmPassword">
                  {t('confirm_password')}
                </label>
                <input
                  className="input-section"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <div className="error">{formErrors.confirmPassword}</div>
              </div>
              <div>
                <button type="submit" id="sub-button">
                  {t('register')}
                </button>
              </div>
            </form>
            <div className="footer">
              <small> {t('already_have_an_account')} ? </small> &nbsp;
              <Link className="link-section" to="/login">
                {t('login_here')}!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
