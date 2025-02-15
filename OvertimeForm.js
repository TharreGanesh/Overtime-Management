js
// src/OvertimeForm.js
import React, { useState } from 'react';
function OvertimeForm({ onAddRecord }) {
  // State variables to store form data
  const [employeeName, setEmployeeName] = useState('');
  const [hoursWorked, setHoursWorked] = useState('');
  const [overtimeHours, setOvertimeHours] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeName && hoursWorked && overtimeHours) {
      // Create a new record
      const newRecord = {
        employeeName,
        hoursWorked,
        overtimeHours,
      };
      // Add the record to the list
      onAddRecord(newRecord);
      // Clear the form
      setEmployeeName('');
      setHoursWorked('');
      setOvertimeHours('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="overtime-form">
      <label>Employee Name</label>
      <input
        type="text"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        required
        />
        <label>Hours Worked</label>
        <input
          type="number"
          value={hoursWorked}
          onChange={(e) => setHoursWorked(e.target.value)}
          required
        />
        <label>Overtime Hours</label>
        <input
          type="number"
          value={overtimeHours}
          onChange={(e) => setOvertimeHours(e.target.value)}
          required
      />
      <button type="submit">Add Record</button>
    </form>
  );
}

export default OvertimeForm;

