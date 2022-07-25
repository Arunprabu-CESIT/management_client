import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import './table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteEmployee } from '../../actions/employees';

const Table = () => {
  const { t } = useTranslation();
  const user = JSON.parse(localStorage.getItem('user'));
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>{t('employee_id')}</th>
              <th>{t('name')}</th>
              <th>{t('email')}</th>
              <th>{t('mobile')}</th>
              <th>{t('designation')}</th>
              <th>{t('address')}</th>
              {user.result.role === 'admin' ? <th>{t('action')}</th> : null}
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>
                  <Link
                    to={{ pathname: '/details', employeeDetails: employee }}
                  >
                    {employee.employeeId}
                  </Link>
                </td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.mobile}</td>
                <td>{employee.designation}</td>
                <td>{employee.address}</td>
                {user.result.role === 'admin' ? (
                  <td>
                    <FontAwesomeIcon
                      onClick={() => dispatch(deleteEmployee(employee._id))}
                      className="delete"
                      icon={faTrash}
                    />
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
