import { Key } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router';

export default function Course() {

    const [level, setLevel] = useState("all");

    const courses = [

        {
            title: "Web Development Bootcamp",
            level: "Development",
            author: " By John Doe",
            price: "Rs 999",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
        },
        {
            title: "UI/UX Design Mastery",
            level: "Design",
            author: "By Sarah Lee",
            price: "Rs 799",
            image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
        },
        {
            title: "Digital Marketing Course",
            level: "Marketing",
            author: "By Rahul Sharma",
            price: "Rs 699",
            image: " https://images.unsplash.com/photo-1533750349088-cd871a92f312"
        },
        {
            title: "JavaScript Advanced",
            level: "Development",
            author: "By Aman Verma",
            price: "Rs 899",
            image: "https://assets.bacancytechnology.com/qanda/wp-content/uploads/2025/11/12102419/generate-UUID-in-JavaScript-1.jpg"
        },
        {
            title: "Python for Beginners",
            level: "Development",
            author: "By Neha Singh",
            price: "Rs 599",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        },
        {
            title: " Data Science Basics",
            level: "Development",
            author: " By Priya Gupta",
            price: "Rs 1099",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        },
    ];

    const filterCourses =
        level === "all"
            ? courses
            : courses.filter(course => course.level === level);

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
                        <button
                            onClick={() => setLevel("all")}
                            class="px-5 py-2 bg-blue-600 text-white rounded-full">All</button>
                        <button
                            onClick={() => setLevel("Development")}
                            class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Development</button>
                        <button
                            onClick={() => setLevel("Design")}
                            class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Design</button>
                        <button
                            onClick={() => setLevel("Marketing")}
                            class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Marketing</button>
                    </div>

                    {/* <!-- Courses Grid --> */}
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {filterCourses.map((course, index) => (
                            <div key={index} class="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    class="w-full h-48 object-cover" />
                                <div class="p-5">
                                    <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                        {course.level}
                                    </span>

                                    <h3 class="text-lg font-semibold text-gray-800"> {course.title}</h3>

                                    <p class="text-sm text-gray-500 mt-1">By {course.author}</p>

                                    <div class="flex items-center justify-between mt-4">
                                        <span class="text-blue-600 font-bold"> {course.price}</span>

                                        <Link to="/enroll">
                                        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                                            Enroll
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
