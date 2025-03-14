import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Signup = () => {
  const { signup, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState('')
  const [error, setError] = useState('')

  console.log(user);

  const handleSignup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validates email format

    if (name == "") {
      setError("* Please Enter Name")
    }
    else if (email == "") {
      setError("* Email Required")
    }else if (!emailRegex.test(email)) {
      setError("* Invalid Email Format");
    } 
    
    else if (password == "") {
      setError("* Password Required")

    } else if(password.length<=6){
      setError("* Password Must Be 6 characters")
    }  
    else {
      signup(email, password, name);


    }
  };

  return (
    <div className="flex h-[80vh] items-center justify-center bg-gray-200">
      <div className="flex w-full lg:w-3/5 overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Left Section with Image and Text */}
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-center py-14 px-8" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/blue-curve-frame-template_53876-116707.jpg")' }}>
          <h2 className="text-xl font-bold text-blue-600">Elec<span className="text-black">XO</span></h2>
          <h1 className="mt-2 text-4xl font-bold">
            <span className="text-blue-500">Sign</span><span className="text-gray-900">up</span>
          </h1>
          <p className="mt-2 text-gray-600">
            Shop the best of electronics. Grab the deals, offers, and more.
          </p>
        </div>

        {/* Right Section with Form */}
        <div className="flex w-full lg:w-1/2 flex-col justify-center p-8">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="mb-4 w-full border-b-2 border-gray-300 p-3 shadow-sm focus:border-blue-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full border-b-2 border-gray-300 p-3 shadow-sm focus:border-blue-600 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full border-b-2 border-gray-300 p-3 shadow-sm focus:border-blue-600 focus:outline-none"
          />
          {error && <p className="bg-red-100 font-mono text-red-600 px-2 py-3 mb-3">{error}</p>}

          <button onClick={handleSignup} className="mb-4 w-full rounded bg-blue-500 p-3 text-white hover:bg-blue-600">
            Sign Up
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
            Already have an account? <a href="#" className="text-blue-500">Log in</a>
          </div>
          <Link to={'/login'} className="mt-2 w-full text-center rounded bg-gray-300 p-3 hover:bg-gray-400">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;