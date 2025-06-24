import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleManualLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '123456') {
      localStorage.setItem('user', JSON.stringify({ email }));
      alert('✅ Manual login successful');
      navigate('/home');
    } else {
      alert('❌ Invalid email or password');
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Google login success:', decoded);
      localStorage.setItem('user', JSON.stringify(decoded)); // must use 'user'
      alert('✅ Google login successful');
      navigate('/home');
    } catch (err) {
      console.error('Decode failed:', err);
      alert('❌ Failed to decode Google token');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <form
        onSubmit={handleManualLogin}
        className="border p-4 rounded shadow mb-4"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <h3 className="text-center mb-3">Login</h3>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn btn-primary w-100" type="submit">
          Login with Email
        </button>
      </form>

      
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => alert('❌ Google login failed')}
      />
    </div>
  );
};

export default Loginpage;
