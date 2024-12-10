import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const data = [
  { id: 1, name: 'John Doe', date: '2024-12-01', status: 'Approved' },
  { id: 2, name: 'Jane Smith', date: '2024-12-02', status: 'Pending' },
  { id: 3, name: 'Robert Johnson', date: '2024-12-03', status: 'Rejected' },
];

const MUITable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "100%", margin: 'auto', mt: 4, borderRadius: 3 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Employee Swipe History
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MUITable;
