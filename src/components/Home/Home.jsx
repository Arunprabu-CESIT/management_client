import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees } from '../../actions/employees';

import Form from '../form/form';
import Navbar from '../navbar/navbar';
import Table from '../table/table';
import './home.scss';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [currentId, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="wrapper display-flex justify-center">
        <div className="container box-shadow-3a3939">
          <div className="first-section">
            <div className="display-flex justify-space-around align-items-center height-inherit">
              <div className="width-50"></div>
              <div className="width-50 justify-end display-flex pad-right-20px">
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </div>
            </div>
          </div>
          <div className="second-section">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
