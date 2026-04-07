import React from 'react'

export default function Course() {
    return (
        <>
            <section class="bg-gray-50 py-16 px-4">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- Heading --> */}
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold text-gray-800">Our Courses</h2>
                        <p class="text-gray-600 mt-3">
                            Upgrade your skills with our top-quality courses
                        </p>
                    </div>

                    {/* <!-- Filter Buttons --> */}
                    <div class="flex flex-wrap justify-center gap-4 mb-10">
                        <button class="px-5 py-2 bg-blue-600 text-white rounded-full">All</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Development</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Design</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Marketing</button>
                    </div>

                    {/* <!-- Courses Grid --> */}
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* <!-- Card 1 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <h3 class="text-lg font-semibold text-gray-800">Web Development Bootcamp</h3>
                                <p class="text-sm text-gray-500 mt-1">By John Doe</p>

                                <div class="flex items-center justify-between mt-4">
                                    <span class="text-blue-600 font-bold">₹999</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <h3 class="text-lg font-semibold text-gray-800">UI/UX Design Mastery</h3>
                                <p class="text-sm text-gray-500 mt-1">By Sarah Lee</p>

                                <div class="flex items-center justify-between mt-4">
                                    <span class="text-blue-600 font-bold">₹799</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <h3 class="text-lg font-semibold text-gray-800">Digital Marketing Course</h3>
                                <p class="text-sm text-gray-500 mt-1">By Rahul Sharma</p>

                                <div class="flex items-center justify-between mt-4">
                                    <span class="text-blue-600 font-bold">₹699</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden">
                            <img src="https://assets.bacancytechnology.com/qanda/wp-content/uploads/2025/11/12102419/generate-UUID-in-JavaScript-1.jpg" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <h3 class="text-lg font-semibold text-gray-800">JavaScript Advanced</h3>
                                <p class="text-sm text-gray-500 mt-1">By Aman Verma</p>

                                <div class="flex items-center justify-between mt-4">
                                    <span class="text-blue-600 font-bold">₹899</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 5 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <h3 class="text-lg font-semibold text-gray-800">Python for Beginners</h3>
                                <p class="text-sm text-gray-500 mt-1">By Neha Singh</p>

                                <div class="flex items-center justify-between mt-4">
                                    <span class="text-blue-600 font-bold">₹599</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" class="w-full h-48 object-cover" />
                            <div class="p-5">
                                <h3 class="text-lg font-semibold text-gray-800">Data Science Basics</h3>
                                <p class="text-sm text-gray-500 mt-1">By Priya Gupta</p>

                                <div class="flex items-center justify-between mt-4">
                                    <span class="text-blue-600 font-bold">₹1099</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                                        Enroll
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
