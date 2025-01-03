import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PasswordChange() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    // Fetch the list of users (no token required)
    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then((response) => {
                console.log('Fetched users:', response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                setMessage('Error fetching users');
                console.error(error);
            });
    }, []);

    const handlePasswordChange = async () => {
        if (!selectedUser || !newPassword) {
            setMessage('Please select a user and enter a new password');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/reset-password', {
                userId: selectedUser,
                newPassword,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error resetting password');
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <label>Select User:</label>
                {users.length === 0 ? (
                    <p>{message || 'Loading users...'}</p>
                ) : (
                    <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
                        <option value="">Select User</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>{user.username}</option>
                        ))}
                    </select>
                )}
            </div>
            <div>
                <label>New Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <button onClick={handlePasswordChange}>Reset Password</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default PasswordChange;
