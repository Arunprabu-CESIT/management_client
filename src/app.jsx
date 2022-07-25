import React from 'react';
import './app.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import EmployeeEnroll from './components/employeeEnroll/employeeEnroll';
import EmployeeDetails from './components/employeeDetails/employeeDetails';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

export const languages = {
  en: {
    nativeName: 'English',
  },
  ta: {
    nativeName: 'Tamil',
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="client-management">
        <Switch>
          <PrivateRoute path="/" exact component={Home} />

          <Route path="/login" exact component={Login} />

          <Route path="/register" exact component={Register} />

          <Route path="/userprofile" exact component={Profile} />

          <Route path="/enroll" exact component={EmployeeEnroll} />

          <Route path="/details" exact component={EmployeeDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
