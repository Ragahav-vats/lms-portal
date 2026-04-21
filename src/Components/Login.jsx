import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import axios from 'axios';
import app from '../firebase/config';
// import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
    const [loginButton, setloginButton] = useState(false);
    let [token, setToken] = useState(Cookies.get("token") || null);
    const navigate = useNavigate();

    const loginHandler = (event) => {
        event.preventDefault();
        setloginButton(true);

        const formData = new FormData(event.target);
        console.log(formData);
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/login`, formData)
            .then((result) => {
                setloginButton(false);
                Cookies.set("token", token);
                setToken(token)

                if (result.data._status == true) {
                    event.target.reset();
                    toast.success(result.data._message);
                    Cookies.set('token', result.data._token);
                    navigate("/");
                } else {
                    if (result.data._registerstatus){
                        toast.error("account doesn't exist please register first")
                        navigate("/create-account")
                    }
                }
            })
            .catch((err) => {
                setloginButton(false);
                toast.error('Something went wrong !!');
            })
    }

     const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Login suceessfully !!');
        navigate("/");
      }).catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  }

    return (
        <>
            {/* <!-- LOGIN SECTION START --> */}
            <section class="w-full py-16 px-4 flex justify-center items-center">

                <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                    {/* <!-- Heading --> */}
                    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login to Your Account
                    </h2>

                    {/* <!-- Form --> */}
                    <form class="space-y-5" onSubmit={loginHandler}>

                        {/* <!-- Email --> */}
                        <div>
                            <label class="block text-gray-600 mb-1">Email <span>*</span></label>
                            <input type="email" placeholder="Enter your email"
                                name='email'
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                        </div>

                        {/* <!-- Password --> */}
                        <div>
                            <label class="block text-gray-600 mb-1">Password <span>*</span></label>
                            <input type="password" placeholder="Enter your password"
                                name='password'
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                        </div>

                        {/* <!-- Remember + Forgot --> */}
                        <div class="flex justify-between items-center text-sm">
                            <label class="flex items-center space-x-2">

                                <h5>or</h5>
                                <Link to="/create-account">
                                    <span class="text-pink-900">Create an account</span>
                                </Link>
                            </label>
                            <Link to="/forgot-password" class="text-indigo-600 hover:underline">Forgot?</Link>
                        </div>

                        {/* <!-- Button --> */}
                       
                        <button class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold" disabled={loginButton ? 'disabled' : ''}>
                            {loginButton ? 'Loading...' : ' Login'}
                        </button>

                        {/* <!-- Divider --> */}
                        <div class="flex items-center my-4">
                            <hr class="flex-grow border-gray-300" />
                            <span class="mx-2 text-gray-400 text-sm">OR</span>
                            <hr class="flex-grow border-gray-300" />
                        </div>

                        {/* <!-- Google --> */}
                        <button type="button"
                           onClick={googleLogin}
                            class="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" class="w-5 h-5" />
                            Login with Google
                        </button>

                        {/* <!-- Signup --> */}
                        <p class="text-center text-sm text-gray-500">
                            Don’t have an account?
                            <Link to="/create-account" class="text-indigo-600 font-semibold hover:underline">Sign Up</Link>
                        </p>

                    </form>

                </div>

            </section>
            {/* <!-- LOGIN SECTION END --> */}
        </>
    )
}
