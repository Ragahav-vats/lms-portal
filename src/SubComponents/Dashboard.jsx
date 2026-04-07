import React from 'react'

export default function Dashboard() {
    return (
        <>
            <section class="bg-gray-100 font-sans">

                {/* <!-- Container --> */}
                <div class="flex">

                    {/* <!-- Sidebar --> */}
                    <div class="w-16 md:w-20 bg-white shadow-md min-h-screen flex flex-col items-center py-4 space-y-6">
                        <div class="w-10 h-10 bg-blue-500 rounded-lg"></div>
                        <div class="w-8 h-8 bg-gray-200 rounded"></div>
                        <div class="w-8 h-8 bg-gray-200 rounded"></div>
                        <div class="w-8 h-8 bg-gray-200 rounded"></div>
                    </div>
                    

                    {/* <!-- Main Content --> */}
                    <div class="flex-1 p-4 md:p-8">

                        {/* <!-- Title --> */}
                        <h1 class="text-2xl md:text-3xl font-bold mb-6">Active Courses</h1>

                        {/* <!-- Tabs --> */}
                        <div class="flex space-x-6 border-b mb-6">
                            <button class="pb-2 border-b-2 border-blue-500 text-blue-500 font-medium">Active</button>
                            <button class="pb-2 text-gray-500">Archived</button>
                        </div>

                        {/* <!-- Search --> */}
                        <input
                            type="text"
                            placeholder="Search for a chapter, course or package"
                            class="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        {/* <!-- Cards --> */}
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* <!-- Card 1 --> */}
                            <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" class="w-full h-40 object-cover" />
                                <div class="p-4">
                                    <h2 class="font-semibold text-lg">Full Stack Web Development</h2>
                                    <p class="text-sm text-gray-500 mt-1">WsCube Tech Team</p>

                                    <div class="mt-4 text-sm text-gray-600">
                                        <p>Start Now</p>
                                        <p class="text-gray-400">Valid Till: Jun 30, 2026</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 2 --> */}
                            <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" class="w-full h-40 object-cover" />
                                <div class="p-4">
                                    <h2 class="font-semibold text-lg">Career Booster Program</h2>
                                    <p class="text-sm text-gray-500 mt-1">Expert Team</p>

                                    <div class="mt-4 text-sm text-gray-600">
                                        <p>Start Now</p>
                                        <p class="text-gray-400">Valid Till: Lifetime</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card 3 --> */}
                            <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" class="w-full h-40 object-cover" />
                                <div class="p-4">
                                    <h2 class="font-semibold text-lg">Web Dev Resource Hub</h2>
                                    <p class="text-sm text-gray-500 mt-1">Vikash Sir</p>

                                    <div class="mt-4 text-sm text-gray-600">
                                        <p>Start Now</p>
                                        <p class="text-gray-400">Valid Till: Lifetime</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}
