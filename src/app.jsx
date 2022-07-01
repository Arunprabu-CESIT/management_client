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
          <Route path="/" exact component={Home} />

          <Route path="/login" exact component={Login} />

          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
