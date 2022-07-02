import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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

      if (decodedToken.exp * 10000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
      <nav className="navbar background">
        <div className="logo">
          <img src={logo} alt="icon" />
        </div>

        <div>
          {user ? (
            <>
              <ul className="nav-list">
                <li>
                  <div className="link-section">
                    <h3>
                      {user.result.firstName.toUpperCase()}
                      <small>({user.result.role.toUpperCase()})</small>
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
