import { combineReducers } from 'redux';
import auth from './auth';
import employees from './employees';

export default combineReducers({ auth, employees });
