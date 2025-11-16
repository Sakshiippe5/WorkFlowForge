// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await axios.post('http://localhost:5000/signup', { email, password });
      setMessage('Account created! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (error) {
      setMessage('Signup failed: ' + (error.response?.data?.message || 'Server error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center p-6 relative overflow-hidden">

      {/* Project Name Behind */}
      <h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl font-extrabold text-transparent whitespace-nowrap pointer-events-none select-none"
        style={{
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: 0.15,
          zIndex: 1,
        }}
      >
        WorkFlowForge
      </h1>

      <div className="relative z-10 w-full max-w-sm">
        <form onSubmit={handleSignup} className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-white/50">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-3 mb-4 bg-white/70 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            required
            disabled={loading}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 mb-6 bg-white/70 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            required
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 rounded-xl hover:from-green-600 hover:to-teal-700 transition"
          >
            {loading ? 'Creating...' : 'Sign Up'}
          </button>

          {message && (
            <p className={`mt-4 text-center text-sm font-medium ${message.includes('failed') ? 'text-red-600' : 'text-green-600'}`}>
              {message}
            </p>
          )}

          <p className="mt-5 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline font-semibold">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;