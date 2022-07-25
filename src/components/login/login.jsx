import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './login.scss';
import { Validate } from '../../helper/util';

import { signin } from '../../actions/auth';
import { useTranslation } from 'react-i18next';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(formData, 'login'));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(signin(formData, history));
    }
  }, [formErrors, dispatch]);

  return (
    <>
      <div className="main-login">
        <div className="login-container">
          <div className="login-form">
            <div className="title">{t('login_to_begin')}</div>
            <form onSubmit={handleSubmit}>
              <div className="pad-8px">
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
              <div className="pad-8px">
                <label className="label-section" htmlFor="password">
                  {t('password')}
                </label>
                <input
                  className="input-section"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="error">{formErrors.password}</div>
              </div>
              <div>
                <button type="submit" id="sub-button">
                  {t('login')}
                </button>
              </div>
            </form>

            <div className="footer">
              <small> {t("don't_have_an_account")} ? </small> &nbsp;
              <Link className="link-section" to="/register">
                {t('register_now')}!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
