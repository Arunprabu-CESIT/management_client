import React, { useEffect, useState } from 'react';
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
      dispatch(signup(formData, history));
    }
  }, [formErrors, dispatch]);

  const validate = (values) => {
    const errors = {};
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    if (!values.firstName) {
      errors.firstName = 'First Name is required!';
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name is required!';
    }
    if (!values.role) {
      errors.role = 'Role is required!';
    }
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
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Re-enter Password';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = `Password doesn't match!`;
    }
    return errors;
  };

  return (
    <>
      <div className="main-register">
        <div className="register-container">
          <div className="register-form">
            <div className="title">New User Regiter Here!</div>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label-section" htmlFor="firstName">
                  First Name
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
                  Last Name
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
                  Role
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
              <div>
                <label className="label-section" htmlFor="password">
                  Password
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
                  Confirm Password
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
                  Register
                </button>
              </div>
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
