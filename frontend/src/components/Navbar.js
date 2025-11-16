// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useAuth } from '../hooks/useAuth';   // <-- the hook we created earlier

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Mobile menu toggle
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();               // clears localStorage + hook state
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Desktop Links */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-yellow-300">
            WorkFlowForge
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Dashboard
                </Link>
                <Link
                  to="/specs"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Specifications
                </Link>
                <Link
                  to="/reports"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Reports
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
        <DarkModeToggle />

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-gradient-to-r from-blue-700 to-purple-700 rounded-b-lg p-4">
          <div className="flex flex-col space-y-3">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Dashboard
                </Link>
                <Link
                  to="/specs"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Specifications
                </Link>
                <Link
                  to="/reports"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Reports
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="text-left hover:text-yellow-300 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;