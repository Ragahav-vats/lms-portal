import React from 'react'

export default function Register() {
    return (
    <>
            {/* <!-- REGISTER SECTION START --> */}
            <section class="w-full py-16 px-4 flex justify-center items-center bg-gray-50">

                <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                    {/* <!-- Heading --> */}
                    <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
                        Create Your Account 🚀
                    </h2>

                    {/* <!-- Form --> */}
                    <form class="space-y-5">

                        {/* <!-- Name --> */}
                        <div>
                            <label class="block text-gray-600 mb-1">Full Name</label>
                            <input type="text" placeholder="Enter your name"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
                        </div>

                        {/* <!-- Email --> */}
                        <div>
                            <label class="block text-gray-600 mb-1">Email</label>
                            <input type="email" placeholder="Enter your email"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
                        </div>

                        {/* <!-- Password --> */}
                        <div>
                            <label class="block text-gray-600 mb-1">Password</label>
                            <input type="password" placeholder="Create password"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
                        </div>

                        {/* <!-- Confirm Password --> */}
                        <div>
                            <label class="block text-gray-600 mb-1">Confirm Password</label>
                            <input type="password" placeholder="Confirm password"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
                        </div>

                        {/* <!-- Terms --> */}
                        <div class="flex items-center space-x-2 text-sm">
                            <input type="checkbox" class="accent-indigo-600"/>
                                <span>I agree to the <a href="#" class="text-indigo-600 hover:underline">Terms & Conditions</a></span>
                        </div>

                        {/* <!-- Button --> */}
                        <button class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold">
                            Sign Up
                        </button>

                        {/* <!-- Divider --> */}
                        <div class="flex items-center my-4">
                            <hr class="flex-grow border-gray-300"/>
                                <span class="mx-2 text-gray-400 text-sm">OR</span>
                                <hr class="flex-grow border-gray-300"/>
                                </div>

                                {/* <!-- Google Signup --> */}
                                <button type="button"
                                    class="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" class="w-5 h-5"/>
                                        Sign up with Google
                                </button>

                                {/* <!-- Login Link --> */}
                                <p class="text-center text-sm text-gray-500">
                                    Already have an account?
                                    <a href="#" class="text-indigo-600 font-semibold hover:underline">Login</a>
                                </p>

                            </form>

                        </div>

                    </section>
                    {/* <!-- REGISTER SECTION END --> */}
                </>
                )
}
