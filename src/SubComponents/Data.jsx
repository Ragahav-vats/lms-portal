import React from 'react'

export default function Data() {
    return (
        <>
            <section class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen py-10 px-4 text-white">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- Hero Section --> */}
                    <div class="text-center mb-10">
                        <h1 class="text-4xl font-bold mb-3">
                            Data Science Courses 📊
                        </h1>
                        <p class="text-gray-400">
                            Learn Python, Machine Learning, AI & Data Analytics
                        </p>

                        {/* <!-- Search --> */}
                        <div class="mt-6 max-w-xl mx-auto flex">
                            <input
                                type="text"
                                placeholder="Search data science courses..."
                                class="w-full px-4 py-3 rounded-l-lg text-black focus:outline-none"
                            />
                            <button class="bg-blue-600 px-6 rounded-r-lg">
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* <!-- Filters --> */}
                    <div class="flex flex-wrap justify-center gap-4 mb-10">
                        <button class="px-5 py-2 bg-blue-600 rounded-full">All</button>
                        <button class="px-5 py-2 bg-gray-700 rounded-full hover:bg-blue-500">Python</button>
                        <button class="px-5 py-2 bg-gray-700 rounded-full hover:bg-blue-500">Machine Learning</button>
                        <button class="px-5 py-2 bg-gray-700 rounded-full hover:bg-blue-500">AI</button>
                        <button class="px-5 py-2 bg-gray-700 rounded-full hover:bg-blue-500">Data Analysis</button>
                    </div>

                    {/* <!-- Courses Grid --> */}
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* <!-- Card 1 --> */}
                        <div class="bg-gray-800 rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img
                                src="https://picsum.photos/400/250?random=11"
                                class="w-full h-48 object-cover"
                            />

                            <div class="p-5">
                                <span class="text-xs bg-blue-500 px-3 py-1 rounded-full">
                                    Python
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Python for Data Science
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Aman Verma</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 10 hrs</span>
                                    <span>⭐ 4.8</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-400 font-bold">₹799</span>
                                    <button class="bg-blue-600 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-gray-800 rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img
                                src="https://picsum.photos/400/250?random=12"
                                class="w-full h-48 object-cover"
                            />

                            <div class="p-5">
                                <span class="text-xs bg-green-500 px-3 py-1 rounded-full">
                                    ML
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Machine Learning A-Z
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Priya Gupta</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 15 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-400 font-bold">₹999</span>
                                    <button class="bg-blue-600 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div class="bg-gray-800 rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img
                                src="https://picsum.photos/400/250?random=13"
                                class="w-full h-48 object-cover"
                            />

                            <div class="p-5">
                                <span class="text-xs bg-purple-500 px-3 py-1 rounded-full">
                                    AI
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Artificial Intelligence Basics
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Rahul Sharma</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 12 hrs</span>
                                    <span>⭐ 4.7</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-400 font-bold">₹899</span>
                                    <button class="bg-blue-600 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div class="bg-gray-800 rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img
                                src="https://picsum.photos/400/250?random=14"
                                class="w-full h-48 object-cover"
                            />

                            <div class="p-5">
                                <span class="text-xs bg-yellow-500 px-3 py-1 rounded-full">
                                    Analytics
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Data Analytics Mastery
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Neha Singh</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 14 hrs</span>
                                    <span>⭐ 4.8</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-400 font-bold">₹999</span>
                                    <button class="bg-blue-600 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 5 --> */}
                        <div class="bg-gray-800 rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img
                                src="https://picsum.photos/400/250?random=15"
                                class="w-full h-48 object-cover"
                            />

                            <div class="p-5">
                                <span class="text-xs bg-pink-500 px-3 py-1 rounded-full">
                                    Deep Learning
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Deep Learning with TensorFlow
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Expert Team</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 18 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-400 font-bold">₹1299</span>
                                    <button class="bg-blue-600 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div class="bg-gray-800 rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img
                                src="https://picsum.photos/400/250?random=16"
                                class="w-full h-48 object-cover"
                            />

                            <div class="p-5">
                                <span class="text-xs bg-indigo-500 px-3 py-1 rounded-full">
                                    Projects
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Real World Data Science Projects
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Industry Experts</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 20 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-400 font-bold">₹1399</span>
                                    <button class="bg-blue-600 px-4 py-2 rounded-lg text-sm">
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
