import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calander.css'


const AttendanceCalendar = () => {
  const [date, setDate] = useState(new Date());

  // Sample attendance data
  const attendanceData = [
    { name: 'John Doe', date: '2024-11-01', loginTime: '09:00', logoutTime: '18:00' },
    { name: 'John Doe', date: '2024-11-02', loginTime: '09:30', logoutTime: '17:00' },
    { name: 'John Doe', date: '2024-11-06', loginTime: null, logoutTime: null }, // Absent
    { name: 'John Doe', date: '2024-11-04', loginTime: '09:00', logoutTime: '17:30' },
    { name: 'John Doe', date: '2024-11-05', loginTime: '09:15', logoutTime: null }, // Partially present
  ];

  const getAttendanceStatus = (loginTime, logoutTime) => {
    if (!loginTime && !logoutTime) return { status: 'A', color: 'red' }; // Absent
    if (logoutTime && loginTime) {
      const login = new Date(`2023-11-01T${loginTime}:00Z`); // Sample date
      const logout = new Date(`2023-11-01T${logoutTime}:00Z`); // Sample date
      if (logout - login >= 9 * 60 * 60 * 1000) return { status: 'P', color: 'green' , }; // Present
    }
    return { status: 'P/A', color: 'orange' }; // Present/Absent
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };


  const tileClassName = ({ date }) => {
    const dateKey = date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    const attendanceForDate = attendanceData.find(entry => entry.date === dateKey);

    if (attendanceForDate) {
      const { status } = getAttendanceStatus(attendanceForDate.loginTime, attendanceForDate.logoutTime);
      if (status === 'P') {
        return 'present'; // Apply 'present' class if status is 'P'
      }
      if (status === 'A') {
        return 'absent'; // Apply 'present' class if status is 'P'
      }
      if (status === 'P/A') {
        return 'partial'; // Apply 'present' class if status is 'P'
      }
    }
    return ''; // No class if not present
  };

  const tileContent = ({ date }) => {
    const dateKey = date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    const attendanceForDate = attendanceData.filter(entry => entry.date === dateKey);

    if (!attendanceForDate.length) return null;

    return (
      <div>
        {attendanceForDate.map((entry, index) => {
          const { status, color , } = getAttendanceStatus(entry.loginTime, entry.logoutTime);
          return (
            <div key={index} >
               {status}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      
      <Calendar 
        onChange={handleDateChange} 
        value={date} 
        tileContent={tileContent} 
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default AttendanceCalendar;
