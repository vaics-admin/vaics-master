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
  Button,
} from '@mui/material';

const toBeRegularizedData = [
  { id: 1, date: '2024-11-02', inTime: '09:15', outTime: '17:40' },
  { id: 2, date: '2024-11-04', inTime: '09:50', outTime: '18:40' },
  { id: 3, date: '2024-11-07', inTime: '11:00', outTime: '19:40' },
];

const ToBeRegularizedTable = ({ onRegularize }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "90%", mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        To Be Regularized
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">S.No</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">In Time</TableCell>
            <TableCell align="center">Out Time</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {toBeRegularizedData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.inTime}</TableCell>
              <TableCell align="center">{row.outTime}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => onRegularize([row.date , row.id])} // Pass the date to the handler
                >
                  Regularize
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToBeRegularizedTable;
