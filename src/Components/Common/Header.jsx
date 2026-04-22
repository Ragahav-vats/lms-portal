import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { Context } from '../ContextAPI';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const {isLogin,setIsLogin} = useContext(Context)

    let [token, setToken] = useState(Cookies.get("token") || null);


    return (
        <>
            <ToastContainer />
            <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <Link to="/">
                            <img
                                src="https://as1.ftcdn.net/jpg/17/68/82/14/1000_F_1768821478_48E3LHkDCCYVg91P6TwgIxsBE1ZQPk3v.jpg"
                                alt="LMS Logo"
                                className="w-10 h-10 rounded-lg object-cover shadow-md hover:scale-110 transition duration-300"
                            />
                        </Link>

                        <Link to="/">
                            <span className="text-lg font-semibold text-gray-800">
                                LearnHub
                            </span>
                        </Link>

                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                        <div className="relative group">

                            {/* Home Button */}
                            <Link to="/" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>

                            {/* Underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-3 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 ">

                                <Link to="/my-dashboard" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                                    Dashboard
                                </Link>

                                <Link to="/overview" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    Overview
                                </Link>

                                <Link to="/updates" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">
                                    Updates
                                </Link>

                            </div>

                        </div>

                        <div className="relative group">

                            {/* Courses Button */}
                            <Link to="/courses"
                                onClick={() => setIsOpen(false)}
                                className="hover:text-blue-600 transition">
                                Courses
                            </Link>

                            {/* Underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>

                            {/* Dropdown */}
                            <div className="absolute left-0 mt-3 w-44 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 ">

                                <Link to="/web-development" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                                    Web Development
                                </Link>

                                <Link to="/app-development" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    App Development
                                </Link>

                                <Link to="/data-science" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    Data Science
                                </Link>

                                <Link to="/ai-ml" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">
                                    AI & ML
                                </Link>

                            </div>

                        </div>

                        <div className="relative group">

                            {/* About Button */}
                            <Link to="/about-us" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
                                About
                            </Link>

                            {/* Underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>

                            {/* Dropdown */}
                            <div className="absolute left-0 mt-3 w-44 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 ">

                                <Link to="/our-story" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                                    Our Story
                                </Link>

                                <Link to="/team" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    Team
                                </Link>

                                <Link to="/careers" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                                    Careers
                                </Link>

                                {/* <a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">
                                    Contact Info
                                </a> */}

                            </div>

                        </div>

                        <Link to="/contact-us" className="relative group hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>
                            Contact
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </Link>
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
                    <div className="hidden md:flex items-center space-x-5">
                        <Link to="/enroll">
                            <button className="px-4 py-2 border border-gray-300 rounded-full text-white hover:bg-gray-100 hover:scale-105 transition bg-gradient-to-r from-blue-600 to-indigo-600">
                                Enroll Now
                            </button>
                        </Link>

                        {
                            isLogin
                            ?
                            
                                <button
                                 onClick={() => {
                                        Cookies.remove("token");
                                        setIsLogin(false);
                                        toast.success("Logout Successfully");
                                        navigate("/login");
                                 }}
                                    className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 hover:scale-105 transition">
                                    Logout
                                </button>
                            :
                            <Link to="/login">
                                        <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 hover:scale-105 transition">
                                            Login
                                        </button>
                                    </Link>
                        }

                        {/* <Link to="/login">
                            <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 hover:scale-105 transition">
                                Login
                            </button>
                        </Link> */}

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

                            {[{ name: "Home", route: "/" }, { name: "Courses", route: "/courses" }, { name: "About", route: "/about-us" }, { name: "Contact", route: "/contact-us" }, { name: "Login", route: "/login" }].map((item, i) => (
                                <Link
                                    key={i}
                                    to={item.route}
                                    className="hover:text-blue-600 transition"
                                >
                                    {item.name}
                                </Link>
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
                            {/* <button className="w-full py-2 border rounded-full hover:bg-gray-100 transition">
                                Login
                            </button> */}

                            {/* <button className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                    alt="LMS Logo"
                                    className="w-10 h-10 rounded-lg object-cover shadow-md hover:scale-110 transition duration-300"
                                />
                            </button> */}
                        </nav>
                    </div>
                )}

            </header>
        </>
    )
}
