import React from 'react';
import './tablecomponent.css';

const TableComponent = () => {
  const data = [
    { no: 1, date: '06-11-2024', status: 'P/A', in: '9:14', out: '14:03', earlyLate: '0:00', totalHrs: '4:49' },
    { no: 2, date: '05-11-2024', status: 'P', in: '9:20', out: '18:47', earlyLate: '0:00', totalHrs: '9:27' },
    { no: 3, date: '04-11-2024', status: 'P', in: '9:10', out: '18:51', earlyLate: '0:00', totalHrs: '9:41' },
    { no: 4, date: '03-11-2024', status: 'WO', in: '0:00', out: '0:00', earlyLate: '0:00', totalHrs: '0:00' },
    { no: 5, date: '02-11-2024', status: 'WO', in: '0:00', out: '0:00', earlyLate: '0:00', totalHrs: '0:00' },
    { no: 6, date: '01-11-2024', status: 'FH', in: '0:00', out: '0:00', earlyLate: '0:00', totalHrs: '0:00' },
  ];

  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Date</th>
          <th>Status</th>
          <th>In</th>
          <th>Out</th>
          <th>Early going\Late coming</th>
          <th>Total hrs</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.no}</td>
            <td>{row.date}</td>
            <td>{row.status}</td>
            <td>{row.in}</td>
            <td>{row.out}</td>
            <td>{row.earlyLate}</td>
            <td>{row.totalHrs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;