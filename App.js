js
// src/App.js
import React, { useState } from 'react';
import OvertimeForm from './OvertimeForm';
import OvertimeList from './OvertimeList';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);

  // Add new overtime record
  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  return (
    <div className="App">
      <h1>Overtime Management</h1>
      <OvertimeForm onAddRecord={addRecord} />
      <OvertimeList records={records} />
    </div>
  );
}

export default App;

