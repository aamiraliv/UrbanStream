import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8082/api/auth/me', { withCredentials: true })
      .then(response => {
        setUser(response.data);
      })
      .catch(() => {
        window.location.href = '/';
      });
  }, []);

  const handleLogout = () => {
    window.location.href = 'http://localhost:8082/logout';
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <img src={user.picture} alt="Profile" width="150" />
      <br /><br />
      <button onClick={handleLogout} style={{ padding: '10px 20px', fontSize: '18px' }}>
        Logout
      </button>
    </div>
  );
}

export default Home;