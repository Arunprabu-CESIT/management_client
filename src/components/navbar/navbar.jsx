import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className="navbar background">
        <div className="logo">
          <img src={logo} alt="icon" />
        </div>

        <div>
          <ul className="nav-list">
            <li>
              <Link className="link-section" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
