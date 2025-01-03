import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Radio, RadioGroup, FormControlLabel, FormLabel, Grid, Paper } from '@mui/material';
import './mobile.css';

const Mobilework = () => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [reason, setReason] = useState("");
    const [filterFrom, setFilterFrom] = useState("");
    const [filterTo, setFilterTo] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [radioSelection, setRadioSelection] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form data:", { fromDate, toDate, startTime, endTime, reason });
    };

    const handleReset = () => {
        setFromDate("");
        setToDate("");
        setStartTime("");
        setEndTime("");
        setReason("");
        setFilterFrom("");
        setFilterTo("");
        setFilterStatus("");
    };

    return (
        <div className="mobile-work-main-container">
            <Grid container spacing={3}>
                {/* Left Side: New Request Form */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} className="mobile-request-paper">
                        <p className="new-mobile-request-head">New Request</p>
                        <form className="mobile-request-input-form" onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="From Date"
                                        type="date"
                                        value={fromDate}
                                        onChange={(e) => setFromDate(e.target.value)}
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        className="mobile-input"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="To Date"
                                        type="date"
                                        value={toDate}
                                        onChange={(e) => setToDate(e.target.value)}
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        className="mobile-input"
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Start Time"
                                        type="time"
                                        value={startTime}
                                        onChange={(e) => setStartTime(e.target.value)}
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        className="mobile-input"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="End Time"
                                        type="time"
                                        value={endTime}
                                        onChange={(e) => setEndTime(e.target.value)}
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        className="mobile-input"
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Reason"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        className="mobile-input"
                                    />
                                </Grid>
                            </Grid>

                            <Button type="submit" variant="contained" color="primary" className="submit-button">
                                Submit 
                            </Button>
                        </form>
                    </Paper>
                </Grid>

                {/* Right Side: Filter Section */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} className="mobile-request-paper">
                        <p className="new-mobile-request-head">Filter Requests</p>
                        <div className="filter-container">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="From"
                                        type="date"
                                        value={filterFrom}
                                        onChange={(e) => setFilterFrom(e.target.value)}
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        className="filter-input"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="To"
                                        type="date"
                                        value={filterTo}
                                        onChange={(e) => setFilterTo(e.target.value)}
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        className="filter-input"
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
                                            value={filterStatus}
                                            onChange={(e) => setFilterStatus(e.target.value)}
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
                                    <Button variant="contained" color="primary" className="search-button">
                                        Search
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="secondary" onClick={handleReset} className="reset-button">
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

export default Mobilework;
