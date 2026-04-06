import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                            alt="LMS Logo"
                            className="w-10 h-10 rounded-lg object-cover shadow-md hover:scale-110 transition duration-300"
                        />
                        <span className="text-lg font-semibold text-gray-800">
                            LearnHub
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                        <div className="relative group">

                            {/* Home Button */}
                            <a href="#" className="hover:text-blue-600 transition">
                                Home
                            </a>

                            {/* Underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-3 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                                    Dashboard
                                </a>

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    Overview
                                </a>

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">
                                    Updates
                                </a>

                            </div>

                        </div>

                        <div className="relative group">

                            {/* Courses Button */}
                            <a href="#" className="hover:text-blue-600 transition">
                                Courses
                            </a>

                            {/* Underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>

                            {/* Dropdown */}
                            <div className="absolute left-0 mt-3 w-44 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                                    Web Development
                                </a>

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    App Development
                                </a>

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    Data Science
                                </a>

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">
                                    AI & ML
                                </a>

                            </div>

                        </div>

                        <div className="relative group">

                            {/* About Button */}
                            <a href="#" className="hover:text-blue-600 transition">
                                About
                            </a>

                            {/* Underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>

                            {/* Dropdown */}
                            <div className="absolute left-0 mt-3 w-44 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                                    Our Story
                                </a>

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    Team
                                </a>

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    Careers
                                </a>

                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">
                                    Contact Info
                                </a>

                            </div>

                        </div>

                        <a href="#" className="relative group hover:text-blue-600 transition">
                            Contact
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </a>
                    </nav>

                    {/* Search Box */}
                    <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-full shadow-inner hover:shadow-md transition">
                        <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="bg-transparent outline-none text-sm w-40 focus:w-56 transition-all duration-300"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 hover:scale-105 transition">
                            Login
                        </button>

                        <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:scale-105 hover:shadow-lg transition">
                            Register
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden px-4 pb-4 animate-fadeIn">
                        <nav className="flex flex-col space-y-4 text-gray-700 font-medium">

                            {["Home", "Courses", "About", "Contact"].map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="hover:text-blue-600 transition"
                                >
                                    {item}
                                </a>
                            ))}

                            {/* Search */}
                            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full">
                                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-transparent outline-none text-sm w-full"
                                />
                            </div>

                            {/* Buttons */}
                            <button className="w-full py-2 border rounded-full hover:bg-gray-100 transition">
                                Login
                            </button>

                            <button className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                                Register
                            </button>
                        </nav>
                    </div>
                )}
            </header>
        </>
    )
}
