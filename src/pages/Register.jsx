import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    for (let key in formData) {
      if (!formData[key]) {
        setError("Please fill out all fields.");
        return;
      }
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    navigate("/profile");
  };

  return (
    <div className="w-[375px] h-[812px] flex items-start justify-center bg-white p-6 mx-auto border border-gray-300 rounded-lg">
      <div className="w-full">
        <motion.h1 className="text-xl font-bold text-gray-900"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
        >Create your PopX account</motion.h1>
        
        <div className="mt-4">
          <label className="text-sm font-semibold text-purple-700">Full Name*</label>
          <input 
            type="text" 
            name="fullName"
            placeholder="Enter full name" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-gray-700" 
            value={formData.fullName} 
            onChange={handleChange}
          />
        </div>
        
        <div className="mt-4">
          <label className="text-sm font-semibold text-purple-700">Phone Number*</label>
          <input 
            type="text" 
            name="phoneNumber"
            placeholder="Enter phone number" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-gray-700" 
            value={formData.phoneNumber} 
            onChange={handleChange}
          />
        </div>
        
        <div className="mt-4">
          <label className="text-sm font-semibold text-purple-700">Email Address*</label>
          <input 
            type="email" 
            name="email"
            placeholder="Enter email address" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-gray-700" 
            value={formData.email} 
            onChange={handleChange}
          />
        </div>
        
        <div className="mt-4">
          <label className="text-sm font-semibold text-purple-700">Password*</label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter password" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-gray-700" 
            value={formData.password} 
            onChange={handleChange}
          />
        </div>
        
        <div className="mt-4">
          <label className="text-sm font-semibold text-purple-700">Company Name</label>
          <input 
            type="text" 
            name="companyName"
            placeholder="Enter company name" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-gray-700" 
            value={formData.companyName} 
            onChange={handleChange}
          />
        </div>
        
        <div className="mt-4">
          <label className="text-sm font-semibold text-purple-700">Are you an Agency?*</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" value="yes" onChange={handleChange} /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" value="no" onChange={handleChange} /> No
            </label>
          </div>
        </div>
        
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        
        <button 
          className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4 transition-all duration-300 hover:bg-purple-700"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Register;
