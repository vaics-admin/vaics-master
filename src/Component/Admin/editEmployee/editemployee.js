import React, { useState, useEffect } from "react";
import axios from "axios";

const EditEmployee = ({ employeeId }) => {
  const [employee, setEmployee] = useState({
    
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Fetch Employee Data by ID
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://192.168.20.6:5000/api/employees`);
        setEmployee(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch employee data");
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/employees/${employeeId}`, employee);
      setSuccess(true);
    } catch (err) {
      setError("Failed to update employee details");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(employee)

  return (
    <div className="edit-employee-container">
      <h2>Edit Employee Profile</h2>
      {success && <p style={{ color: "green" }}>Employee updated successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee[0].full_name}
            onChange={(event) => setEmployee()}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee[0].email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={employee[0].department}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={employee[0].job_title}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;
