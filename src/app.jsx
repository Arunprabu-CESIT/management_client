import React from 'react';
import './app.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="client-management">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
