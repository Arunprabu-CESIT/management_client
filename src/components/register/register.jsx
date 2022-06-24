import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './register.scss';

import { signup } from '../../actions/auth';

const initialState = {
  firstName: '',
  lastName: '',
  role: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  // const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  // const handleShowPassword = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    dispatch(signup(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="main-register">
        <div className="register-container">
          <div className="register-form">
            <div className="title">New User Regiter Here!</div>
            <form onSubmit={handleSubmit}>
              <label className="label-section" htmlFor="firstName">
                First Name
              </label>
              <input
                className="input-section"
                placeholder="Enter your First name"
                type="text"
                id="firstName"
                name="firstName"
                required
                onChange={handleChange}
              />
              <label className="label-section" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="input-section"
                placeholder="Enter your Last name"
                type="text"
                name="lastName"
                id="lastName"
                required
                onChange={handleChange}
              />

              <label className="label-section" htmlFor="role">
                Role
              </label>
              <select
                className="role-section"
                id="role"
                name="role"
                defaultValue="select-role"
                required
                onChange={handleChange}
              >
                <option value="select-role" disabled>
                  Select role
                </option>
                <option value="admin">Admin</option>
                <option value="hr">HR</option>
                <option value="manager">Manager</option>
              </select>
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
                placeholder="Enter Password"
                id="password"
                name="password"
                required
                type="password"
                // type={showPassword ? 'text' : 'password'}
                // handleShowPassword={handleShowPassword}
                onChange={handleChange}
              />
              <label className="label-section" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="input-section"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                required
                type="password"
                // type={showPassword ? 'text' : 'password'}
                // handleShowPassword={handleShowPassword}
                onChange={handleChange}
              />
              <button type="submit" id="sub-button">
                Register
              </button>
            </form>
            <div className="footer">
              <span> Already have an Account ? </span> &nbsp;
              <Link className="link-section" to="/login">
                Login Here!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
