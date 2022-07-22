import React from 'react';
import Form from '../form/form';
import Navbar from '../navbar/navbar';

import './employeeEnroll.scss';

const initialState = {
  name: '',
  employeeId: '',
  email: '',
  mobile: '',
  address: '',
  designation: '',
};

const EmployeeEnroll = () => {
  return (
    <>
      <Navbar />
      <Form action="create" formData={initialState} />
    </>
  );
};

export default EmployeeEnroll;
