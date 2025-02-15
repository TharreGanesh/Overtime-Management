js
// src/OvertimeList.js
import React from 'react';

function OvertimeList({ records }) {
  return (
    <div className="overtime-list">
      <h2>Overtime Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            <strong>{record.employeeName}</strong> worked{' '}
            {record.hoursWorked} hours with{' '}
            {record.overtimeHours} overtime hours.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OvertimeList;

