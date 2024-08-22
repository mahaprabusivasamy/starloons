import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        const response = await axios.get(`https://your-backend-url/profile/${storedUser.email}`);
        setUser(response.data);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
}

export default Profile;
