import React from 'react';

import './table.scss';

const Table = () => {
  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>ABC-0001</td>
              <td>Arun</td>
              <td>arun@gmail.com</td>
              <td>1234567890</td>
            </tr>
            <tr>
              <td>01</td>
              <td>ABC-0001</td>
              <td>Arun</td>
              <td>arun@gmail.com</td>
              <td>1234567890</td>
            </tr>
            <tr>
              <td>01</td>
              <td>ABC-0001</td>
              <td>Arun</td>
              <td>arun@gmail.com</td>
              <td>1234567890</td>
            </tr>
            <tr>
              <td>01</td>
              <td>ABC-0001</td>
              <td>Arun</td>
              <td>arun@gmail.com</td>
              <td>1234567890</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
