import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

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
