import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import './history.css'

const History = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaveTransaction = async () => {
      const id = localStorage.getItem("employee_id")
      try {
        const response = await fetch(
          "http://192.168.20.6:5000/employee/getleave",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ employee_id: id }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result);
        setLeaveHistory(result);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchLeaveTransaction();
  }, []);

  return (
    <div className="overflow">
      
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Leaves Id</TableCell>
              <TableCell align="center">Leave Type</TableCell>
              <TableCell align="center">Applied from</TableCell>
              <TableCell align="center">Applied to</TableCell>
              <TableCell align="center">Is approved</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveHistory.length > 0 ? (
              leaveHistory.map((leave, index) => (
                <TableRow
                  key={leave.leave_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" align="center" scope="row">
                    {leave.leave_id}
                  </TableCell>
                  <TableCell align="center">
                    {leave.leave_type || "N/A"}
                  </TableCell>
                  <TableCell align="center">
                    {leave.applied_from
                      ? leave.applied_from.split("T")[0]
                      : "N/A"}
                  </TableCell>
                  <TableCell align="center">
                    {leave.applied_to ? leave.applied_to.split("T")[0] : "N/A"}
                  </TableCell>
                  <TableCell align="center">{leave.is_approved}</TableCell>
                </TableRow>
              ))
            ) : (
              <p>No leave history found.</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default History;
