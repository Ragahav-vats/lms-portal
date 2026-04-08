import React from 'react'

export default function Careers() {
    return (
        <>
            <section class="bg-gray-50 min-h-screen py-12 px-4">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- HERO --> */}
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-2xl text-center mb-16">
                        <h1 class="text-4xl md:text-5xl font-bold mb-3">
                            Join Our Team 🚀
                        </h1>
                        <p class="text-gray-200 max-w-2xl mx-auto">
                            Build your career with us. Explore exciting opportunities and grow with our LMS platform.
                        </p>
                    </div>

                    {/* <!-- JOB LISTINGS --> */}
                    <div class="mb-16">
                        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
                            Open Positions 💼
                        </h2>

                        <div class="space-y-6">

                            {/* <!-- Job 1 --> */}
                            <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                <div>
                                    <h3 class="text-xl font-semibold">Frontend Developer</h3>
                                    <p class="text-gray-500">Location: Remote | Experience: 1-3 Years</p>
                                </div>
                                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg">
                                    Apply Now
                                </button>
                            </div>

                            {/* <!-- Job 2 --> */}
                            <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                <div>
                                    <h3 class="text-xl font-semibold">Backend Developer</h3>
                                    <p class="text-gray-500">Location: Remote | Experience: 2-4 Years</p>
                                </div>
                                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg">
                                    Apply Now
                                </button>
                            </div>

                            {/* <!-- Job 3 --> */}
                            <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                <div>
                                    <h3 class="text-xl font-semibold">UI/UX Designer</h3>
                                    <p class="text-gray-500">Location: Hybrid | Experience: 1-2 Years</p>
                                </div>
                                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg">
                                    Apply Now
                                </button>
                            </div>

                            {/* <!-- Job 4 --> */}
                            <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                <div>
                                    <h3 class="text-xl font-semibold">Data Scientist</h3>
                                    <p class="text-gray-500">Location: Remote | Experience: 2-5 Years</p>
                                </div>
                                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg">
                                    Apply Now
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* <!-- BENEFITS --> */}
                    <div class="mb-16">
                        <h2 class="text-3xl font-bold text-gray-800 text-center mb-10">
                            Why Join Us 🌟
                        </h2>

                        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                            <div class="bg-white p-6 rounded-xl shadow text-center">
                                <h3 class="text-xl font-semibold mb-2">💻 Remote Work</h3>
                                <p class="text-gray-600">Work from anywhere with flexible schedules.</p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow text-center">
                                <h3 class="text-xl font-semibold mb-2">📈 Career Growth</h3>
                                <p class="text-gray-600">Learn and grow with industry experts.</p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow text-center">
                                <h3 class="text-xl font-semibold mb-2">💰 Competitive Salary</h3>
                                <p class="text-gray-600">Get paid well for your skills and efforts.</p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow text-center">
                                <h3 class="text-xl font-semibold mb-2">🎯 Real Projects</h3>
                                <p class="text-gray-600">Work on real-world impactful projects.</p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow text-center">
                                <h3 class="text-xl font-semibold mb-2">🤝 Great Team</h3>
                                <p class="text-gray-600">Collaborate with talented professionals.</p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow text-center">
                                <h3 class="text-xl font-semibold mb-2">🏆 Recognition</h3>
                                <p class="text-gray-600">Get rewarded for your performance.</p>
                            </div>

                        </div>
                    </div>

                    {/* <!-- CTA --> */}
                    <div class="bg-indigo-600 text-white text-center p-10 rounded-2xl">
                        <h2 class="text-2xl font-bold mb-3">
                            Didn't find your role? 🤔
                        </h2>
                        <p class="text-gray-200 mb-5">
                            Send us your resume and we’ll get back to you!
                        </p>

                        <button class="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium">
                            Submit Resume
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}
