import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Typography,
} from '@mui/material';

const MUIForm = ({ selectedDate }) => {
  const [formData, setFormData] = useState({
    swipeDate: '',
    swipeType: '',
    inTime: '',
    outTime: '',
    reason: '',
    selectReason: '',
  });

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, swipeDate: selectedDate })); // Update date field
  }, [selectedDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: 0,
        p: 4,
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: 2,
        bgcolor: '#f9f9f9',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Swipe Request Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="For Date"
          type="date"
          name="swipeDate"
          value={formData.swipeDate}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />

        <FormControl sx={{ mb: 2 }} component="fieldset">
          <FormLabel component="legend">Swipe Type</FormLabel>
          <RadioGroup
            row
            name="swipeType"
            value={formData.swipeType}
            onChange={handleChange}
          >
            <FormControlLabel value="in" control={<Radio />} label="In Swipe" />
            <FormControlLabel value="out" control={<Radio />} label="Out Swipe" />
            <FormControlLabel value="inOut" control={<Radio />} label="In and Out Swipe" />
          </RadioGroup>
        </FormControl>

        {formData.swipeType === 'in' || formData.swipeType === 'inOut' ? (
          <TextField
            label="In Time"
            type="time"
            name="inTime"
            value={formData.inTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />
        ) : null}

        {formData.swipeType === 'out' || formData.swipeType === 'inOut' ? (
          <TextField
            label="Out Time"
            type="time"
            name="outTime"
            value={formData.outTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />
        ) : null}

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="select-reason-label">Select Reason</InputLabel>
          <Select
            labelId="select-reason-label"
            name="selectReason"
            value={formData.selectReason}
            onChange={handleChange}
          >
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default MUIForm;
