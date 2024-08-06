// src/DataTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/fitnesi/backend/api.php?endpoint=tbl_admin')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.full_name}</td>
              <td>{d.username}</td>
              <td>{d.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
