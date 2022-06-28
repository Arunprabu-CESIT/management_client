import React from 'react';

import './table.scss';

const Table = () => {
  return (
    <>
      <div className="pad-15px"></div>
      <div className="table-container">
        <table>
          <tr>
            <th>S.no</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
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
        </table>
      </div>
    </>
  );
};

export default Table;
