import React from 'react';
import axios from 'axios';

const DownloadLeaveHistory = () => {
  const handleDownload = async () => {
    try {
      // Make a GET request to fetch the file
      const response = await axios.get('http://localhost:5000/leave-history/download', {
        responseType: 'blob', // Important to handle file downloads
      });

      // Create a URL for the blob object
      const url = window.URL.createObjectURL(new Blob([response.data]));
      
      // Create an invisible link element
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'leave_history.csv'); // Set the file name
      
      // Programmatically trigger the download
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download leave history. Please try again.');
    }
  };

  return (
    <div>
      <h3>Download Employee Leave History</h3>
      <button onClick={handleDownload} style={buttonStyle}>
        Download CSV
      </button>
    </div>
  );
};

// Simple inline styles for the button
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007BFF',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default DownloadLeaveHistory;
