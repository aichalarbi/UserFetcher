import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []); 

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>List of Users</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Username:</strong> {user.username} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Street Address:</strong> {user.address.street} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
