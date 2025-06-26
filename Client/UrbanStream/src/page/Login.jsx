import React from 'react';

function Login() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8082/oauth2/authorization/google';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '18px' }}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;