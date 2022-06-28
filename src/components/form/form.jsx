import React, { useState } from 'react';
import './form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  const [modal, setModal] = useState(false);

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
            <form>
              <input
                className="input-section"
                type="text"
                placeholder="Employee Name"
                id="name"
                name="name"
                onChange={''}
              />
              <input
                className="input-section"
                type="text"
                placeholder="Employee ID"
                id="employeeId"
                name="employeeId"
                onChange={''}
              />
              <input
                className="input-section"
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                onChange={''}
              />
              <input
                className="input-section"
                type="tel"
                placeholder="Mobile"
                id="mobile"
                name="mobile"
                onChange={''}
              />
            </form>
            <div className="text-center">
              <button type="submit" className="submit-button">
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
