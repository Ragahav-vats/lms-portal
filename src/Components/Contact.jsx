import React from 'react'

export default function Contact() {
    return (
        <>
            <section class="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
                <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    {/* <!-- Left Side Content --> */}
                    <div>
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">
                            Contact Us
                        </h2>
                        <p class="text-gray-600 mb-8">
                            Have questions about our LMS platform? We're here to help you. Reach out to us anytime!
                        </p>

                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="bg-blue-100 p-3 rounded-full">
                                    📍
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-700">Address</h4>
                                    <p class="text-gray-500 text-sm">Lucknow, Uttar Pradesh, India</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-4">
                                <div class="bg-green-100 p-3 rounded-full">
                                    📧
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-700">Email</h4>
                                    <p class="text-gray-500 text-sm">support@lmsportal.com</p>
                                </div>
                            </div>

                            <div class="flex items-center gap-4">
                                <div class="bg-purple-100 p-3 rounded-full">
                                    📞
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-700">Phone</h4>
                                    <p class="text-gray-500 text-sm">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Right Side Form --> */}
                    <div class="bg-white shadow-xl rounded-2xl p-8">
                        <h3 class="text-2xl font-semibold text-gray-800 mb-6">
                            Send Message
                        </h3>

                        <form class="space-y-5">
                            {/* <!-- Name --> */}
                            <div>
                                <label class="block text-gray-600 mb-1 text-sm">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* <!-- Email --> */}
                            <div>
                                <label class="block text-gray-600 mb-1 text-sm">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* <!-- Subject --> */}
                            <div>
                                <label class="block text-gray-600 mb-1 text-sm">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* <!-- Message --> */}
                            <div>
                                <label class="block text-gray-600 mb-1 text-sm">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>

                            {/* <!-- Button --> */}
                            <button
                                type="submit"
                                class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}
