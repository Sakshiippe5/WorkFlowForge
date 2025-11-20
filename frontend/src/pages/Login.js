// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage('');

  try {
    const response = await axios.post('http://localhost:5000/login', {
      email,
      password
    });

    const token = response.data.token;

    // THIS IS THE KEY: Save token + update auth context
    localStorage.setItem('token', `Bearer ${token}`);
    login(token);  // ← This comes from useAuth() – MUST call this!

    setMessage('Login successful! Redirecting...');
    
    // Redirect to dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);

  } catch (error) {
    setMessage(error.response?.data?.message || 'Login failed');
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* === PROJECT NAME BEHIND (LARGE, BLURRED, SEMI-TRANSPARENT) === */}
      <h1
        className="absolute inset-0 flex items-center justify-center text-9xl md:text-10xl font-extrabold text-white opacity-10 pointer-events-none select-none"
        style={{
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'blur(1px)',
          zIndex: 1,
        }}
      >
        WorkFlowForge
      </h1>

      {/* === FLOATING SHAPES (OPTIONAL – KEEP IF YOU LIKE) === */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-16 left-12 w-36 h-36 bg-blue-300 rounded-full opacity-15 animate-float"></div>
        <div className="absolute bottom-24 right-16 w-44 h-44 bg-purple-400 rounded-full opacity-10 animate-float-delay"></div>
        <div className="absolute top-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-xl opacity-15 animate-float-reverse"></div>
      </div>

      {/* === LOGIN FORM – NO WHITE BOX, GLASS CARD === */}
      <div className="relative z-10 w-full max-w-sm">
        <form onSubmit={handleLogin} className="space-y-5 bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/40">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition placeholder-gray-500"
            required
            disabled={loading}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition placeholder-gray-500"
            required
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 disabled:opacity-70"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-center text-sm font-medium ${message.includes('failed') ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}

        <p className="mt-5 text-center text-sm text-gray-700">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;