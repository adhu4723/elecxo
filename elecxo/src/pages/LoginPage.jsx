import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
     const { signup,user } = useAuth();
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
      console.log(user);
      
        const handleLogin = () => {
          signup(username, password);
        };
  return (
    <div className="flex h-[80vh] items-center justify-center bg-gray-200">
      <div className="flex w-full lg:w-3/5 overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Left Section with Image and Text */}
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-center p-8" style={{ backgroundImage: 'url("/mnt/data/Login.png")' }}>
          <h2 className="text-xl font-bold text-blue-600">Elec<span className="text-black">XO</span></h2>
          <h1 className="mt-2 text-4xl font-bold">
            <span className="text-blue-500">Log</span><span className="text-gray-900">in</span>
          </h1>
          <p className="mt-2 text-gray-600">
            Shop the best of electronics. Grab the deals, offers, and more.
          </p>
        </div>

        {/* Right Section with Form */}
        <div className="flex w-full lg:w-1/2 flex-col justify-center p-8">
          <input
            type="text"
            placeholder="Username"
            className="mb-4 w-full rounded border-gray-300 p-3 shadow-sm outline-blue-600   focus:ring-blue-500"
            onChange={(e) => setUsername(e.target.value)}
         />
          <input
            type="password"
            placeholder="Password"
            className="mb-2 w-full rounded border-gray-300 p-3 shadow-sm outline-blue-600 focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}

         />
          <a href="#" className="mb-4 text-right text-sm text-blue-500">
            Forget Password?
          </a>
          <button onClick={handleLogin}  className="mb-4 w-full rounded bg-blue-500 p-3 text-white hover:bg-blue-600">
            Login
          </button>
          <div className="flex justify-center space-x-4">
            <button className="rounded bg-gray-100 p-3 shadow hover:bg-gray-200">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="rounded bg-gray-100 p-3 shadow hover:bg-gray-200">
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button className="rounded bg-gray-100 p-3 shadow hover:bg-gray-200">
              <i className="fab fa-google"></i>
            </button>
          </div>
          <div className="mt-4 text-center text-sm">
            New? <a href="#" className="text-blue-500">Create an account</a>
          </div>
          <Link to={'/signup'} className="mt-2 w-full text-center rounded bg-gray-300 p-3 hover:bg-gray-400">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;