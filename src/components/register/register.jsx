import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
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
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
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
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />

              <label className="label-section" htmlFor="role">
                Role
              </label>
              <div className="role-section">
                <input
                  type="radio"
                  name="role"
                  id="admin"
                  required
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                <label htmlFor="admin">Admin</label>
                <div className="pad-8px"></div>
                <input
                  type="radio"
                  name="role"
                  id="hr"
                  required
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                <label htmlFor="hr">HR</label>
                <div className="pad-8px"></div>
                <input
                  type="radio"
                  name="role"
                  id="manager"
                  required
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                <label htmlFor="manager">Manager</label>
              </div>
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="label-section" htmlFor="password">
                Password
              </label>
              <input
                className="input-section"
                placeholder="Enter Password"
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label className="label-section" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="input-section"
                placeholder="Confirm Password"
                type="Password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <button type="submit" id="sub_but">
                Register
              </button>
            </form>
            <div className="footer">
              Already have an Account ?{' '}
              <Link className="link" to="/login">
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
