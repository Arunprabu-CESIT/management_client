import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { createEmployee, updateEmployee } from '../../actions/employees';

const Form = ({ currentId, setCurrentId }) => {
  const [modal, setModal] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    name: '',
    employeeId: '',
    email: '',
    mobile: '',
  });

  const employee = useSelector((state) =>
    currentId ? state.employees.find((e) => e._id === currentId) : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (employee) setEmployeeData(employee);
  }, [employee]);

  const clear = () => {
    setCurrentId(null);
    setEmployeeData({
      name: '',
      employeeId: '',
      email: '',
      mobile: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(employeeData);

    if (currentId) {
      dispatch(
        updateEmployee(currentId, {
          ...employeeData,
          name: user?.result?.firstName,
        })
      );
    } else {
      dispatch(
        createEmployee({ ...employeeData, name: user?.result?.firstName })
      );
    }

    clear();
  };

  const toggleModel = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <button className="add-button" onClick={toggleModel}>
        <FontAwesomeIcon icon={faPlus} />
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModel} className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModel}>
              <FontAwesomeIcon icon={faX} />
            </button>
            <div className="title">Add Employee</div>
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
              />
              <input
                className="input-section"
                type="tel"
                placeholder="Mobile"
                id="mobile"
                name="mobile"
                value={employeeData.mobile}
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, mobile: e.target.value })
                }
              />

              <div className="text-center">
                <button type="submit" className="submit-button">
                  ADD
                </button>
                <button className="submit-button" onClick={clear}>
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
