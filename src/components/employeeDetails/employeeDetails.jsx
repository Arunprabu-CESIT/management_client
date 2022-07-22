import React from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../form/form';
import Navbar from '../navbar/navbar';
import './employeeDetails.scss';

const EmployeeDetails = (props) => {
  const history = useHistory();
  if (!props.location.employeeDetails) {
    history.push('/');
  }
  const data = props.location.employeeDetails
    ? props.location.employeeDetails
    : null;

  return (
    <>
      <Navbar />
      {data ? <Form action="view" formData={data} /> : ''}
    </>
  );
};

export default EmployeeDetails;
