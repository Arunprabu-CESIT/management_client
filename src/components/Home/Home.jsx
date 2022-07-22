import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees } from '../../actions/employees';

import Navbar from '../navbar/navbar';
import Table from '../table/table';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const role = JSON.parse(localStorage.getItem('user')).result.role;

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
                <div className="width-50">
                  <div className="pad-left-20px font-size-20px font-weight-700">
                    {t('employee_list')}
                  </div>
                </div>
                <div className="width-50 justify-end display-flex pad-right-20px">
                  {role !== 'manager' ? (
                    <Link to="/enroll">
                      <button className="add-button">
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </Link>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
            <div className="second-section">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
