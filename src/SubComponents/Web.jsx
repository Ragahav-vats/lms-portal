import React from 'react'

export default function Web() {
    return (
        <>
            <section class="bg-gray-50 min-h-screen py-10 px-4">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- Hero Section --> */}
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl mb-10 text-center">
                        <h1 class="text-4xl font-bold mb-3">
                            Web Development Courses
                        </h1>
                        <p class="text-gray-200">
                            Learn HTML, CSS, JavaScript, React & Full Stack Development
                        </p>

                        {/* <!-- search --> */}
                        <div class="mt-6 max-w-xl mx-auto flex">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                class="w-full px-4 py-3 rounded-l-lg text-black focus:outline-none"
                            />
                            <button class="bg-black px-6 rounded-r-lg">
                                🔍
                            </button>
                        </div>
                    </div>

                    
                    <div class="flex flex-wrap gap-4 mb-10 justify-center">
                        <button class="px-5 py-2 bg-blue-600 text-white rounded-full">All</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Beginner</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Intermediate</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Advanced</button>
                    </div>

                    {/* <!-- Courses Grid --> */}
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* <!-- Card 1 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                    Beginner
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    HTML & CSS Bootcamp
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By John Doe</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 8 hrs</span>
                                    <span>⭐ 4.7</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹499</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                    Intermediate
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    JavaScript Mastery
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Aman Verma</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 12 hrs</span>
                                    <span>⭐ 4.8</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹799</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1617042375876-a13e36732a04" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                                    Advanced
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    React JS Complete Guide
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Neha Singh</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 15 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹999</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                                    Full Stack
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    MERN Stack Development
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Rahul Sharma</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 20 hrs</span>
                                    <span>⭐ 4.8</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹1299</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 5 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                                    Backend
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Node.js & Express
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Priya Gupta</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 10 hrs</span>
                                    <span>⭐ 4.7</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹899</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
                                    Projects
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Real World Projects
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Expert Team</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 18 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹1099</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
