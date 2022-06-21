import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  return (
    <>
      <div className="main-register">
        <div className="register-container">
          <div className="register-form"></div>
        </div>
      </div>
      <Link to="/login">Go to Login Page</Link>
    </>
  );
};

export default Register;
