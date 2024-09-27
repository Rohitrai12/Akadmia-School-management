import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

const AdminProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  // State for managing images and edit mode
  const [profileImage, setProfileImage] = useState('');
  const [bannerImage, setBannerImage] = useState('');
  const [editMode, setEditMode] = useState(false);

  // Local states for editable fields
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [schoolName, setSchoolName] = useState(currentUser.schoolName);

  // Load images and profile data from localStorage on component mount
  useEffect(() => {
    const savedProfileImage = localStorage.getItem('profileImage');
    const savedBannerImage = localStorage.getItem('bannerImage');
    const savedName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('userEmail');
    const savedSchool = localStorage.getItem('userSchool');

    if (savedProfileImage) setProfileImage(savedProfileImage);
    if (savedBannerImage) setBannerImage(savedBannerImage);
    if (savedName) setName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedSchool) setSchoolName(savedSchool);
  }, []);

  // Handle image upload for profile and banner
  const handleImageUpload = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (imageType === 'profile') {
          setProfileImage(reader.result);
          localStorage.setItem('profileImage', reader.result);
        } else if (imageType === 'banner') {
          setBannerImage(reader.result);
          localStorage.setItem('bannerImage', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle Edit Mode
  const handleEditToggle = () => {
    setEditMode((prev) => !prev);
    if (editMode) {
      // Save any changes made to fields when exiting edit mode
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userSchool', schoolName);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg border border-gray-200">
        {/* Banner Section */}
        <div className="relative">
          <div className="h-40 rounded-t-lg overflow-hidden">
            <img
              src={bannerImage || 'https://via.placeholder.com/900x150'}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <label
              htmlFor="bannerInput"
              className="absolute inset-0 bg-black bg-opacity-60 text-white flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              Change Banner
            </label>
            <input
              id="bannerInput"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'banner')}
            />
          </div>

          {/* Profile Image */}
          <div className="absolute -bottom-16 left-8">
            <div className="relative group">
              <img
                className="h-32 w-32 rounded-full object-cover border-4 border-white"
                src={profileImage || 'https://via.placeholder.com/150'}
                alt="Profile"
              />
              <label
                htmlFor="profileInput"
                className="absolute inset-0 bg-black bg-opacity-60 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer"
              >
                Change
              </label>
              <input
                id="profileInput"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'profile')}
              />
            </div>
          </div>
        </div>

        {/* Profile Details Section */}
        <div className="pt-20 pb-6 px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditToggle}
              className="mt-2"
            >
              {editMode ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>
          
          {/* Editable Form */}
          <div className="space-y-4 mt-6">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-700">Name:</span>
              {editMode ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="ml-2 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                <span className="text-gray-600">{name}</span>
              )}
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-700">Email:</span>
              {editMode ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ml-2 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                <span className="text-gray-600">{email}</span>
              )}
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-700">School:</span>
              {editMode ? (
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="ml-2 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
                />
              ) : (
                <span className="text-gray-600">{schoolName}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
