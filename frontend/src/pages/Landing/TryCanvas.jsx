import React from 'react';
import { Link } from 'react-router-dom';

function TryCanvas() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-6 mt-[70px] gap-[200px]">
            {/* Left Side Content */}
            <div className="max-w-lg md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-4xl font-bold text-[#091d4f]">
                    Use <span className="text-[#e4060f]">Canvas</span> For <span className="text-[#e4060f]">Free</span>
                </h2>
                <p className="mt-4 text-gray-700">
                    A Canvas Free-for-Teacher account has the essential features and functionality of Canvas LMS, even if your institution is not a Canvas customer. Whether you want to get to know basic Canvas features or need an environment to deliver courses, Free-for-Teacher gives access to students, parents, and administrators. Leverage the power of Canvas with course-level access that comes at no cost to you.
                </p>
                <ul className="mt-4 list-none">
                    <li className="flex items-start mt-2">
                        <span className="text-[#e4060f] mr-2">✔</span> Create content such as assignments, quizzes, discussions, and video conferences
                    </li>
                    <li className="flex items-start mt-2">
                        <span className="text-[#e4060f] mr-2">✔</span> Personalize learning with Mastery Paths, Outcomes, and standards-based gradebooks
                    </li>
                    <li className="flex items-start mt-2">
                        <span className="text-[#e4060f] mr-2">✔</span> Leverage the Canvas mobile app suite
                    </li>
                    <li className="flex items-start mt-2">
                        <span className="text-[#e4060f] mr-2">✔</span> Integrate with third-party applications
                    </li>
                </ul>
                <p className="mt-4 text-gray-700">
                    Get to know Canvas Free-for-Teacher by visiting our <a href="#" className="text-[#e4060f] underline">Canvas Free-for-Teacher Orientation Page</a>.
                </p>
            </div>

            {/* Right Side Form */}
            <div className="bg-white p-8 rounded-md md:w-1/3 w-full shadow-xl">
                <h2 className="text-2xl font-semibold text-[#091d4f] mb-4">Create Your Account</h2>
                <p className="text-gray-700 mb-6">Want to see Canvas in action? <a href="#" className="text-[#091d4f] underline">Get a demo</a>.</p>

                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Last Name</label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700">Account Type</label>
                        <select className="mt-1 p-2 w-full border rounded-md">
                            <option>Teacher</option>
                            <option>Student</option>
                            <option>Parent</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700">CAPTCHA</label>
                        <div className="flex items-center">
                            <div className="border p-2 rounded-md flex-1">
                                {/* Placeholder for CAPTCHA */}
                                <span className="text-lg">[CAPTCHA]</span>
                            </div>
                            <input
                                type="text"
                                className="ml-2 p-2 border rounded-md flex-1"
                                placeholder="Enter Code"
                            />
                        </div>
                    </div>

                    <Link to={'#'}>
                        <button className="mt-6 w-full bg-[#e4060f] text-white p-2 rounded-md hover:bg-[#c0050d] active:scale-90 transition duration-300">
                            SUBMIT
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default TryCanvas;
