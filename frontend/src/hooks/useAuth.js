// src/hooks/useAuth.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1].replace('-', '+').replace('_', '/')));
        setUser({ userId: payload.userId, email: payload.email });
      } catch (e) {
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token.startsWith('Bearer ') ? token : `Bearer ${token}`);
    try {
      const payload = JSON.parse(atob(token.split('.')[1].replace('-', '+').replace('_', '/')));
      setUser({ userId: payload.userId, email: payload.email });
    } catch (e) {
      console.error('Invalid token');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};