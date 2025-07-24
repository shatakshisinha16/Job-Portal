import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/profile/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <p className="profile-page">Loading profile...</p>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2 className="profile-heading">My Profile</h2>
        <p className="profile-info">
          <strong>ID:</strong> {profile.id}
        </p>
        <p className="profile-info">
          <strong>Username:</strong> {profile.username}
        </p>
        <p className="profile-info">
          <strong>Email:</strong> {profile.email}
        </p>
        <div className="text-center">
          <button className="profile-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
