import React from 'react'

export default function Ai() {
    return (
        <>
            <section class="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-10 px-4 text-white">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- Hero Section --> */}
                    <div class="text-center mb-12">
                        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            AI & Machine Learning Courses 🤖
                        </h1>
                        <p class="text-gray-400 mt-3">
                            Learn Artificial Intelligence, Machine Learning & Deep Learning
                        </p>

                        {/* <!-- Search --> */}
                        <div class="mt-6 max-w-xl mx-auto flex">
                            <input
                                type="text"
                                placeholder="Search AI/ML courses..."
                                class="w-full px-4 py-3 rounded-l-lg text-black focus:outline-none"
                            />
                            <button class="bg-cyan-500 px-6 rounded-r-lg">
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* <!-- Filters --> */}
                    <div class="flex flex-wrap justify-center gap-4 mb-10">
                        <button class="px-5 py-2 bg-cyan-500 rounded-full">All</button>
                        <button class="px-5 py-2 bg-gray-800 rounded-full hover:bg-cyan-500">AI</button>
                        <button class="px-5 py-2 bg-gray-800 rounded-full hover:bg-cyan-500">Machine Learning</button>
                        <button class="px-5 py-2 bg-gray-800 rounded-full hover:bg-cyan-500">Deep Learning</button>
                        <button class="px-5 py-2 bg-gray-800 rounded-full hover:bg-cyan-500">NLP</button>
                    </div>

                    {/* <!-- Courses Grid --> */}
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* <!-- Card 1 --> */}
                        <div class="bg-gray-900 border border-cyan-500/30 rounded-2xl shadow-lg hover:shadow-cyan-500/40 transition overflow-hidden">
                            <img src="https://picsum.photos/400/250?random=21" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-cyan-500 px-3 py-1 rounded-full">AI</span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Artificial Intelligence Fundamentals
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Aman Verma</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 10 hrs</span>
                                    <span>⭐ 4.8</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-cyan-400 font-bold">₹899</span>
                                    <button class="bg-cyan-500 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-gray-900 border border-purple-500/30 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition overflow-hidden">
                            <img src="https://picsum.photos/400/250?random=22" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-purple-500 px-3 py-1 rounded-full">ML</span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Machine Learning A-Z
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Priya Gupta</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 15 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-purple-400 font-bold">₹1099</span>
                                    <button class="bg-purple-500 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div class="bg-gray-900 border border-pink-500/30 rounded-2xl shadow-lg hover:shadow-pink-500/40 transition overflow-hidden">
                            <img src="https://picsum.photos/400/250?random=23" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-pink-500 px-3 py-1 rounded-full">Deep Learning</span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Deep Learning with TensorFlow
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Rahul Sharma</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 18 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-pink-400 font-bold">₹1299</span>
                                    <button class="bg-pink-500 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div class="bg-gray-900 border border-green-500/30 rounded-2xl shadow-lg hover:shadow-green-500/40 transition overflow-hidden">
                            <img src="https://picsum.photos/400/250?random=24" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-green-500 px-3 py-1 rounded-full">NLP</span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Natural Language Processing
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Neha Singh</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 14 hrs</span>
                                    <span>⭐ 4.8</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-green-400 font-bold">₹999</span>
                                    <button class="bg-green-500 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 5 --> */}
                        <div class="bg-gray-900 border border-yellow-500/30 rounded-2xl shadow-lg hover:shadow-yellow-500/40 transition overflow-hidden">
                            <img src="https://picsum.photos/400/250?random=25" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-yellow-500 px-3 py-1 rounded-full">Projects</span>

                                <h3 class="text-lg font-semibold mt-3">
                                    AI Real World Projects
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Industry Experts</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 20 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-yellow-400 font-bold">₹1399</span>
                                    <button class="bg-yellow-500 px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div class="bg-gray-900 border border-indigo-500/30 rounded-2xl shadow-lg hover:shadow-indigo-500/40 transition overflow-hidden">
                            <img src="https://picsum.photos/400/250?random=26" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <span class="text-xs bg-indigo-500 px-3 py-1 rounded-full">Data</span>

                                <h3 class="text-lg font-semibold mt-3">
                                    Data Science + ML Combo
                                </h3>

                                <p class="text-sm text-gray-400 mt-1">By Expert Team</p>

                                <div class="flex justify-between text-sm text-gray-400 mt-3">
                                    <span>⏱ 22 hrs</span>
                                    <span>⭐ 4.9</span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-indigo-400 font-bold">₹1499</span>
                                    <button class="bg-indigo-500 px-4 py-2 rounded-lg text-sm">
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
