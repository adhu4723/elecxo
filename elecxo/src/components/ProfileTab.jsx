import { button } from "@material-tailwind/react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProfileTab({ show, setShow }) {
   
 const { signup,user ,logout} = useAuth();
  return (
    <div
      
      className={`${show ? "block" : "hidden"} bg-white shadow px-4 py-4 rounded-lg absolute`}
    >
      
{user? <button onClick={()=>logout()} className="bg-red-700 text-white px-5 py-2 rounded-lg">Logout</button> :<Link to={"/login"} className="bg-blue-700 text-white px-5 py-2 rounded-lg">
        Login
      </Link>}

    </div>
  );
}

export default ProfileTab;
