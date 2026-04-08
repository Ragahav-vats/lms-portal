import React from 'react'

export default function Story() {
    return (
        <>
            <section class="bg-gray-50 py-16 px-4">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- OUR STORY --> */}
                    <div class="grid md:grid-cols-2 gap-10 items-center mb-20">

                        {/* <!-- Image --> */}
                        <div>
                            <img
                                src="https://picsum.photos/600/400?random=30"
                                class="rounded-2xl shadow-lg w-full"
                            />
                        </div>

                        {/* <!-- Content --> */}
                        <div>
                            <h2 class="text-4xl font-bold text-gray-800 mb-4">
                                Our Story 🚀
                            </h2>

                            <p class="text-gray-600 mb-4">
                                We started our LMS platform with a mission to make quality education accessible to everyone.
                                Our goal is to help students and professionals learn new skills and grow in their careers.
                            </p>

                            <p class="text-gray-600 mb-6">
                                With expert instructors and real-world projects, we provide practical knowledge that truly matters in today’s world.
                            </p>

                            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                                Explore Courses
                            </button>
                        </div>

                    </div>

                    {/* <!-- STATS --> */}
                    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">
                        <div class="bg-white p-6 rounded-xl shadow">
                            <h3 class="text-3xl font-bold text-blue-600">15K+</h3>
                            <p class="text-gray-600">Students</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow">
                            <h3 class="text-3xl font-bold text-green-600">250+</h3>
                            <p class="text-gray-600">Courses</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow">
                            <h3 class="text-3xl font-bold text-purple-600">80+</h3>
                            <p class="text-gray-600">Instructors</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow">
                            <h3 class="text-3xl font-bold text-red-500">98%</h3>
                            <p class="text-gray-600">Success Rate</p>
                        </div>
                    </div>

                    {/* <!-- COURSES SECTION --> */}
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-gray-800">
                            Popular Courses 📚
                        </h2>
                        <p class="text-gray-600 mt-2">
                            Explore our most popular learning paths
                        </p>
                    </div>

                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* <!-- Card 1 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://picsum.photos/400/250?random=31" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <h3 class="text-lg font-semibold">Web Development</h3>
                                <p class="text-sm text-gray-500">Learn HTML, CSS, JS & React</p>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹999</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://picsum.photos/400/250?random=32" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <h3 class="text-lg font-semibold">App Development</h3>
                                <p class="text-sm text-gray-500">Android, Flutter & React Native</p>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹1199</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://picsum.photos/400/250?random=33" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <h3 class="text-lg font-semibold">Data Science</h3>
                                <p class="text-sm text-gray-500">Python, ML & AI concepts</p>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹1299</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://picsum.photos/400/250?random=34" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <h3 class="text-lg font-semibold">AI & ML</h3>
                                <p class="text-sm text-gray-500">Deep Learning & NLP</p>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹1499</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 5 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://picsum.photos/400/250?random=35" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <h3 class="text-lg font-semibold">UI/UX Design</h3>
                                <p class="text-sm text-gray-500">Design modern interfaces</p>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹799</span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card 6 --> */}
                        <div class="bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                            <img src="https://picsum.photos/400/250?random=36" class="w-full h-48 object-cover" />

                            <div class="p-5">
                                <h3 class="text-lg font-semibold">Digital Marketing</h3>
                                <p class="text-sm text-gray-500">SEO, Ads & Social Media</p>

                                <div class="flex justify-between items-center mt-4">
                                    <span class="text-blue-600 font-bold">₹699</span>
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
