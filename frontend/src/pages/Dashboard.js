// src/pages/Dashboard.js
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 p-6 relative overflow-hidden">
      <h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-9xl font-extrabold text-transparent opacity-15 pointer-events-none select-none"
        style={{
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          zIndex: 1,
        }}
      >
        WorkFlowForge
      </h1>

      <div className="relative z-10 max-w-6xl mx-auto mt-20">
        <div className="bg-white/85 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/50">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">Welcome, {user?.email}!</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl transition transform hover:scale-105"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Specifications', desc: 'Define & manage project specs', color: 'from-blue-500 to-blue-600', to: '/specs' },
              { title: 'Reports', desc: 'View analytics & progress', color: 'from-purple-500 to-purple-600', to: '/reports' },
              { title: 'Team', desc: 'Collaborate in real-time', color: 'from-green-500 to-teal-600', to: '/team' }
            ].map((card, i) => (
              <div
                key={i}
                onClick={() => navigate(card.to)}
                className={`bg-gradient-to-br ${card.color} p-8 rounded-2xl text-white cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="mt-3 opacity-90">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;