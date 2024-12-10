import { color } from "@mui/system";
import "./leaveforms.css";
import { useState } from "react";


export const Leaveforms = () => {
  // State to store leave request details
  const [leaveDetails, setleaveDetails] = useState({
    fromDate: "",
    toDate: "",
    leaveType: "",
    reason: "",
    reasonText: "",
    // document: null,
    employee_id: localStorage.getItem("employee_id"),
  });

  // State to store message
  const [msg, setMsg] = useState("");

  // Handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update state for file input
    if (event.target.type === "file") {
      // setleaveDetails({
      //   ...leaveDetails,
      //   [name]: event.target.files[0], // store file object
      // });
    } else {
      // Update state for other inputs
      setleaveDetails({
        ...leaveDetails,
        [name]: value,
      });
    }
  };

  // Form submission handler
  const submitLeaveRequest = async (event) => {
    event.preventDefault();
    console.log(leaveDetails)

    
    // Perform actions like form submission or API calls here
    try {
      const response = await fetch("http://192.168.20.6:5000/applyLeave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leaveDetails),
      });

      if (response.ok) {
        setleaveDetails({
          fromDate: "",
          toDate: "",
          leaveType: "",
          reason: "",
          reasonText: "",
          // document: null,
          employee_id: localStorage.getItem("employee_id"),
        });
        setMsg("Applied Successfully!");
      } else {
        setMsg("Error submitting the leave request.");
      }
    } catch (error) {
      setMsg("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="leave-form-container">
      <form onSubmit={submitLeaveRequest} className="leave-form">
        {/* Row 1: From and To date inputs */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="from-date">From</label>
            <input
              type="date"
              id="from-date"
              name="fromDate"
              value={leaveDetails.fromDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="to-date">To</label>
            <input
              type="date"
              id="to-date"
              name="toDate"
              value={leaveDetails.toDate}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 2: Select Leave Type and Reason */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="leave-type">Select Leave Type</label>
            <select
              id="leave-type"
              name="leaveType"
              value={leaveDetails.leaveType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
              <option value="vacation">Vacation Leave</option>
              <option value="Earned Leave">Earned Leave</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="reason">Select Reason</label>
            <select
              id="reason"
              name="reason"
              value={leaveDetails.reason}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="medical">Medical</option>
              <option value="family">Family Emergency</option>
              <option value="personal">Personal</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Row 3: Reason for Leave (Text Area) */}
        <div className="form-row">
          <div className="form-group text-area-group">
            <label htmlFor="reason-text">Reason for Leave</label>
            <textarea
              id="reason-text"
              name="reasonText"
              rows="4"
              placeholder="Enter the reason for leave"
              value={leaveDetails.reasonText}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* Row 4: Document Upload */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="document">Upload Supporting Document</label>
            <input
              type="file"
              id="document"
              name="document"
              onChange={handleChange}
            />
            <p style={{ color: msg === "Applied Successfully!" ? "green" : "red" }}>
              {msg}
            </p>
          </div>
        </div>

        {/* Row 5: Submit Button */}
        <div className="form-row">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};



const restrictedHolidays = [
  { date: "2024-01-14", occasion: "Makar Sankranti" },
  { date: "2024-01-26", occasion: "Republic Day" },
  { date: "2024-03-08", occasion: "Holi" },
  { date: "2024-04-14", occasion: "Dr. Ambedkar Jayanti" },
  { date: "2024-04-21", occasion: "Ramadan Eid" },
  { date: "2024-05-01", occasion: "Labor Day" },
  { date: "2024-05-23", occasion: "Buddha Purnima" },
  { date: "2024-07-17", occasion: "Muharram" },
  { date: "2024-08-15", occasion: "Independence Day" },
  { date: "2024-10-02", occasion: "Gandhi Jayanti" },
  { date: "2024-10-31", occasion: "Halloween" },
  { date: "2024-11-01", occasion: "All Saints' Day" },
  { date: "2024-12-25", occasion: "Christmas" },
];

// Filter holidays to include only future dates
const getFutureHolidays = () => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  return restrictedHolidays.filter((holiday) => holiday.date >= today);
};

export const Restrictedholidayform = () => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    leaveType: "Restricted Holiday",
    reason: "",
    reasonText: "",
    // document: null,
    employee_id: localStorage.setItem("employee_id"),
  });

  const futureHolidays = getFutureHolidays();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      toDate : formData.fromDate
    });
  };

  

  const submitRestrictedHoliday = async (event) =>{
    event.preventDefault()
    // console.log(formData)
    let leaveDetails = {...formData}
        console.log( leaveDetails)
    
    try {
      const response = await fetch("http://localhost:5000/applyLeave", {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(leaveDetails )
      })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="res-container">
      <form onSubmit = {submitRestrictedHoliday} className="leave-form" >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="select-date">Select Date</label>
            <select
              id="select-date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
            >
              <option value="">Select Date</option>
              {futureHolidays.map((holiday) => (
                <option key={holiday.date} value={holiday.date}>
                  {holiday.date} - {holiday.occasion}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="select-reason">Select Reason</label>
            <select
              id="select-reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            >
              <option value="">Select Reason</option>
              <option value="medical">Medical</option>
              <option value="family">Family Emergency</option>
              <option value="personal">Personal</option>
              <option value="Going Home">Going Home</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group text-area-group">
            <label htmlFor="reason-text">Reason for Leave</label>
            <textarea
              id="reason-text"
              name="reasonText"
              rows="4"
              placeholder="Enter the reason for leave"
              value={formData.reasonText}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="res-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
