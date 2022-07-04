import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './login.scss';

import { signin } from '../../actions/auth';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
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
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formData);
      dispatch(signin(formData, history));
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid Email!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 6) {
      errors.password = 'Password must have 6 charecters';
    } else if (values.password.length >= 12) {
      errors.password = 'Password limit is 12 charecters';
    }
    return errors;
  };

  return (
    <>
      <div className="main-login">
        <div className="login-container">
          <div className="login-form">
            <div className="title">Login to begin</div>
            <form onSubmit={handleSubmit}>
              <div className="pad-8px">
                <label className="label-section" htmlFor="email">
                  Email
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
                  Password
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
                  Login
                </button>
              </div>
            </form>

            <div className="footer">
              <span> Don't have an Account ? </span> &nbsp;
              <Link className="link-section" to="/register">
                Register Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
