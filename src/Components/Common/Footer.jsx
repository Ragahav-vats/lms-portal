import React from 'react'

export default function Footer() {
  return (
    <>

      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-12 pb-6">

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo + About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="logo"
                className="w-10 h-10 rounded-full border-2 border-blue-500 p-1"
              />
              <h2 className="text-xl font-bold text-white">LearnHub</h2>
            </div>
            <p className="text-sm leading-6">
              LearnHub is a modern LMS platform where you can learn new skills,
              explore courses, and grow your career with expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Courses", "About", "Contact"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Top Courses</h3>
            <ul className="space-y-2">
              {["Web Development", "App Development", "Data Science", "AI & ML"].map((course, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-500 transition">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-3">Get latest updates & courses</p>

            <div className="flex items-center bg-gray-700 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent px-4 py-2 outline-none text-sm w-full"
              />
              <button className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
              
                <div className="flex space-x-3 mt-4">
                {/* Facebook */}
                <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-600 transition">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3v-2.9h2.3V9.6c0-2.3 1.4-3.6 3.4-3.6.99 0 2.02.18 2.02.18v2.2h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-400 transition">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 001.8-2.2c-.8.5-1.7.8-2.6 1A4 4 0 0012 8.5a11.3 11.3 0 01-8.2-4.1 4 4 0 001.2 5.3c-.6 0-1.2-.2-1.7-.5v.05a4 4 0 003.2 3.9c-.3.1-.7.2-1 .2-.25 0-.5 0-.7-.07a4 4 0 003.7 2.7A8 8 0 012 19.5 11.3 11.3 0 008.3 21c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.1z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded-full hover:bg-pink-500 transition">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.8a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6zM12 9a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-900 transition">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5A12 12 0 000 12.7c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.6 1.3-3.5-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.5 1.3a12 12 0 016.4 0C17.9 3.8 19 4.1 19 4.1c.7 1.7.2 3 .1 3.3.8.9 1.3 2.1 1.3 3.5 0 4.8-2.9 5.9-5.6 6.2.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0024 12.7 12 12 0 0012 .5z" />
                  </svg>
                </a>
                
              </div>
            </div>
          </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
          © 2026 LearnHub. All rights reserved.
        </div>

      </footer>

    </>
  )
}
