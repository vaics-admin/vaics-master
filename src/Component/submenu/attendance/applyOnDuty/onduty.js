import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel, Grid, Paper } from '@mui/material';
import './onduty.css';

const Onduty = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [reason, setReason] = useState("");
    const [timeFrom, setTimeFrom] = useState("");
    const [timeTo, setTimeTo] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [filterFrom, setFilterFrom] = useState("");
    const [filterTo, setFilterTo] = useState("");
    const [filterReason, setFilterReason] = useState("");
    const [radioSelection, setRadioSelection] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with data:", {
            fromDate,
            toDate,
            reason,
            timeFrom,
            timeTo,
            description,
        });
    };

    const handleReset = () => {
        setFromDate("");
        setToDate("");
        setReason("");
        setTimeFrom("");
        setTimeTo("");
        setDescription("");
    };

    return (
        <div className="onduty-container">
            <Grid container spacing={3}>
                {/* Left Side: New Request Form */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} className="onduty-paper">
                        <p className="heading-new-request">New Request</p>
                        <form className="onduty-apply-form" onSubmit={handleFormSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="From Date"
                                        type="date"
                                        value={fromDate}
                                        onChange={(e) => setFromDate(e.target.value)}
                                        className="on-duty-input"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="To Date"
                                        type="date"
                                        value={toDate}
                                        onChange={(e) => setToDate(e.target.value)}
                                        className="on-duty-input"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="select-reason-label">Select Reason</InputLabel>
                                        <Select
                                            labelId="select-reason-label"
                                            id="select-reason"
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            className="on-duty-input"
                                        >
                                            <MenuItem value="" disabled>Select an option</MenuItem>
                                            <MenuItem value="Option 1">Option 1</MenuItem>
                                            <MenuItem value="Option 2">Option 2</MenuItem>
                                            <MenuItem value="Option 3">Option 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="From Time"
                                        type="time"
                                        value={timeFrom}
                                        onChange={(e) => setTimeFrom(e.target.value)}
                                        className="on-duty-input"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="To Time"
                                        type="time"
                                        value={timeTo}
                                        onChange={(e) => setTimeTo(e.target.value)}
                                        className="on-duty-input"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Reason"
                                        multiline
                                        rows={4}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="on-duty-input"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>

                            <Button type="submit" variant="contained" color="primary" className="submit-add-employee">
                                Submit Request
                            </Button>
                        </form>
                    </Paper>
                </Grid>

                {/* Right Side: Filter Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} className="onduty-paper">
                        <p className="heading-new-request">Filter Requests</p>
                        <div className="filter-inputs">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="From"
                                        type="date"
                                        value={filterFrom}
                                        onChange={(e) => setFilterFrom(e.target.value)}
                                        className="filter-input"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="To"
                                        type="date"
                                        value={filterTo}
                                        onChange={(e) => setFilterTo(e.target.value)}
                                        className="filter-input"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="select-status-label">Select Status</InputLabel>
                                        <Select
                                            labelId="select-status-label"
                                            id="select-status"
                                            value={filterReason}
                                            onChange={(e) => setFilterReason(e.target.value)}
                                            className="filter-input"
                                        >
                                            <MenuItem value="" disabled>Select an option</MenuItem>
                                            <MenuItem value="Option 1">Option 1</MenuItem>
                                            <MenuItem value="Option 2">Option 2</MenuItem>
                                            <MenuItem value="Option 3">Option 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Request Filter</FormLabel>
                                        <RadioGroup
                                            value={radioSelection}
                                            onChange={(e) => setRadioSelection(e.target.value)}
                                        >
                                            <FormControlLabel
                                                value="all-pending-requests"
                                                control={<Radio />}
                                                label="All pending requests"
                                            />
                                            <FormControlLabel
                                                value="all-requests"
                                                control={<Radio />}
                                                label="All requests"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} justifyContent="space-between">
                                <Grid item>
                                    <Button variant="contained" color="primary" className="search">
                                        Search
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        className="reset"
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </Grid>
            </Grid>

            <div className="notification-history">
                <h1>Notification History</h1>
                {/* Add notification history display logic here */}
            </div>
        </div>
    );
};

export default Onduty;
