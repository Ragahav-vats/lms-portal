import React from 'react'

export default function Home() {
  return (
    <>


      <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-16">

        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">

          {/* Left Content */}
          <div className="text-center md:text-left md:w-1/2">

            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Upgrade Your Skills with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                LearnHub
              </span>
            </h1>

            <p className="mt-4 text-gray-600 text-sm md:text-lg leading-6">
              Explore top-quality courses from industry experts and boost your career with practical learning.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition">
                Get Started
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 hover:scale-105 transition">
                Explore Courses
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="Learning"
              className="w-72 md:w-96 drop-shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

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
                src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
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
