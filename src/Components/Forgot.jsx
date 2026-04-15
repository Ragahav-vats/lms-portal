import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { Link } from 'react-router';
import { toast } from 'react-toastify';

export default function Forgot() {

  const [forgotButton, setForgotButton] = useState(false);

  const forgotHandler = (event) => {
    event.preventDefault();
    setForgotButton(true);

    const formData = new FormData(event.target);
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/forgot-password`, formData)
      .then((result) => {
        setForgotButton(false);

        if (result.data._status == true) {
          event.target.reset();
          toast.success(result.data._message);
        } else {
          toast.error(result.data._message);
        }
      })
      .catch(() => {
        setForgotButton(false);
        toast.error('Something went wrong !')
      })
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Forgot Password 🔑
          </h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Enter your email to receive reset link
          </p>

          {/* Form */}
          <form onSubmit={forgotHandler} autoComplete='off' className="mt-6 space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name='email'
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={forgotButton ? 'disabled' : ''}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              {forgotButton ? 'Loading...' : 'Send Reset Link'}
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-500 mt-4">
            Remember your password?{" "}
            <Link to='/login'>
              <span className="text-indigo-600 cursor-pointer hover:underline">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
