import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://your-backend-url/admin/users');
      setUsers(response.data);
      prepareChartData(response.data);
    };
    fetchUsers();
  }, []);

  const prepareChartData = (users) => {
    const dates = users.map(user => new Date(user.lastLogin).toLocaleDateString());
    const counts = dates.reduce((acc, date) => {
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

    setChartData({
      labels: Object.keys(counts),
      datasets: [{
        label: 'User Count',
        data: Object.values(counts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }]
    });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Bar data={chartData} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Last Login</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{new Date(user.lastLogin).toLocaleString()}</td>
              <td>{user.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
