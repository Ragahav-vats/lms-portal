import React from 'react'

export default function Login() {
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
                    <form class="space-y-5">

                        {/* <!-- Email --> */}
                        <div>
                            <label class="block text-gray-600 mb-1">Email</label>
                            <input type="email" placeholder="Enter your email"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
                        </div>

                        {/* <!-- Password --> */}
                        <div>
                            <label class="block text-gray-600 mb-1">Password</label>
                            <input type="password" placeholder="Enter your password"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
                        </div>

                        {/* <!-- Remember + Forgot --> */}
                        <div class="flex justify-between items-center text-sm">
                            <label class="flex items-center space-x-2">
                                <input type="checkbox" class="accent-indigo-600"/>
                                    <span>Remember me</span>
                            </label>
                            <a href="#" class="text-indigo-600 hover:underline">Forgot?</a>
                        </div>

                        {/* <!-- Button --> */}
                        <button class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold">
                            Login
                        </button>

                        {/* <!-- Divider --> */}
                        <div class="flex items-center my-4">
                            <hr class="flex-grow border-gray-300"/>
                                <span class="mx-2 text-gray-400 text-sm">OR</span>
                                <hr class="flex-grow border-gray-300"/>
                                </div>

                                {/* <!-- Google --> */}
                                <button type="button"
                                    class="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" class="w-5 h-5"/>
                                        Login with Google
                                </button>

                                {/* <!-- Signup --> */}
                                <p class="text-center text-sm text-gray-500">
                                    Don’t have an account?
                                    <a href="#" class="text-indigo-600 font-semibold hover:underline">Sign Up</a>
                                </p>

                            </form>

                        </div>

                    </section>
                    {/* <!-- LOGIN SECTION END --> */}
                </>
                )
}
