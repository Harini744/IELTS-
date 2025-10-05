import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:py-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          <span className="text-red-600">IE</span> IELTS Excellence
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-600">
          <a
            href="#home"
            className="hover:text-red-600  transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#courses"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Courses
          </a>
          <a
            href="#contacts"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button (placeholder) */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-red-600 focus:outline-none">
            {/* You can replace with a hamburger icon from Heroicons */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}
