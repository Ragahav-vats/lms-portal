import React from 'react'

export default function Update() {
    return (
        <>
            <section class="bg-gray-50 py-12 px-4 min-h-screen">
                <div class="max-w-6xl mx-auto">

                    {/* <!-- Heading --> */}
                    <div class="text-center mb-10">
                        <h1 class="text-4xl font-bold text-gray-800">Latest Updates</h1>
                        <p class="text-gray-600 mt-2">
                            Stay updated with announcements, events, and new courses
                        </p>
                    </div>

                    {/* <!-- Tabs --> */}
                    <div class="flex justify-center gap-4 mb-10 flex-wrap">
                        <button class="px-5 py-2 bg-blue-600 text-white rounded-full">All</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Important</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Events</button>
                        <button class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Courses</button>
                    </div>

                    {/* <!-- Updates Grid --> */}
                    <div class="grid md:grid-cols-2 gap-8">

                        {/* <!-- Update Card 1 --> */}
                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
                                    Important
                                </span>
                                <span class="text-sm text-gray-400">2 hours ago</span>
                            </div>

                            <h3 class="text-xl font-semibold text-gray-800 mb-2">
                                New Course Launched 🚀
                            </h3>

                            <p class="text-gray-600 mb-4">
                                We have launched a new React JS course. Enroll now and boost your frontend skills.
                            </p>

                            <button class="text-blue-600 font-medium hover:underline">
                                View Details →
                            </button>
                        </div>

                        {/* <!-- Update Card 2 --> */}
                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                    Event
                                </span>
                                <span class="text-sm text-gray-400">1 day ago</span>
                            </div>

                            <h3 class="text-xl font-semibold text-gray-800 mb-2">
                                Live Webinar 🎤
                            </h3>

                            <p class="text-gray-600 mb-4">
                                Join our free webinar on Full Stack Development this weekend.
                            </p>

                            <button class="text-blue-600 font-medium hover:underline">
                                Register Now →
                            </button>
                        </div>

                        {/* <!-- Update Card 3 --> */}
                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                    Course
                                </span>
                                <span class="text-sm text-gray-400">3 days ago</span>
                            </div>

                            <h3 class="text-xl font-semibold text-gray-800 mb-2">
                                Python Course Updated 🐍
                            </h3>

                            <p class="text-gray-600 mb-4">
                                New lessons added in Python course including AI basics.
                            </p>

                            <button class="text-blue-600 font-medium hover:underline">
                                Explore →
                            </button>
                        </div>

                        {/* <!-- Update Card 4 --> */}
                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-sm bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                                    Notice
                                </span>
                                <span class="text-sm text-gray-400">5 days ago</span>
                            </div>

                            <h3 class="text-xl font-semibold text-gray-800 mb-2">
                                Maintenance Update ⚙️
                            </h3>

                            <p class="text-gray-600 mb-4">
                                Platform will be under maintenance on Sunday from 2 AM to 5 AM.
                            </p>

                            <button class="text-blue-600 font-medium hover:underline">
                                Read More →
                            </button>
                        </div>

                    </div>

                    {/* <!-- Timeline Section --> */}
                    <div class="mt-16">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                            Recent Activity
                        </h2>

                        <div class="border-l-2 border-blue-500 pl-6 space-y-6">

                            <div>
                                <p class="text-sm text-gray-400">Today</p>
                                <p class="text-gray-700">New student enrolled in React course</p>
                            </div>

                            <div>
                                <p class="text-sm text-gray-400">Yesterday</p>
                                <p class="text-gray-700">Assignment submitted by 50 students</p>
                            </div>

                            <div>
                                <p class="text-sm text-gray-400">2 days ago</p>
                                <p class="text-gray-700">New instructor joined platform</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
