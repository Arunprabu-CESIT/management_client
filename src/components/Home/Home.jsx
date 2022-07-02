import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees } from '../../actions/employees';

import Form from '../form/form';
import Navbar from '../navbar/navbar';
import Table from '../table/table';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);

  const initialState = {
    name: '',
    employeeId: '',
    email: '',
    mobile: '',
    address: '',
    designation: '',
  };

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar />

        <div className="wrapper display-flex justify-center">
          <div className="container box-shadow-3a3939">
            <div className="first-section">
              <div className="display-flex justify-space-around align-items-center height-inherit">
                <div className="width-50"></div>
                <div className="width-50 justify-end display-flex pad-right-20px">
                  <button className="add-button" onClick={() => setPopup(true)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
            <div className="second-section">
              <Table />
            </div>
          </div>
        </div>
      </div>

      <Form
        trigger={popup}
        setTrigger={setPopup}
        action="create"
        formData={initialState}
      />
    </>
  );
};

export default Home;
