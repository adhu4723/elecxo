import React from "react";
import { House, User, Shapes, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function MobileBar() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: <House />, label: "Home" },
    { path: "/categories", icon: <Shapes />, label: "Categories" },
    { path: "/cart", icon: <ShoppingCart />, label: "Cart" },
    { path: "/profile", icon: <User />, label: "Profile" },
  ];

  return (
    <div className="bg-white lg:hidden flex justify-between px-6 py-4 gap-2 shadow-md fixed bottom-0 w-full">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col w-full items-center p-2 rounded-lg transition-all duration-200 ${
            location.pathname === item.path ? "bg-blue-100 text-blue-600" : "text-gray-600"
          }`}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default MobileBar;
