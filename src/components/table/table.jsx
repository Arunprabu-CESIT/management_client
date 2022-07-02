import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from '../form/form';

import './table.scss';

const Table = () => {
  const employees = useSelector((state) => state.employees);

  const [popup, setPopup] = useState(false);

  const [data, setData] = useState({
    name: '',
    employeeId: '',
    email: '',
    mobile: '',
    address: '',
    designation: '',
  });

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Designation</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>
                  <div
                    className="edit-employee"
                    onClick={() => {
                      setData(employee);

                      setPopup(true);
                    }}
                  >
                    {employee.employeeId}
                  </div>
                </td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>{employee.designation}</td>
                <td>{employee.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Form
        trigger={popup}
        setTrigger={setPopup}
        action="view"
        formData={data}
      />
    </>
  );
};

export default Table;
