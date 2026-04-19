import { Key } from 'lucide-react';
import React, { useState } from 'react'

export default function App() {

    const [level, setLevel] = useState("all");

    const courses = [

    {
            title: "Android App Development (Kotlin)",
            level: "Android",
            author: " Rahul Verma",
            duration: "15 hrs",
            rating: "4.8",
            price: "Rs 999",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
        },
        {
            title: "iOS Development with Swift",
            level: "iOS",
            author: "Neha Singh",
            duration: "12 hrs",
            rating: "4.7",
            price: "Rs 1099",
            image: "https://picsum.photos/400/250?random=2"
        },
         {
            title: "Flutter Complete Guide",
            level: "Flutter",
            author: "Aman Kumar",
            duration: "18 hrs",
            rating: "4.9",
            price: "Rs 1299",
            image: " https://images.unsplash.com/photo-1605379399642-870262d3d051"
        },
        {
            title: "React Native App Development",
            level: "React Native",
            author: "Priya Gupta",
            duration: "14 hrs",
            rating: "4.8",
            price: "Rs 1199",
            image: "https://images.unsplash.com/photo-1590608897129-79da98d15969"
        },
        {
            title: "Full Stack Mobile App (Firebase)",
            level: "Full Stack App",
            author: "By Expert Team",
            duration: "20 hrs",
            rating: "4.9",
            price: "Rs 1399",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        },
        {
            title: " Mobile App UI/UX Design",
            level: " UI Design",
            author: " By Sarah Lee",
            duration: "10 hrs",
            rating: "4.7",
            price: "Rs 699",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
        },
    ];

    const filterCourses =
        level === "all"
            ? courses
            : courses.filter(course => course.level === level);
            console.log(filterCourses);

    return (
        <>
            <section class="bg-gradient-to-r from-purple-600 via-pink-50 to-indigo-50 min-h-screen py-10 px-4">
                <div class="max-w-7xl mx-auto">

                    {/* <!-- Hero Section --> */}
                    <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl mb-10 text-center shadow-lg">
                        <h1 class="text-4xl font-bold mb-3">
                            App Development Courses 📱
                        </h1>
                        <p class="text-gray-200">
                            Learn Android, iOS, Flutter & React Native from scratch
                        </p>

                        {/* <!-- Search --> */}
                        <div class="mt-6 max-w-xl mx-auto flex">
                            <input
                                type="text"
                                placeholder="Search app dev courses..."
                                class="w-full px-4 py-3 rounded-l-lg text-black focus:outline-none"
                            />
                            <button class="bg-black px-6 rounded-r-lg">
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* <!-- Filters --> */}
                    <div class="flex flex-wrap justify-center gap-4 mb-10">
                        <button 
                        onClick={() => setLevel("all")}
                        class="px-5 py-2 bg-purple-600 text-white rounded-full">All</button>
                        <button 
                        onClick={() => setLevel("Android")}
                        class="px-5 py-2 bg-white shadow rounded-full hover:bg-purple-100">Android</button>
                        <button
                        onClick={() => setLevel("iOS")}
                         class="px-5 py-2 bg-white shadow rounded-full hover:bg-purple-100">iOS</button>
                        <button 
                        onClick={() => setLevel("Flutter")}
                        class="px-5 py-2 bg-white shadow rounded-full hover:bg-purple-100">Flutter</button>
                        <button 
                        onClick={() => setLevel("React Native")}
                        class="px-5 py-2 bg-white shadow rounded-full hover:bg-purple-100">React Native</button>
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
