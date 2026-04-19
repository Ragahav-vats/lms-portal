import { Link } from 'lucide-react'
import React, { useState } from 'react'


export default function Web() {
    const [level, setLevel] = useState("all");

    const courses = [
        {
            title: "HTML & CSS Bootcamp",
            level: "beginner",
            author: "John Doe",
            duration: "8 hrs",
            rating: "4.7",
            price: "Rs 499",
            image: " https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },
        {
            title: "JavaScript Mastery",
            level: "intermediate",
            author: "Aman Verma",
            duration: "12 hrs",
            rating: "4.8",
            price: "Rs 799",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        },
        {
            title: "React JS Complete Guide",
            level: "advanced",
            author: "Neha Singh",
            duration: "15 hrs",
            rating: "4.9",
            price: "Rs 999",
            image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04"
        },
        {
            title: "Node.js & Express",
            level: "advanced",
            author: " Priya Gupta",
            duration: "10 hrs",
            rating: "4.7",
            price: "Rs 1199",
            image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
        },
        {
            title: "MERN Stack Development",
            level: "advanced",
            author: "Rahul Sharma",
            duration: "20 hrs",
            rating: "4.8",
            price: "Rs 1299",
            image: "https://images.unsplash.com/photo-1605379399642-870262d3d051"
        }
    ];

    const filterCourses =
        level === "all"
            ? courses
            : courses.filter(course => course.level === level);

    return (
        <>
            <section class="bg-gray-50 min-h-screen py-10 px-4">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- Hero Section --> */}
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl mb-10 text-center">
                        <h1 class="text-4xl font-bold mb-3">
                            Web Development Courses
                        </h1>
                        <p class="text-gray-200">
                            Learn HTML, CSS, JavaScript, React & Full Stack Development
                        </p>

                        {/* <!-- search --> */}
                        <div class="mt-6 max-w-xl mx-auto flex">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                class="w-full px-4 py-3 rounded-l-lg text-black focus:outline-none"
                            />
                            <button class="bg-black px-6 rounded-r-lg">
                                🔍
                            </button>
                        </div>
                    </div>


                    <div class="flex flex-wrap gap-4 mb-10 justify-center">
                        <button
                            onClick={() => setLevel("all")}
                            class="px-5 py-2 bg-blue-600 text-white rounded-full">All</button>

                        <button
                            onClick={() => setLevel("beginner")}
                            class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Beginner</button>

                        <button
                            onClick={() => setLevel("intermediate")}
                            class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Intermediate</button>

                        <button
                            onClick={() => setLevel("advanced")}
                            class="px-5 py-2 bg-white shadow rounded-full hover:bg-blue-100">Advanced</button>
                    </div>

                    {/* <!-- Courses Grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {filterCourses.map((course, index) => (
                            <div key={index} className="bg-white rounded-xl shadow overflow-hidden">

                                {/* 🔹 Image */}
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-48 object-cover"
                                />

                                {/* 🔹 Content */}
                                <div className="p-5">

                                    <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                        {course.level}
                                    </span>

                                    <h3 className="text-lg font-semibold mt-3">
                                        {course.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        By {course.author}
                                    </p>

                                    <div className="flex justify-between text-sm text-gray-500 mt-3">
                                        <span>⏱ {course.duration}</span>
                                        <span>⭐ {course.rating}</span>
                                    </div>

                                    {/* 🔹 Price + Button */}
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-blue-600 font-bold">
                                            {course.price}
                                        </span>

                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                            View
                                        </button>
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
