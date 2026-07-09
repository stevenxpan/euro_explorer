import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 mb-8">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">Euro Explorer</h1>

        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
