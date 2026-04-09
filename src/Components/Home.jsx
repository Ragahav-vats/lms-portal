import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';


export default function Home() {

  const navigate = useNavigate();
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      title: "Fueling Skills, Igniting Careers",
      highlight: "Careers",
      desc: "Master industry-relevant skills and boost your growth."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Learn From Industry Experts",
      highlight: "Experts",
      desc: "Get real-world knowledge from professionals."
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Upgrade Your Future Today",
      highlight: "Future",
      desc: "Start learning and achieve your career goals."
    }
  ];
  const [current, setCurrent] = useState(0);

  // Auto change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 1000); // 1 sec

    return () => clearInterval(interval);
  }, []);

   const learning = (event) => {
      event.preventDefault();
      navigate("/courses");
   }

  return (
    <>
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <img
          src={slides[current].image}
          alt="slide"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {slides[current].title.split(" ").map((word, i) =>
              word === slides[current].highlight ? (
                <span key={i} className="text-blue-500"> {word} </span>
              ) : (
                " " + word + " "
              )
            )}
          </h1>

          <p className="text-gray-300 mt-4 text-sm md:text-lg">
            {slides[current].desc}
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white font-semibold" onClick={learning}>
            Start Learning
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Explore Our Learning Platform
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover top-quality courses, expert mentors, and flexible learning options to boost your career.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="course"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Expert Courses
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Learn from industry experts with real-world experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                alt="learning"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Flexible Learning
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Learn anytime, anywhere at your own pace.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                alt="certificate"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Certification
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Get certified and showcase your skills to employers.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center hover:-translate-y-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                alt="mentor"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Expert Mentors
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Learn from top mentors with real industry experience.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center hover:-translate-y-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                alt="live classes"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Live Classes
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Attend live sessions and interact with instructors.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center hover:-translate-y-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                alt="projects"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Real Projects
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Work on real-world projects to gain practical experience.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center hover:-translate-y-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
                alt="community"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Community Support
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Join a community of learners and grow together.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center hover:-translate-y-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="career"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Career Guidance
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Get guidance to build your career path effectively.
              </p>
            </div>

            {/* Card 9 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center hover:-translate-y-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                alt="lifetime"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Lifetime Access
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Access your courses anytime with lifetime availability.
              </p>
            </div>

          </div>

          {/* Extra Text Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

            {/* Left Text */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Why Choose LearnHub?
              </h2>
              <p className="mt-4 text-gray-600">
                LearnHub provides a powerful learning experience with modern tools, expert instructors, and a user-friendly platform designed for students and professionals.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>✔ 100+ Premium Courses</li>
                <li>✔ Expert Mentors</li>
                <li>✔ Lifetime Access</li>
                <li>✔ Job Ready Skills</li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="learning"
                className="w-72 md:w-96 hover:scale-105 transition"
              />
            </div>

          </div>

        </div>

      </section>


    </>
  )
}
