import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    navigate("/profile");
  };

  return (
    <div className="w-[360px] h-[582px] flex items-start justify-center bg-white p-6 mx-auto border border-gray-300 rounded-lg">
      <div className="w-full">
        <motion.h1 className="text-xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >Signin to your PopX account</motion.h1>
        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="mt-4">
          <label className="text-sm font-semibold text-purple-700">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter email address" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-gray-700" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="mt-4">
          <label className="text-sm font-semibold text-purple-700">Password</label>
          <input 
            type="password" 
            placeholder="Enter password" 
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-gray-700" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        
        <button 
          className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg mt-4 transition-all duration-300 hover:bg-gray-400"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignInPage;