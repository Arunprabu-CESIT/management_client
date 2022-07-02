import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { createEmployee, updateEmployee } from '../../actions/employees';

const Form = ({ trigger, setTrigger, action, formData }) => {
  const [employeeData, setEmployeeData] = useState(formData);

  const employee = useSelector((state) => {
    return formData.employeeId !== ''
      ? state.employees.find((e) => e.employeeId === formData.employeeId)
      : null;
  });
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem('profile'));

  const roleDetails = userData.result.role;

  useEffect(() => {
    if (employee) setEmployeeData(employee);
  }, [employee]);

  const clear = () => {
    setEmployeeData(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === 'view') {
      dispatch(
        updateEmployee(employeeData._id, {
          ...employeeData,
        })
      );
    } else {
      dispatch(createEmployee({ ...employeeData }));
    }
    setTrigger(false);
  };

  return trigger ? (
    <>
      <div className="modal z-index-100">
        <div onClick={() => setTrigger(false)} className="overlay"></div>
        <div className="modal-content">
          <button
            className="close-modal"
            onClick={() => {
              setTrigger(false);
              clear();
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <div className="title">
            {action === 'create' ? 'Add Employee' : 'Employee Details'}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="input-section"
              type="text"
              placeholder="Employee Name"
              id="name"
              name="name"
              value={employeeData.name}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, name: e.target.value })
              }
              disabled={
                action === 'view' &&
                (roleDetails === 'manager' || roleDetails === 'hr')
              }
            />
            <input
              className="input-section"
              type="text"
              placeholder="Employee ID"
              id="employeeId"
              name="employeeId"
              value={employeeData.employeeId}
              onChange={(e) =>
                setEmployeeData({
                  ...employeeData,
                  employeeId: e.target.value,
                })
              }
              disabled={action === 'view'}
            />
            <input
              className="input-section"
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              value={employeeData.email}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, email: e.target.value })
              }
              disabled={action === 'view'}
            />
            <input
              className="input-section"
              type="text"
              placeholder="Mobile"
              id="mobile"
              name="mobile"
              value={employeeData.mobile}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, mobile: e.target.value })
              }
              disabled={
                action === 'view' &&
                (roleDetails === 'manager' || roleDetails === 'hr')
              }
            />
            <input
              className="input-section"
              type="text"
              placeholder="Designation"
              id="designation"
              name="designation"
              value={employeeData.designation}
              onChange={(e) =>
                setEmployeeData({
                  ...employeeData,
                  designation: e.target.value,
                })
              }
              disabled={action === 'view' && roleDetails === 'manager'}
            />
            <input
              className="input-section"
              type="text"
              placeholder="Address"
              id="address"
              name="address"
              value={employeeData.address}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, address: e.target.value })
              }
              disabled={action === 'view' && roleDetails === 'manager'}
            />

            <div className="text-center">
              {action === 'create' ? (
                <button type="submit" className="submit-button">
                  ADD
                </button>
              ) : (
                ''
              )}

              {action === 'view' ? (
                roleDetails !== 'manager' ? (
                  <button type="submit" className="submit-button">
                    Update
                  </button>
                ) : (
                  ''
                )
              ) : (
                ''
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    ''
  );
};

export default Form;
