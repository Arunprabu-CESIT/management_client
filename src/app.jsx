import React from 'react';
import './app.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';
import Profile from './components/profile/profile';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('profile') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="client-management">
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <PrivateRoute path="/" exact component={Home} />

          <Route path="/login" exact component={Login} />

          <Route path="/register" exact component={Register} />

          <Route path="/userprofile" exact component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
