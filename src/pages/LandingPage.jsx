import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const WelcomePage = () => {
   
  return (
    <div className="w-[360px] h-[582px] flex items-end justify-center bg-white p-6 mx-auto border border-gray-300 rounded-lg">
      <div className="text-center">
        <motion.h1
          className="text-xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to PopX
        </motion.h1>
        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="mt-4">
          <Link to="/register" className="w-full block bg-purple-600 text-white py-2 rounded-lg text-center transition-all duration-300 hover:bg-purple-700">
            Create Account
          </Link>
          <Link to="/login" className="w-full block bg-purple-200 text-purple-700 py-2 rounded-lg mt-2 text-center transition-all duration-300 hover:bg-purple-300">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
