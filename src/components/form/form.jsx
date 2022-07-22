import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './form.scss';
import { createEmployee, updateEmployee } from '../../actions/employees';
import { Validate } from '../../helper/util';
import { useTranslation } from 'react-i18next';

const Form = ({ action, formData }) => {
  const { t } = useTranslation();
  const [employeeData, setEmployeeData] = useState(formData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const employee = useSelector((state) => {
    return formData.employeeId !== ''
      ? state.employees.find((e) => e.employeeId === formData.employeeId)
      : null;
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem('user'));

  const roleDetails = userData.result.role;

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (employee) setEmployeeData(employee);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (action === 'view') {
        dispatch(
          updateEmployee(employeeData._id, {
            ...employeeData,
          })
        );
      } else {
        dispatch(createEmployee({ ...employeeData }));
      }
      history.push('/');
    }

    setIsSubmit(false);
  }, [employee, formErrors, dispatch]);

  const clear = () => {
    setEmployeeData(formData);
    setFormErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(employeeData, 'employeeData'));
    setIsSubmit(true);
  };

  return (
    <>
      <div className="form-section modal z-index-100">
        <div className="modal-content">
          <div className="title">
            {action === 'create' ? t('add_employee') : t('employee_details')}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="input-section"
              type="text"
              placeholder="Employee Name"
              id="name"
              name="name"
              value={employeeData.name}
              onChange={handleChange}
              disabled={
                action === 'view' &&
                (roleDetails === 'manager' || roleDetails === 'hr')
              }
            />
            <div className="error">{formErrors.name}</div>
            <input
              className="input-section"
              type="text"
              placeholder="Employee ID"
              id="employeeId"
              name="employeeId"
              value={employeeData.employeeId}
              onChange={handleChange}
              disabled={
                action === 'view' &&
                (roleDetails === 'manager' || roleDetails === 'hr')
              }
            />
            <div className="error">{formErrors.employeeId}</div>
            <input
              className="input-section"
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              value={employeeData.email}
              onChange={handleChange}
              disabled={
                action === 'view' &&
                (roleDetails === 'manager' || roleDetails === 'hr')
              }
            />
            <div className="error">{formErrors.email}</div>
            <input
              className="input-section"
              type="text"
              placeholder="Mobile"
              id="mobile"
              name="mobile"
              value={employeeData.mobile}
              onChange={handleChange}
              disabled={
                action === 'view' &&
                (roleDetails === 'manager' || roleDetails === 'hr')
              }
            />
            <div className="error">{formErrors.mobile}</div>
            <input
              className="input-section"
              type="text"
              placeholder="Designation"
              id="designation"
              name="designation"
              value={employeeData.designation}
              onChange={handleChange}
              disabled={action === 'view' && roleDetails === 'manager'}
            />
            <div className="error">{formErrors.designation}</div>
            <input
              className="input-section"
              type="text"
              placeholder="Address"
              id="address"
              name="address"
              value={employeeData.address}
              onChange={handleChange}
              disabled={action === 'view' && roleDetails === 'manager'}
            />
            <div className="error">{formErrors.address}</div>

            <div className="text-center">
              {action === 'create' ? (
                <button type="submit" className="submit-button">
                  {t('add')}
                </button>
              ) : (
                ''
              )}

              {action === 'view' ? (
                roleDetails !== 'manager' ? (
                  <button type="submit" className="submit-button">
                    {t('update')}
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
  );
};

export default Form;
