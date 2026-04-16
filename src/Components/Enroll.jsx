import React from 'react'
import { Link } from 'react-router'
import Cookies from 'js-cookie';
export default function Enroll() {
    return (
        <>
            {/* <!-- ENROLL SECTION START --> */}
            <section class="py-20 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">

                <div class="w-full px-6 text-white">

                    {/* <!-- HEADER --> */}
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-5xl font-bold mb-4">
                            Upgrade Your Skills 🚀
                        </h2>
                        <p class="text-lg md:text-xl text-gray-100">
                            Learn in-demand skills with expert guidance and real-world projects.
                        </p>
                    </div>

                    {/* <!-- STATS --> */}
                    <div class="grid md:grid-cols-4 gap-6 text-center mb-16">
                        <div>
                            <h3 class="text-3xl font-bold">10K+</h3>
                            <p class="text-gray-200">Students</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-bold">50+</h3>
                            <p class="text-gray-200">Courses</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-bold">30+</h3>
                            <p class="text-gray-200">Mentors</p>
                        </div>
                        <div>
                            <h3 class="text-3xl font-bold">100%</h3>
                            <p class="text-gray-200">Career Support</p>
                        </div>
                    </div>

                    {/* <!-- PRICING --> */}
                    <div class="grid md:grid-cols-3 gap-8 mb-20">

                        <div class="bg-white text-gray-800 rounded-2xl p-6 shadow hover:scale-105 transition">
                            <h3 class="text-xl font-semibold mb-2">Basic</h3>
                            <p class="text-gray-500 mb-3">For beginners</p>
                            <h4 class="text-2xl font-bold mb-4">₹499</h4>
                            <ul class="text-sm mb-4 space-y-1">
                                <li>✔ 5 Courses</li>
                                <li>✔ Basic Support</li>
                                <li>✔ Lifetime Access</li>
                            </ul>
                             <Link to={`${Cookies.get('token') ? "/payment" : "/login" }`}>
                            <button class="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
                                Enroll Now
                            </button>
                            </Link>
                        </div>

                        <div class="bg-white text-gray-800 rounded-2xl p-6 shadow-lg scale-105 border-2 border-yellow-400">
                            <h3 class="text-xl font-semibold mb-2">Pro ⭐</h3>
                            <p class="text-gray-500 mb-3">Most Popular</p>
                            <h4 class="text-2xl font-bold mb-4">₹999</h4>
                            <ul class="text-sm mb-4 space-y-1">
                                <li>✔ All Courses</li>
                                <li>✔ Certificates</li>
                                <li>✔ Live Classes</li>
                                <li>✔ Priority Support</li>
                            </ul>
                            <Link to="/payment">
                            <button class="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
                                Enroll Now
                            </button>
                            </Link>
                        </div>

                        <div class="bg-white text-gray-800 rounded-2xl p-6 shadow hover:scale-105 transition">
                            <h3 class="text-xl font-semibold mb-2">Premium</h3>
                            <p class="text-gray-500 mb-3">Advanced users</p>
                            <h4 class="text-2xl font-bold mb-4">₹1499</h4>
                            <ul class="text-sm mb-4 space-y-1">
                                <li>✔ 1-on-1 Mentorship</li>
                                <li>✔ Career Guidance</li>
                                <li>✔ All Features</li>
                            </ul>
                             <Link to="/payment">
                            <button class="bg-purple-600 text-white px-4 py-2 rounded-lg w-full">
                                Enroll Now
                            </button>
                            </Link>
                        </div>

                    </div>

                    {/* <!-- BENEFITS --> */}
                    <div class="grid md:grid-cols-2 gap-10 mb-20">

                        <div>
                            <h3 class="text-2xl font-bold mb-4">Why Choose Us?</h3>
                            <ul class="space-y-3 text-gray-200">
                                <li>✔ Industry Expert Mentors</li>
                                <li>✔ Real-world Projects</li>
                                <li>✔ Job-ready Skills</li>
                                <li>✔ Flexible Learning</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-2xl font-bold mb-4">Course Highlights</h3>
                            <ul class="space-y-3 text-gray-200">
                                <li>🎯 Hands-on Practice</li>
                                <li>📊 Career Guidance</li>
                                <li>📚 Updated Content</li>
                                <li>🏆 Certification</li>
                            </ul>
                        </div>

                    </div>

                    {/* <!-- FAQ --> */}
                    <div class="mb-20">
                        <h3 class="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>

                        <div class="space-y-4 max-w-3xl mx-auto">
                            <div class="bg-white text-gray-800 p-4 rounded-xl">
                                <h4 class="font-semibold">How do I enroll?</h4>
                                <p class="text-sm text-gray-600">Click on Enroll Now and complete payment.</p>
                            </div>

                            <div class="bg-white text-gray-800 p-4 rounded-xl">
                                <h4 class="font-semibold">Do I get certificate?</h4>
                                <p class="text-sm text-gray-600">Yes, after course completion.</p>
                            </div>

                            <div class="bg-white text-gray-800 p-4 rounded-xl">
                                <h4 class="font-semibold">Is it lifetime access?</h4>
                                <p class="text-sm text-gray-600">Yes, all plans include lifetime access.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- FINAL CTA --> */}
                    <div class="text-center">
                        <h3 class="text-3xl font-bold mb-4">Ready to Start? 🚀</h3>
                        <p class="mb-6 text-gray-200">Join now and transform your career</p>
                        <Link to="/payment">
                        <button class="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200">
                            Enroll Now
                        </button>
                        </Link>
                    </div>

                </div>
            </section>
            {/* <!-- ENROLL SECTION END --> */}

        </>
    )
}
