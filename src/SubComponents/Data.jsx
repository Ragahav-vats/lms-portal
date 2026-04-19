import { Key } from 'lucide-react';
import React, { useState } from 'react'

export default function Data() {

    const [level, setLevel] = useState("all");
    
        const courses = [
    
        {
                title: " Python for Data Science",
                level: "Python",
                author: " Aman Verma",
                duration: "10 hrs",
                rating: "4.8",
                price: "Rs 799",
                image: "https://picsum.photos/400/250?random=11"
            },
            {
                title: "Machine Learning A-Z",
                level: "Machine Learning",
                author: "Priya Gupta",
                duration: "15 hrs",
                rating: "4.9",
                price: "Rs 999",
                image: "https://picsum.photos/400/250?random=12"
            },
             {
                title: "Artificial Intelligence Basics",
                level: "AI",
                author: "Rahul Sharma",
                duration: "12 hrs",
                rating: "4.7",
                price: "Rs 899",
                image: "https://picsum.photos/400/250?random=13"
            },
            {
                title: "Data Analytics Mastery",
                level: "Data Analysis",
                author: "By Neha Singh",
                duration: "14 hrs",
                rating: "4.8",
                price: "Rs 999",
                image: "https://picsum.photos/400/250?random=14"
            },
            {
                title: " Deep Learning with TensorFlow",
                level: "Deep Learning",
                author: "By Expert Team",
                duration: "18 hrs",
                rating: "4.9",
                price: "Rs 1299",
                image: "https://picsum.photos/400/250?random=15"
            },
            {
                title: " Real World Data Science Projects",
                level: " Projects",
                author: " By Industry Experts",
                duration: "20 hrs",
                rating: "4.9",
                price: "Rs 1399",
                image: "https://picsum.photos/400/250?random=16"
            },
        ];
    
        const filterCourses =
            level === "all"
                ? courses
                : courses.filter(course => course.level === level);

    return (
        <>
            <section class="bg-gradient-to-r from-purple-600 via-pink-50 to-indigo-50 min-h-screen py-10 px-4 text-white">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- Hero Section --> */}
                    <div class="text-center mb-10">
                        <h1 class="text-4xl font-bold mb-3">
                            Data Science Courses 📊
                        </h1>
                        <p class="text-gray-400">
                            Learn Python, Machine Learning, AI & Data Analytics
                        </p>

                        {/* <!-- Search --> */}
                        <div class="mt-6 max-w-xl mx-auto flex">
                            <input
                                type="text"
                                placeholder="Search data science courses..."
                                class="w-full px-4 py-3 rounded-l-lg text-black focus:outline-none"
                            />
                            <button class="bg-blue-600 px-6 rounded-r-lg">
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* <!-- Filters --> */}
                    <div class="flex flex-wrap justify-center gap-4 mb-10">
                        <button 
                        onClick={() => setLevel("all")}
                        class="px-5 py-2 bg-blue-600 rounded-full">All</button>
                        <button 
                        onClick={() => setLevel("Python")}
                        class="px-5 py-2 bg-gray-700 rounded-full hover:bg-blue-500">Python</button>
                        <button 
                        onClick={() => setLevel("Machine Learning")}
                        class="px-5 py-2 bg-gray-700 rounded-full hover:bg-blue-500">Machine Learning</button>
                        <button 
                        onClick={() => setLevel("AI")}
                        class="px-5 py-2 bg-gray-700 rounded-full hover:bg-blue-500">AI</button>
                        <button 
                        onClick={() => setLevel("Data Analysis")}
                        class="px-5 py-2 bg-gray-700 rounded-full hover:bg-blue-500">Data Analysis</button>
                    </div>

                    {/* <!-- Courses Grid --> */}
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

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
