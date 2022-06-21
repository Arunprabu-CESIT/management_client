import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <h4> Home Page</h4>
      <nav>
        <Link to="login">Login</Link> <br />
        <Link to="register">Register</Link>
      </nav>
    </div>
  );
};

export default Home;
