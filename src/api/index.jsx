import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('user')) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem('user')).token
//     }`;
//   }

//   return req;
// });

export const fetchEmployees = () =>
  API.get('/employees', { withCredentials: true });
export const createEmployee = (newEmployee) =>
  API.post('/employees', newEmployee);
export const updateEmployee = (id, updatedEmployee) =>
  API.patch(`/employees/${id}`, updatedEmployee);

export const deleteEmployee = (id) => API.delete(`/employees/${id}`);

export const signIn = (formData) =>
  API.post('/user/signin', formData, { withCredentials: true });
export const signUp = (formData) =>
  API.post('/user/signup', formData, { withCredentials: true });
