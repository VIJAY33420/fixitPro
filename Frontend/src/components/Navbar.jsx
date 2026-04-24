import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, User as UserIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <Hammer className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">FixIt<span className="text-blue-600">Pro</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 font-semibold hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-600 font-semibold hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/booking" className="text-gray-600 font-semibold hover:text-blue-600 transition-colors">Book Repair</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="flex items-center gap-2 bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl font-bold hover:bg-gray-100 transition-all border border-gray-200">
              <UserIcon className="w-5 h-5" />
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
