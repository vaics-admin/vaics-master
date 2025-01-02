import React, { useState, useEffect } from 'react';
import './index.css';

const ResignationForm = () => {
  // Set the resignation date to the current date by default
  const today = new Date().toISOString().split('T')[0];
  const [resignationDate, setResignationDate] = useState(today);  // Set current date as default
  const [relievingDate, setRelievingDate] = useState('');
  const [personalContact, setPersonalContact] = useState('');
  const [remarks, setRemarks] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [resignationType, setResignationType] = useState('voluntary');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [allCommunicationAddress, setAllCommunicationAddress] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');

  // Bank details state
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  // Proposed working day state
  const [proposedWorkingDay, setProposedWorkingDay] = useState('');

  useEffect(() => {
    const date = new Date(resignationDate);
    date.setDate(date.getDate() + 90);  // Set relieving date to 90 days after resignation date
    setRelievingDate(date.toISOString().split('T')[0]); // Set calculated relieving date
  }, [resignationDate]);

  const handleFileChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  const handleApply = async (e) => {
    e.preventDefault();

    const resignationData = {
      resignationDate,
      relievingDate,
      resignationType,
      reasonForLeaving: [
        document.getElementById('career-growth').checked ? 'Career Growth' : null,
        document.getElementById('higher-education').checked ? 'Higher Education' : null,
      ].filter(Boolean).join(', '),
      permanentAddress,
      allCommunicationAddress,
      personalEmail,
      personalContact,
      remarks,
      attachment: attachment ? attachment.name : null, // Store just the name or signature of the upload
      // Add Bank details and Proposed working day
      bankAccountNumber,
      bankName,
      ifscCode,
      proposedWorkingDay,
    };

    try {
      const formData = new FormData();
      Object.keys(resignationData).forEach(key => {
        formData.append(key, resignationData[key]);
      });
      if (attachment) {
        formData.append('attachment', attachment);
      }

      const response = await fetch('http://localhost:5000/api/resignation', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Application submitted successfully!');
      } else {
        alert('Failed to submit application.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again later.');
    }
  };

  const handleBack = () => {
    alert('Navigating back!');
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Resignation Form</h1>
      <form onSubmit={handleApply} className="resignation-form">
        <div className="form-section">
          <h2 className="section-title">Personal Information</h2>
          <div className="form-group">
            <label htmlFor="resignation-date">Resignation Date:</label>
            <input
              type="date"
              id="resignation-date"
              value={resignationDate}
              min={today}  // Ensure the user can't select a date before today
              onChange={(e) => setResignationDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="relieving-date">Relieving Date (As Per Policy):</label>
            <input
              type="text"
              id="relieving-date"
              value={relievingDate}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="personal-contact">Personal Contact:</label>
            <input
              type="tel"
              id="personal-contact"
              value={personalContact}
              onChange={(e) => setPersonalContact(e.target.value)}
              placeholder="Enter your contact number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="personal-email">Personal Email:</label>
            <input
              type="email"
              id="personal-email"
              value={personalEmail}
              onChange={(e) => setPersonalEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Reason for Leaving</h2>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="career-growth"
              onChange={() => {}}
            />
            <label htmlFor="career-growth">Career Growth</label>
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="higher-education"
              onChange={() => {}}
            />
            <label htmlFor="higher-education">Higher Education</label>
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Address Details</h2>
          <div className="form-group">
            <label htmlFor="permanent-address">Permanent Address:</label>
            <input
              type="text"
              id="permanent-address"
              value={permanentAddress}
              onChange={(e) => setPermanentAddress(e.target.value)}
              placeholder="Enter your permanent address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="all-communication-address">All Communication Address:</label>
            <input
              type="text"
              id="all-communication-address"
              value={allCommunicationAddress}
              onChange={(e) => setAllCommunicationAddress(e.target.value)}
              placeholder="Enter your communication address"
            />
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Bank Details</h2>
          <div className="form-group">
            <label htmlFor="bank-account-number">Bank Account Number:</label>
            <input
              type="text"
              id="bank-account-number"
              value={bankAccountNumber}
              onChange={(e) => setBankAccountNumber(e.target.value)}
              placeholder="Enter your bank account number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bank-name">Bank Name:</label>
            <input
              type="text"
              id="bank-name"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder="Enter your bank's name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ifsc-code">IFSC Code:</label>
            <input
              type="text"
              id="ifsc-code"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              placeholder="Enter your bank's IFSC code"
            />
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Additional Details</h2>
          <div className="form-group">
            <label htmlFor="remarks">Remarks:</label>
            <textarea
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Any additional remarks"
            />
          </div>

          <div className="form-group">
            <label htmlFor="attachment">Attach File:</label>
            <input
              type="file"
              id="attachment"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="proposed-working-day">Proposed Last Working Day:</label>
            <input
              type="date"
              id="proposed-working-day"
              value={proposedWorkingDay}
              onChange={(e) => setProposedWorkingDay(e.target.value)}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Submit Application</button>
          <button type="button" onClick={handleBack} className="back-btn">Back</button>
        </div>
      </form>
    </div>
  );
};

export default ResignationForm;
