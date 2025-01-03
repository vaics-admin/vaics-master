import React, { useState } from 'react';
import axios from 'axios';

const ProfilePictureUpload = () => {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('profile_picture', file);
        formData.append('username', username);

        try {
            const response = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data);
        } catch (error) {
            console.error('There was an error uploading the file!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username: 
                    <input type="text" value={username} onChange={handleUsernameChange} required />
                </label>
            </div>
            <div>
                <label>
                    Upload Profile Picture: 
                    <input type="file" onChange={handleFileChange} required />
                </label>
            </div>
            <button type="submit">Upload</button>
        </form>
    );
};

export default ProfilePictureUpload;
