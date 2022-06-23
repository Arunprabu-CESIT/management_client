import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';

const App = () => {
  return (
    <>
      <div className="App">
        <header>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Routes>
        </header>
      </div>
    </>
  );
};

export default App;
