import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'; // For animations
import './TicketForm.css';

const TicketForm = () => {
    const [ticketType, setTicketType] = useState('Request');
    const [severity, setSeverity] = useState('Medium');
    const [issue, setIssue] = useState('');
    const [department, setDepartment] = useState('');
    const [requestCompleteBefore, setRequestCompleteBefore] = useState('');
    const [primaryContact, setPrimaryContact] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const today = new Date();
        const fiveDaysLater = new Date(today);
        fiveDaysLater.setDate(today.getDate() + 5);
        const formattedDate = fiveDaysLater.toISOString().split('T')[0];
        setRequestCompleteBefore(formattedDate);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!issue || !department || !primaryContact) {
            alert("Please fill out all required fields.");
            return;
        }

        const ticketData = {
            ticketType,
            severity,
            issue,
            department,
            requestCompleteBefore,
            primaryContact,
            attachment: attachment ? attachment.name : null,
        };

        try {
            setIsSubmitting(true);
            const response = await axios.post('http://localhost:5000/api/tickets', ticketData);
            alert('Ticket submitted successfully!');
            console.log('Submitted ticket details:', response.data);
            resetForm();
        } catch (error) {
            console.error('Error submitting ticket:', error);
            alert('Error submitting ticket. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setTicketType('Request');
        setSeverity('Medium');
        setIssue('');
        setDepartment('');
        setRequestCompleteBefore('');
        setPrimaryContact('');
        setAttachment(null);
    };

    return (
        <motion.div
            className="ticket-form-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Raise a Ticket</h2>
            <form
                onSubmit={handleSubmit}
                className="ticket-form"
            >
                <div className="form-group">
                    <label>Ticket Type:</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="ticketType"
                                value="Request"
                                checked={ticketType === 'Request'}
                                onChange={(e) => setTicketType(e.target.value)}
                            /> Request
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="ticketType"
                                value="Complaint"
                                checked={ticketType === 'Complaint'}
                                onChange={(e) => setTicketType(e.target.value)}
                            /> Complaint
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Severity:</label>
                    <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Issue:</label>
                    <textarea value={issue} onChange={(e) => setIssue(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label>Department:</label>
                    <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                        <option value="">Select</option>
                       
                        <option value="HR">HR</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Request Complete Before:</label>
                    <input
                        type="date"
                        value={requestCompleteBefore}
                        onChange={(e) => setRequestCompleteBefore(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Primary Contact:</label>
                    <input
                        type="text"
                        value={primaryContact}
                        onChange={(e) => setPrimaryContact(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Attachment:</label>
                    <input
                        type="file"
                        onChange={(e) => setAttachment(e.target.files[0])}
                    />
                </div>

                <div className="form-group">
                    <motion.button
                        type="submit"
                        className="submit-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                    </motion.button>
                </div>
            </form>
        </motion.div>
    );
};

export default TicketForm;
