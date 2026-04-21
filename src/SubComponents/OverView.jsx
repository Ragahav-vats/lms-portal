import React from 'react'
import { Link } from 'react-router'

export default function OverView() {
    return (
        <>
            <section class="bg-gray-50 py-10 px-4">
                <div class="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

                    {/* <!-- LEFT SIDE --> */}
                    <div class="lg:col-span-2 space-y-8">

                        {/* <!-- Course Image --> */}
                        <div class="bg-white rounded-2xl shadow overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                                class="w-full h-64 object-cover"
                            />
                        </div>

                        {/* <!-- Course Info --> */}
                        <div class="bg-white p-6 rounded-2xl shadow">
                            <h1 class="text-3xl font-bold text-gray-800 mb-3">
                                Web Development Bootcamp
                            </h1>

                            <p class="text-gray-600 mb-4">
                                Learn full stack web development from scratch with real-world projects and hands-on experience.
                            </p>

                            <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                                <span>👨‍🏫 Instructor: John Doe</span>
                                <span>📘 25 Lectures</span>
                                <span>⏱ 10 Hours</span>
                                <span>⭐ 4.8 Rating</span>
                            </div>
                        </div>

                        {/* <!-- What You'll Learn --> */}
                        <div class="bg-white p-6 rounded-2xl shadow">
                            <h2 class="text-xl font-semibold mb-4">What You'll Learn</h2>

                            <ul class="grid sm:grid-cols-2 gap-3 text-gray-600">
                                <li>✔ HTML, CSS, JavaScript Basics</li>
                                <li>✔ React JS & Frontend</li>
                                <li>✔ Backend with Node.js</li>
                                <li>✔ Database Integration</li>
                                <li>✔ Build Real Projects</li>
                                <li>✔ Deployment</li>
                            </ul>
                        </div>

                        {/* <!-- Curriculum --> */}
                        <div class="bg-white p-6 rounded-2xl shadow">
                            <h2 class="text-xl font-semibold mb-4">Course Curriculum</h2>

                            <div class="space-y-3">

                                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                                    <span>Introduction</span>
                                    <span class="text-sm text-gray-500">5 min</span>
                                </div>

                                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                                    <span>HTML Basics</span>
                                    <span class="text-sm text-gray-500">20 min</span>
                                </div>

                                <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                                    <span>CSS Styling</span>
                                    <span class="text-sm text-gray-500">30 min</span>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* <!-- RIGHT SIDE --> */}
                    <div class="space-y-6">

                        {/* <!-- Pricing Card --> */}
                        <div class="bg-white p-6 rounded-2xl shadow sticky top-6">

                            <h2 class="text-3xl font-bold text-blue-600 mb-4">₹999</h2>
                            <Link to="/enroll">
                            <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mb-3">
                                Enroll Now
                            </button>
                            </Link>

                            <button class="w-full border py-3 rounded-lg hover:bg-gray-100">
                                Add to Wishlist
                            </button>

                            <div class="mt-6 text-sm text-gray-600 space-y-2">
                                <p>✔ Full Lifetime Access</p>
                                <p>✔ Certificate of Completion</p>
                                <p>✔ Access on Mobile & TV</p>
                            </div>
                        </div>

                        {/* <!-- Instructor Card --> */}
                        <div class="bg-white p-6 rounded-2xl shadow text-center">
                            <img
                                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                                class="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                            />
                            <h3 class="font-semibold">John Doe</h3>
                            <p class="text-sm text-gray-500">Full Stack Developer</p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
