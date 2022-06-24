import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './login.scss';

import { signin } from '../../actions/auth';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  // const handleShowPassword = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    dispatch(signin(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="main-login">
        <div className="login-container">
          <div className="login-form">
            <div className="title">Login to begin</div>
            <form onSubmit={handleSubmit}>
              <label className="label-section" htmlFor="email">
                Email
              </label>
              <input
                className="input-section"
                placeholder="Enter your Email"
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
              />
              <label className="label-section" htmlFor="password">
                Password
              </label>
              <input
                className="input-section"
                placeholder="Enter password"
                id="password"
                name="password"
                required
                type="password"
                // type={showPassword ? 'text' : 'password'}
                // handleShowPassword={handleShowPassword}
                onChange={handleChange}
              />
              <button type="submit" id="sub-button">
                Login
              </button>
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
