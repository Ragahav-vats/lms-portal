import React from 'react'

export default function About() {
    return (
        <>
            <section class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- Hero Section --> */}
                    <div class="text-center mb-16">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-800">
                            About Our LMS
                        </h1>
                        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
                            We provide high-quality online courses to help students and professionals upgrade their skills and achieve their goals.
                        </p>
                    </div>

                    {/* <!-- About Content --> */}
                    <div class="grid md:grid-cols-2 gap-10 items-center mb-16">

                        {/* <!-- Image --> */}
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                                class="rounded-2xl shadow-lg w-full"
                            />
                        </div>

                        {/* <!-- Text --> */}
                        <div>
                            <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                                Who We Are
                            </h2>
                            <p class="text-gray-600 mb-4">
                                Our LMS platform is designed to make learning easy, accessible, and engaging. We offer a wide range of courses from industry experts.
                            </p>
                            <p class="text-gray-600">
                                Whether you're a beginner or a professional, our platform helps you learn at your own pace with real-world projects and certifications.
                            </p>
                        </div>

                    </div>

                    {/* <!-- Stats Section --> */}
                    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">

                        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                            <h3 class="text-3xl font-bold text-blue-600">10K+</h3>
                            <p class="text-gray-600 mt-2">Students</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                            <h3 class="text-3xl font-bold text-green-600">200+</h3>
                            <p class="text-gray-600 mt-2">Courses</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                            <h3 class="text-3xl font-bold text-purple-600">50+</h3>
                            <p class="text-gray-600 mt-2">Instructors</p>
                        </div>

                        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                            <h3 class="text-3xl font-bold text-red-500">95%</h3>
                            <p class="text-gray-600 mt-2">Success Rate</p>
                        </div>

                    </div>

                    {/* <!-- Team Section --> */}
                    <div class="text-center mb-12">
                        <h2 class="text-3xl font-bold text-gray-800">Meet Our Team</h2>
                        <p class="text-gray-600 mt-2">
                            Our expert instructors and team members
                        </p>
                    </div>

                    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {/* <!-- Member 1 --> */}
                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-xl text-center">
                            <img
                                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                                class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 class="text-lg font-semibold">Aman Verma</h3>
                            <p class="text-gray-500 text-sm">Full Stack Instructor</p>
                        </div>

                        {/* <!-- Member 2 --> */}
                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-xl text-center">
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                                class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 class="text-lg font-semibold">Neha Singh</h3>
                            <p class="text-gray-500 text-sm">UI/UX Designer</p>
                        </div>

                        {/* <!-- Member 3 --> */}
                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-xl text-center">
                            <img
                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
                                class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                            />
                            <h3 class="text-lg font-semibold">Rahul Sharma</h3>
                            <p class="text-gray-500 text-sm">Marketing Expert</p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
