import React from 'react'
import { FaHome, FaBook, FaUserGraduate } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

export default function Dashboard() {
    return (
        <>
            <section class="bg-gray-100 font-sans">

                {/* <!-- Container --> */}
                <div class="flex">

                    {/* <!-- Sidebar --> */}
                    <div class="w-16 md:w-20 bg-white shadow-md min-h-screen flex flex-col items-center py-4 space-y-6">
                        <div class="text-blue-500">
                            <FaHome size={25} />

                        </div>
                        <div class="text-white-500">
                            <MdExplore size={25} />
                        </div>
                        <div class="text-white-500">
                            <FaBook size={25} />

                        </div>
                        <div class="text-2xl text-white-500">
                            {/* <IoNotifications size={30} /> */}
                            <i class="fa-solid fa-circle-user" size={30}/>

                        </div>
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
                            class="w-1/4 mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                                        <p class="text-blue-500">Start Now</p>
                                        <p class="text-black-600">Valid Till: Jun 30, 2026</p>
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
                                        <p class="text-blue-500">Start Now</p>
                                        <p class="text-black-600">Valid Till: Lifetime</p>
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
                                        <p class="text-blue-500">Start Now</p>
                                        <p class="text-black-600">Valid Till: Lifetime</p>
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
