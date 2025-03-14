import React from "react";
import TextInput from "../components/inputs/TextInput";
import { useAuth } from "../context/AuthContext";

const ProfileForm = () => {
     const {user}=useAuth()
     console.log(user);
     
    
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{user?.name||'Guest'}</h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Edit</button>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-gray-600">Full Name</label>
          <TextInput
            type="text"
            placeholder="Your  Name"
            value={user?.name||"Guest"}
          />
        </div>
        <div>
          <label className="block text-gray-600">Nick Name</label>
          <TextInput
            type="text"
            placeholder="Email Address"
            value={user?.email}
          />
        </div>
        <div>
          <label className="block text-gray-600">Gender</label>
          <select className="w-full p-3 border-b-2 border-gray-300 bg-gray-100 rounded-md focus:border-blue-600 focus:outline-none">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600">Country</label>
          <TextInput
            type="text"
            placeholder="Your Country"
          />
        </div>
        <div>
          <label className="block text-gray-600">Language</label>
          <TextInput
            type="text"
            placeholder="Your Language"
          />
        </div>
      </div>

      {/* Email Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">My Email Address</h3>
        <div className="flex items-center gap-4 mt-2 p-3 bg-gray-100 rounded-md">
          <span className="bg-blue-500 text-white p-2 rounded-full">📧</span>
          <div>
            <p className="text-gray-800">{user?.email}</p>
            <p className="text-gray-500 text-sm">1 month ago</p>
          </div>
        </div>
        <button className="mt-4 bg-blue-100 text-blue-500 px-4 py-2 rounded-lg">
          + Add Email Address
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
