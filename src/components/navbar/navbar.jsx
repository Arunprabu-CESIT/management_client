import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import logo from '../../images/logo.png';
import './navbar.scss';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/login');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 3600 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
      <nav className="navbar background">
        <div className="logo">
          <Link to={'/'}>
            <img src={logo} alt="icon" />
          </Link>
        </div>

        <div>
          {user ? (
            <>
              <ul className="nav-list">
                <li>
                  <div className="link-section">
                    <h3>
                      <Link to="/userprofile">
                        {user.result.firstName.toUpperCase()}
                        <small>({user.result.role.toUpperCase()})</small>
                      </Link>
                    </h3>
                  </div>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </>
          ) : (
            history.push('/login')
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
