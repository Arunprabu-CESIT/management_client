import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="main-login">
        <div className="login-container">
          <div className="login-form">
            <div className="title">Login to begin</div>
            <form onSubmit={handleSubmit}>
              <label for="email">Email</label>
              <input
                placeholder="Enter your email..."
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label for="password">Password</label>
              <input
                placeholder="Enter password"
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button type="submit" id="sub_but">
                Login
              </button>
            </form>

            <div className="footer">
              <h4>
                Don't have an Account ?{' '}
                <Link className="link" to="/register">
                  Register Now!
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
