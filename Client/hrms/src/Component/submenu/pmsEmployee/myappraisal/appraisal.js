import React, { useState } from 'react';
import './AppraisalForm.css';

const AppraisalForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '',
    department: '',
    jobTitle: '',
    appraisalYear: '',
    performanceRating: '',
    strengths: '',
    areasOfImprovement: '',
    goals: '',
    feedback: '',
  });

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Appraisal form submitted successfully!');
    // You can add logic to send data to an API here.
  };

  return (
    <div className="appraisal-form-container">
      <h2>Employee Appraisal Form</h2>
      <form onSubmit={handleSubmit} className="appraisal-form">
        <div className="form-group">
          <label htmlFor="employeeName">Employee Name:</label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="employeeId">Employee ID:</label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appraisalYear">Appraisal Year:</label>
          <input
            type="number"
            id="appraisalYear"
            name="appraisalYear"
            value={formData.appraisalYear}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="performanceRating">Performance Rating (1-5):</label>
          <select
            id="performanceRating"
            name="performanceRating"
            value={formData.performanceRating}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Below Average</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="strengths">Employee Strengths:</label>
          <textarea
            id="strengths"
            name="strengths"
            value={formData.strengths}
            onChange={handleInputChange}
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="areasOfImprovement">Areas for Improvement:</label>
          <textarea
            id="areasOfImprovement"
            name="areasOfImprovement"
            value={formData.areasOfImprovement}
            onChange={handleInputChange}
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="goals">Goals for Next Year:</label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Additional Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            rows="3"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="reset" className="reset-btn">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default AppraisalForm;
