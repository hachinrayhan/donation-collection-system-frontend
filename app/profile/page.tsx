"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
  name: string;
  email: string;
  // Add additional properties as needed
}

const ProfilePage = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users/profile");
        setUserData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Render additional profile information here */}
    </div>
  );
};

export default ProfilePage;
