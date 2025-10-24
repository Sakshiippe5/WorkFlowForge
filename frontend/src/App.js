import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-100 h-screen p-4">
      <h1 className="text-4xl font-bold text-blue-600">WorkFlowForge</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.email}</li>)}
      </ul>
    </div>
  );
}

export default App;