import React from 'react'

export default function App() {
    return (
        <>
            <section class="bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 min-h-screen py-10 px-4">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- Hero Section --> */}
                    <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl mb-10 text-center shadow-lg">
                        <h1 class="text-4xl font-bold mb-3">
                            App Development Courses 📱
                        </h1>
                        <p class="text-gray-200">
                            Learn Android, iOS, Flutter & React Native from scratch
                        </p>

                        {/* <!-- Search --> */}
                        <div class="mt-6 max-w-xl mx-auto flex">
                            <input
                                type="text"
                                placeholder="Search app dev courses..."
                                class="w-full px-4 py-3 rounded-l-lg text-black focus:outline-none"
                            />
                            <button class="bg-black px-6 rounded-r-lg">
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* <!-- Filters --> */}
                    <div class="flex flex-wrap justify-center gap-4 mb-10">
                        <button class="px-5 py-2 bg-purple-600 text-white rounded-full">All</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-purple-100">Android</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-purple-100">iOS</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-purple-100">Flutter</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-purple-100">React Native</button>
                    </div>

                    {/* <!-- Courses Grid --> */}
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* <!-- Card 1 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                    Android
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Android App Development (Kotlin)
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Rahul Verma</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 15 hrs</span>
                                    <span>⭐ 4.8</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-purple-600 font-bold">₹999</span>
                                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img
                                src="https://picsum.photos/400/250?random=2"
                                onerror="this.src='https://via.placeholder.com/400x250'"
                                class="w-full h-48 object-cover"
                            />

                            <div class="p-5">
                                <span class="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                    iOS
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    iOS Development with Swift
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Neha Singh</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 12 hrs</span>
                                    <span>⭐ 4.7</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-purple-600 font-bold">₹1099</span>
                                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                    Flutter
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Flutter Complete Guide
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Aman Kumar</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 18 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-purple-600 font-bold">₹1299</span>
                                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://images.unsplash.com/photo-1590608897129-79da98d15969" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
                                    React Native
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    React Native App Development
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Priya Gupta</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 14 hrs</span>
                                    <span>⭐ 4.8</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-purple-600 font-bold">₹1199</span>
                                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 5 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                                    Full Stack App
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Full Stack Mobile App (Firebase)
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Expert Team</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 20 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-purple-600 font-bold">₹1399</span>
                                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                                    UI Design
                                </span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Mobile App UI/UX Design
                                </h3>

                                <p class="text-sm text-gray-500 mt-1">By Sarah Lee</p>

                                <div class="flex justify-between text-sm text-gray-500 mt-3">
                                    <span>⏱ 10 hrs</span>
                                    <span>⭐ 4.7</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-purple-600 font-bold">₹699</span>
                                    <button class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
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
