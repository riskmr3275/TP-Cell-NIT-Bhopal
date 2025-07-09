import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changePassword, } from "../services/operations/Profile";
import { uploadProfileImage } from "../services/operations/Profile";
  import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate=useNavigate()

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { oldPassword, newPassword, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  

  const handleImageUpload = async () => {
    if (!selectedImage) return alert("Please select an image");
  
    const imageData = new FormData();
    imageData.append("displayPicture", selectedImage);
  
    console.log("Uploading image:", selectedImage.name); // Debug
    console.log("Formdata from profile rexr",formData,token)
    
    dispatch(uploadProfileImage(imageData, token, navigate));
  };
  
  
  console.log("Formdata from profile rexr",formData,token)
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      alert("Password must be of at least eight characters");
      return;
    }
    dispatch(changePassword(formData, token));
  };

  return (
    <div className="flex justify-between min-h-screen w-full bg-gray-100">
      <div className="w-full bg-white rounded-lg shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex flex-col gap-1 p-3 bg-blue-400 rounded-lg shadow-xl text-white">
          <h2 className="text-2xl font-bold ">{user?.name}</h2>
          <p className="text-sm font-semibold mt-1">
            Started on {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center justify-between">
          {/* Profile Details */}
          <div className="mt-6 p-5 w-[80%]">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600 font-semibold">Mobile No.:</span>
              <span className="text-gray-700">+91-{user?.phone}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600 font-semibold">Email:</span>
              <span className="text-gray-700">{user?.email}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600 font-semibold">
                Account Creation:
              </span>
              <span className="text-gray-700">
                {new Date(user.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600 font-semibold">Last Login:</span>
              <span className="text-gray-700">
                {new Date(user.last_login).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600 font-semibold">Role:</span>
              <span className="text-gray-700">{user?.accountType}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600 font-semibold">Roll No.:</span>
              <span className="text-gray-700">MCA/{user.user_id}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600 font-semibold">Reg. No.:</span>
              <span className="text-gray-700">
                NITB-MCA2023{user.user_id}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600 font-semibold">
                Account Status:
              </span>
              <span className="text-green-600 font-semibold">Active</span>
            </div>
          </div>
          {/* Right Section: Profile Picture */}
          <div className="w-[20%] flex flex-col items-center justify-center p-6">
            <img
              src={user?.photo_url || "default-profile.jpg"} // fallback image
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover shadow-lg"
            />
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-4 items-center"
            />
            <button
              className="mt-4 p-2 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
              onClick={handleImageUpload}
            >
              Upload Image
            </button>
          </div>
        </div>
        {/* Change Password */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Change Password
          </h3>
          <div className="space-y-3">
            <input
              type="password"
              name="oldPassword"
              value={oldPassword}
              onChange={handleOnChange}
              placeholder="Enter Old Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={handleOnChange}
              placeholder="Enter New Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              className="w-max p-6 bg-blue-950 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
