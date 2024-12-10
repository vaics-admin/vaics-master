import React, { useState } from 'react';
import MUIForm from './form';
import './swipe.css';
import MUITable from './historyTable';
import ToBeRegularizedTable from './tobeRegularizeTable';

const Applyswipe = () => {
  const [selectedDate, setSelectedDate] = useState(''); // Shared state for selected date

  const handleRegularize = (date) => {
    setSelectedDate(date); // Update the selected date in the state
  };

  return (
    <div className="swipe-main-container">
      <div className="tabandcontent">
        <div className="swipe-content">
          <div className="to-be-reaularizes-container">
            {/* Pass the handleRegularize function to the table */}
            <ToBeRegularizedTable onRegularize={handleRegularize} />
          </div>
          
          <div className="div">
            {/* Pass the selectedDate to the form */}
            <MUIForm selectedDate={selectedDate} />
          </div>

          <div className="swipe-history-container">
            <MUITable />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Applyswipe;
