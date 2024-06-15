import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig'; 
import './Profile.css';

const Profile = ({ user }) => {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axiosInstance.get(`/history/${user.id}`);
        setHistory(response.data);
      } catch (err) {
        console.error('Failed to fetch history', err);
      }
    };

    fetchHistory();
  }, [user.id]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/profile/${user.id}`, { email, password });
      setSuccess('Profile updated successfully');
      setError('');
    } catch (err) {
      setError('Update failed');
      setSuccess('');
    }
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleUpdateProfile}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update Profile</button>
      </form>
      <h3>History</h3>
      <ul>
        {history.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
