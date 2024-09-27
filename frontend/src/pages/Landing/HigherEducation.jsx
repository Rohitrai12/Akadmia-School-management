import React, { useState } from "react";
import Img from '../../assets/Higher.webp';
import HighSmall from '../../assets/highSmall.webp';
import height from '../../assets/height.webp'
import hegihttab2 from '../../assets/hegihttab2.webp'
import hegihttab3 from '../../assets/hegihttab3.webp'
import BugImg from '../../assets/canvalogo.webp'
import zoom from '../../assets/logo-zoom-comp.png.webp'
import flipgrid from '../../assets/logo-flipgrid-comp.png.webp'
import teams from '../../assets/logo-microsoft-teams-comp.png.webp'
import Asse from '../../assets/logo-google-assignments-comp_0.png.webp'
import JoinImage from "../../assets/community.png";
import oneCard from '../../assets/oneCard.webp'
import secCard from '../../assets/secCard.webp'
import ThirdCard from '../../assets/ThirdCard.webp'
import { Link } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'


function HigherEducation() {

    const articles = [
        {
            title: 'AI Foundational Guide for Higher Education',
            category: "Ebooks & Buyer's Guides",
            image: oneCard, // Replace with actual image URLs
            link: '#',
        },
        {
            title: '2023 State of Student Success and Engagement in Higher Education',
            category: 'Research Reports',
            image: secCard,
            link: '#',
        },
        {
            title: "Pillars of Today's Higher Ed Classroom: Canvas + Impact",
            category: "Ebooks & Buyer's Guides",
            image: ThirdCard,
            link: '#',
        },
    ];


    const [activeTab, setActiveTab] = useState(1); // State to manage active tab

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div>
            <Header />
            <div className="bg-[#f0f8fa] py-16 px-6 lg:mt-[175px]">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-3/5">
                        <h2 className="text-base font-semibold text-gray-500 uppercase">The Instructure Learning Platform</h2>
                        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
                            Learning  <span className="text-red-600">Without Limits</span><br />
                        </h1>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            The Instructure Learning Platform is the open, reliable, extensible learning ecosystem enabling the just-right digital learning environment for educators, students, and institutions.
                        </p>
                        <Link to={'/contact-us'}>
                            <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition duration-300 active:scale-90">
                                Request Info  →
                            </button>
                        </Link>
                        <button className="mt-6 ml-[20px] rounded-full text-red-600 bg-white transition duration-300 px-6 py-3 text-center font-semibold shadow-2xl active:scale-90">
                            TRY CANVAS FREE   →
                        </button>
                    </div>
                    <div className="md:w-2/5 mt-8 md:mt-0 flex flex-col items-center">
                        <img
                            src={Img}
                            alt="Instructure Building"
                            className="rounded-lg shadow-lg w-full"
                        />
                        <div className="bg-white p-6 mt-6 rounded-lg shadow-lg flex items-center w-full">
                            <img
                                src={HighSmall}
                                alt="Panda Logo"
                                className="w-[7rem] h-[7rem] rounded mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Director's Cut: Instructure Careers</h3>
                                <a
                                    href="#"
                                    className="text-red-600 font-semibold hover:underline mt-2 block text-sm"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center mt-[80px]">
                <h2 className="text-base font-semibold text-gray-500 uppercase">The Instructure Learning Platform</h2>
                <h3 className="text-4xl font-extrabold text-[#091d4f] mt-2">We have you covered.</h3>
                <p className="mt-4 text-gray-600 w-[546px] text-center my-[14px] mx-auto">
                    Higher education is evolving, with ever-higher expectations from both educators and students. So it’s essential to enable a digital classroom that goes beyond the physical campus to keep students engaged with learning and support them in achieving their academic goals.
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="max-w-7xl mx-auto mt-8">
                <div className="flex justify-center border-b border-gray-300">
                    <button
                        className={`py-4 px-6 flex items-center ${activeTab === 1 ? "text-red-600 border-b-4 border-red-600" : "text-gray-600"}`}
                        onClick={() => handleTabClick(1)}
                    >
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3-3m0 0l3 3m-3-3v12m8-8h.01M4 9h.01M21 9h.01M21 15h.01M4 15h.01" />
                        </svg>
                        Learning Management
                    </button>
                    <button
                        className={`py-4 px-6 flex items-center ${activeTab === 2 ? "text-red-600 border-b-4 border-red-600" : "text-gray-600"}`}
                        onClick={() => handleTabClick(2)}
                    >
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-4a2 2 0 00-2-2H5m0 0a2 2 0 00-2 2v4m4 0H3m12-6v6m0 0h-4m4 0h4m0 0a2 2 0 002-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2zm4-4h.01M4 15h.01" />
                        </svg>
                        Student Success
                    </button>
                    <button
                        className={`py-4 px-6 flex items-center ${activeTab === 3 ? "text-red-600 border-b-4 border-red-600" : "text-gray-600"}`}
                        onClick={() => handleTabClick(3)}
                    >
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-4a2 2 0 00-2-2H5m0 0a2 2 0 00-2 2v4m4 0H3m12-6v6m0 0h-4m4 0h4m0 0a2 2 0 002-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2zm4-4h.01M4 15h.01" />
                        </svg>
                        Analytics
                    </button>
                </div>

                {/* Tab Content */}
                <div className="tab-content mt-8">
                    {activeTab === 1 && (
                        <div className="flex flex-col md:flex-row items-center  p-8 rounded-lg">
                            <div className="md:w-1/2">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Reach students from anywhere.</h2>
                                <p className="text-gray-700 mb-4">
                                    Your students want consistent standards across courses—and to know their school is prepared for anything. Whether you’re all together in person or all over the place, our platform keeps everyone JOVANOTTI, learning, and communicating with consistency.
                                </p>
                                <ul className="text-red-600 mb-6">
                                    <li className="flex items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        One digital foundation for all
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Instructional continuity
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Mobility and accessibility
                                    </li>
                                </ul>
                                <Link to={'/about'}>
                                    <button className="bg-red-600 text-white py-2 px-4 rounded-full shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                                        LEARN MORE
                                    </button>
                                </Link>
                            </div>
                            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
                                <img src={height} alt="Student using a mobile device" className="rounded-lg shadow-md w-full" />
                            </div>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className="flex flex-col md:flex-row items-center  p-8 rounded-lg">
                            <div className="md:w-1/2">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Reach students from anywhere.</h2>
                                <p className="text-gray-700 mb-4">
                                    Your students want consistent standards across courses—and to know their school is prepared for anything. Whether you’re all together in person or all over the place, our platform keeps everyone JOVANOTTI, learning, and communicating with consistency.
                                </p>
                                <ul className="text-red-600 mb-6">
                                    <li className="flex items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        One digital foundation for all
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Instructional continuity
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Mobility and accessibility
                                    </li>
                                </ul>
                                <Link to={'/about'}>
                                    <button className="bg-red-600 text-white py-2 px-4 rounded-full shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                                        LEARN MORE
                                    </button>
                                </Link>
                            </div>
                            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
                                <img src={hegihttab2} alt="Student using a mobile device" className="rounded-lg shadow-md w-full" />
                            </div>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div className="flex flex-col md:flex-row items-center  p-8 rounded-lg">
                            <div className="md:w-1/2">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Reach students from anywhere.</h2>
                                <p className="text-gray-700 mb-4">
                                    Your students want consistent standards across courses—and to know their school is prepared for anything. Whether you’re all together in person or all over the place, our platform keeps everyone JOVANOTTI, learning, and communicating with consistency.
                                </p>
                                <ul className="text-red-600 mb-6">
                                    <li className="flex items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        One digital foundation for all
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Instructional continuity
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Mobility and accessibility
                                    </li>
                                </ul>
                                <Link to={'/about'}>
                                    <button className="bg-red-600 text-white py-2 px-4 rounded-full shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                                        LEARN MORE
                                    </button>
                                </Link>
                            </div>
                            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
                                <img src={hegihttab3} alt="Student using a mobile device" className="rounded-lg shadow-md w-full" />
                            </div>
                        </div>
                    )}
                </div>

                {/*  */}

                <div className='lg:flex justify-between mt-28'>
                    <div className='lg:text-left text-center p-4 lg:p-0 lg:w-[40%]'>
                        <h3 className='text-[16px] text-[] font-semibold'>Our Product</h3>
                        <h2 className='text-[36px] text-[#287a9f] font-semibold leading-10'>A Complete <br /> Learning Ecosystem</h2>
                        <p className='text-[18px] text-[#143d50] w-[90%]'>Canvas tools work together to enrich, support, and connect every aspect of your educational programs.</p>
                        <a
                            href="#"
                            className="text-red-600 bg-white  font-semibold block md:w-[260px] w-auto  text-center p-5 hover:underline mt-5  rounded-full text-sm"
                            style={{ boxShadow: "0 20px 50px 10px rgba(20,61,80,.15)" }}
                        >
                            EXPLORE ALL PRODUCTS →
                        </a>
                    </div>

                    <div className='lg:flex justify-end lg:w-[60%]'>
                        <div>
                            <div className='lg:p-8 m-auto lg:m-0  rounded-lg p-4 text-left w-[95%]' style={{ boxShadow: "0 20px 50px 10px rgba(20,61,80,.15)" }}
                            >

                                <img src={BugImg} alt="" className='w-14' />
                                <h3 className='text-[26px] text-[#287a9f] font-semibold mt-4'>Canvas LMS</h3>
                                <p className='text-[18px] text-[#143d50]'>Your ultimate SaaS learning hub. Foster growth, support diverse learning needs, and promote collaboration, whether in-person, blended, or fully online.</p>
                            </div>
                            <div className='lg:p-8 lg:mt-7 m-auto lg:m-0 mt-5   rounded-lg p-4 text-left w-[95%]' style={{ boxShadow: "0 20px 50px 10px rgba(20,61,80,.15)" }}
                            >

                                <img src={BugImg} alt="" className='w-14' />
                                <h3 className='text-[26px] text-[#287a9f] font-semibold mt-4'>Canvas LMS</h3>
                                <p className='text-[18px] text-[#143d50]'>Your ultimate SaaS learning hub. Foster growth, support diverse learning needs, and promote collaboration, whether in-person, blended, or fully online.</p>
                            </div>
                            <div className='lg:p-8 lg:mt-7 m-auto lg:m-0 rounded-lg p-4 mt-5  text-left w-[95%]' style={{ boxShadow: "0 20px 50px 10px rgba(20,61,80,.15)" }}
                            >

                                <img src={BugImg} alt="" className='w-14' />
                                <h3 className='text-[26px] text-[#287a9f] font-semibold mt-4'>Canvas LMS</h3>
                                <p className='text-[18px] text-[#143d50]'>Your ultimate SaaS learning hub. Foster growth, support diverse learning needs, and promote collaboration, whether in-person, blended, or fully online.</p>
                            </div>
                        </div>
                        <div className='lg:mt-40 mt-5 '>
                            <div className='lg:p-8 lg:mt-7 m-auto lg:m-0 mt-5  rounded-lg p-4 text-left w-[95%]' style={{ boxShadow: "0 20px 50px 10px rgba(20,61,80,.15)" }}
                            >

                                <img src={BugImg} alt="" className='w-1' />
                                <h3 className='text-[26px] text-[#287a9f] font-semibold mt-4'>Canvas LMS</h3>
                                <p className='text-[18px] text-[#143d50]'>Your ultimate SaaS learning hub. Foster growth, support diverse learning needs, and promote collaboration, whether in-person, blended, or fully online.</p>
                            </div>
                            <div className='lg:p-8 m-auto lg:m-0 lg:mt-7 mt-5  rounded-lg p-4 text-left w-[95%]' style={{ boxShadow: "0 20px 50px 10px rgba(20,61,80,.15)" }}
                            >

                                <img src={BugImg} alt="" className='w-14' />
                                <h3 className='text-[26px] text-[#287a9f] font-semibold mt-4'>Canvas LMS</h3>
                                <p className='text-[18px] text-[#143d50]'>Your ultimate SaaS learning hub. Foster growth, support diverse learning needs, and promote collaboration, whether in-person, blended, or fully online.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:mt-32 mt-52 relative'>
                    <div className='grid lg:grid-cols-4  grid-cols-1 gap-0 lg:w-[85%] m-auto w-[95%] lg:h-[600px] rounded-xl '>
                        <div className='bg-[#287a9f] text-left lg:p-10 p-5 lg:pt-56 rounded-l-xl  lg:rounded-l-none   rounded-r-xl lg:rounded-t-none rounded-t-xl rounded-b-none'>
                            <h3 className='lg:text-[52px] font-semibold text-[32px] text-white'>6,000+</h3>
                            <span className='lg:text-[22px] font-semibold text-[16px] text-white'>global customers</span>
                        </div>
                        <div className='bg-[#227295] text-left lg:p-10 lg:pt-56 p-5'>
                            <h3 className='lg:text-[52px] font-semibold text-[32px] text-white'>99.9%</h3>
                            <span className='lg:text-[22px] font-semibold text-[16px] text-white'>system uptime</span>
                        </div>
                        <div className='bg-[#1b6b8a] text-left lg:p-10 lg:pt-56  p-5'>
                            <h3 className='lg:text-[52px] font-semibold text-[32px] text-white'>6 million+</h3>
                            <span className='lg:text-[22px] font-semibold text-[16px] text-white'>concurrent users—without a hiccup</span>
                        </div>
                        <div className='bg-[#156380] text-left lg:p-10 lg:pt-56 p-5 lg:rounded-r-xl   lg:rounded-l-none   rounded-l-xl lg:rounded-b-none rounded-b-xl rounded-t-none '>
                            <h3 className='lg:text-[52px] font-semibold text-[32px] text-white'>over 90%</h3>
                            <span className='lg:text-[22px] font-semibold text-[16px] text-white'>best-in-class customer satisfaction score</span>
                        </div>
                    </div>


                    <div className='lg:p-16 p-5 lg:w-[40%] w-[95%]  lg:left-0 left-[2%] absolute lg:-top-28 -top-48 z-100 bg-white rounded-xl text-left' style={{ boxShadow: "0 20px 50px 10px rgba(20,61,80,.15)" }}>
                        <h4 className='text-[#143d50]  font-semibold text-[16px] '>By the Numbers</h4>
                        <h2 className='text-[32px] leading-10 font-semibold text-[#156380]'>It all adds up to one learning ecosystem.</h2>
                        <p className='text-[20px] text-[#444] mt-2'>Instructure has worked long and hard for these grades.</p>
                    </div>
                </div>
                {/*  */}

                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-sm font-semibold text-gray-500 uppercase">Integrations</h2>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#001e4f] w-[33rem] text-center m-0 mx-auto sm:text-4xl">
                            One login. Hundreds of tools and apps.
                        </h3>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-left">
                            <h4 className="text-xl font-semibold text-blue-900">Zoom</h4>
                            <p className="mt-2 text-gray-500">
                                Keep the facetime going strong with Zoom meetings in any Canvas course, module, or calendar.
                            </p>
                            <div className="mt-4">
                                <img src={zoom} alt="Zoom" className="w-9 h-9" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-left">
                            <h4 className="text-xl font-semibold text-blue-900">Microsoft Teams</h4>
                            <p className="mt-2 text-gray-500">
                                Meet with your classes virtually—right inside of Canvas—with the Microsoft Teams integration.
                            </p>
                            <div className="mt-4">
                                <img src={teams} alt="Microsoft Teams" className="w-9 h-9" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-left">
                            <h4 className="text-xl font-semibold text-blue-900">Google Assignments</h4>
                            <p className="mt-2 text-gray-500">
                                Integrate Google Docs and Drive to distribute, analyze, and grade students’ work with the collaborative power of G Suite.
                            </p>
                            <div className="mt-4">
                                <img src={Asse} alt="Google Assignments" className="w-9 h-9" />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-left">
                            <h4 className="text-xl font-semibold text-blue-900">Flipgrid</h4>
                            <p className="mt-2 text-gray-500">
                                Invite the whole class to add threaded video discussions to Canvas courses with Flipgrid.
                            </p>
                            <div className="mt-4">
                                <img src={flipgrid} alt="Flipgrid" className="w-9 h-9" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600">
                            SEE ALL PARTNERS
                        </button>
                    </div>
                </section>

                <div className="container m-auto mt-20">
                    <div className="lg:flex justify-around w-[85%] rounded-xl bg-[#091D4F] px-5 py-10 m-auto items-center">
                        <div className="lg:w-[35%] w-[95%] m-auto lg:m-0 lg:text-left text-center">
                            <h3 className="text-[14px] font-semibold text-white">
                                OVER 20000 STRONG
                            </h3>

                            <h2 className="lg:text-[40px] text-[24px] md:text-[30px] font-semibold text-white">
                                Join Our Community
                            </h2>


                            <p className="lg:text-[16px] text-[14px] text-white ">
                                Meet our user community: over twenty thousand of the most
                                insightful, engaged, and learning-loving individuals out there.
                            </p>


                            <button
                                className="mt-8 px-2 lg:px-6 w-fit rounded-full p-3 lg:text-[16px] text-[14px] text-center bg-[#fff] text-[#091D4F] font-semibold"
                                style={{
                                    boxShadow: " 0px 20px 50px 10px rgba(20, 61, 80, 0.15)",
                                }}
                            >
                                Visit the community{" "}
                                <svg
                                    width="15"
                                    height="21"
                                    viewBox="0 0 15 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline ml-2"
                                >
                                    <g clipPath="url(#clip0_3_2563)">
                                        <path
                                            d="M1.15768 9.34563C1.18503 9.34563 1.21237 9.34335 1.23971 9.33879C1.26706 9.33423 1.2944 9.33195 1.32175 9.33195H11.2065L10.9878 9.23625C10.8784 9.18156 10.7758 9.12232 10.6801 9.05852C10.5844 8.99472 10.4956 8.9218 10.4135 8.83977L7.65182 6.06438C7.46953 5.8912 7.36471 5.67929 7.33737 5.42863C7.31003 5.17798 7.36471 4.94784 7.50143 4.7382C7.6655 4.51034 7.88425 4.3759 8.15768 4.33488C8.43112 4.29387 8.68177 4.35539 8.90964 4.51945C8.92787 4.53768 8.94382 4.55363 8.95749 4.56731C8.97116 4.58098 8.98711 4.59237 9.00534 4.60149L14.0229 9.61906C14.2143 9.81047 14.31 10.0452 14.31 10.3232C14.31 10.6012 14.2143 10.8359 14.0229 11.0273L9.00534 16.0448C8.81393 16.2363 8.57923 16.332 8.30124 16.332C8.02324 16.332 7.78854 16.2363 7.59714 16.0448C7.57891 16.0266 7.56296 16.0084 7.54928 15.9902C7.53561 15.9719 7.51966 15.9537 7.50143 15.9355C7.36471 15.7258 7.31003 15.4957 7.33737 15.245C7.36471 14.9944 7.46953 14.7825 7.65182 14.6093L10.4135 11.8339C10.4865 11.761 10.5662 11.6949 10.6528 11.6357C10.7394 11.5764 10.8283 11.524 10.9194 11.4784L11.2202 11.3417H1.37643C1.12122 11.3508 0.89336 11.2756 0.692839 11.1161C0.492318 10.9566 0.369272 10.7493 0.323699 10.4941C0.278126 10.2206 0.33737 9.97225 0.501433 9.74895C0.665495 9.52564 0.884246 9.3912 1.15768 9.34563Z"
                                            fill="#091D4F"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_2563">
                                            <rect
                                                width="14"
                                                height="20.3"
                                                fill="#091D4F"
                                                transform="matrix(1 0 0 -1 0.310059 20.48)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <div>

                            <img
                                src={JoinImage}
                                alt=""
                                className="m-auto mt-5 lg:mt-0 lg:m-0"
                            />
                        </div>
                    </div>
                </div>

                {/* Cards */}

                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">The Latest From Instructure</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {articles.map((article, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img className="w-full h-48 object-cover" src={article.image} alt={article.title} />
                                    <div className="p-6">
                                        <h3 className="text-sm font-medium text-gray-500 mb-2">{article.category}</h3>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-4">{article.title}</h2>
                                        <a href={article.link} className="text-red-500 font-medium hover:underline">
                                            READ MORE &rarr;
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </div>
            {/* Last */}

            <div className='bg-[#091D4F] p-10 lg:p-20 '>
                <div className='container m-auto'>
                    <p className='font-semibold text-center text-white lg:text-[40px] text-[24px] md:text-[30px]'>Ready to explore our learning ecosystem?</p>

                    <button
                        className="mt-8 block m-auto px-6 w-fit rounded-full p-3 bg-[white] text-[#091D4F] font-semibold"
                        style={{ boxShadow: " 0px 20px 50px 10px rgba(20, 61, 80, 0.15)" }}
                    >
                        Let’s Get Started
                        <svg
                            width="15"
                            height="21"
                            viewBox="0 0 15 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline ml-2"
                        >
                            <g clipPath="url(#clip0_3_2563)">
                                <path
                                    d="M1.15768 9.34563C1.18503 9.34563 1.21237 9.34335 1.23971 9.33879C1.26706 9.33423 1.2944 9.33195 1.32175 9.33195H11.2065L10.9878 9.23625C10.8784 9.18156 10.7758 9.12232 10.6801 9.05852C10.5844 8.99472 10.4956 8.9218 10.4135 8.83977L7.65182 6.06438C7.46953 5.8912 7.36471 5.67929 7.33737 5.42863C7.31003 5.17798 7.36471 4.94784 7.50143 4.7382C7.6655 4.51034 7.88425 4.3759 8.15768 4.33488C8.43112 4.29387 8.68177 4.35539 8.90964 4.51945C8.92787 4.53768 8.94382 4.55363 8.95749 4.56731C8.97116 4.58098 8.98711 4.59237 9.00534 4.60149L14.0229 9.61906C14.2143 9.81047 14.31 10.0452 14.31 10.3232C14.31 10.6012 14.2143 10.8359 14.0229 11.0273L9.00534 16.0448C8.81393 16.2363 8.57923 16.332 8.30124 16.332C8.02324 16.332 7.78854 16.2363 7.59714 16.0448C7.57891 16.0266 7.56296 16.0084 7.54928 15.9902C7.53561 15.9719 7.51966 15.9537 7.50143 15.9355C7.36471 15.7258 7.31003 15.4957 7.33737 15.245C7.36471 14.9944 7.46953 14.7825 7.65182 14.6093L10.4135 11.8339C10.4865 11.761 10.5662 11.6949 10.6528 11.6357C10.7394 11.5764 10.8283 11.524 10.9194 11.4784L11.2202 11.3417H1.37643C1.12122 11.3508 0.89336 11.2756 0.692839 11.1161C0.492318 10.9566 0.369272 10.7493 0.323699 10.4941C0.278126 10.2206 0.33737 9.97225 0.501433 9.74895C0.665495 9.52564 0.884246 9.3912 1.15768 9.34563Z"
                                    fill="#091D4F"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_2563">
                                    <rect
                                        width="14"
                                        height="20.3"
                                        fill="white"
                                        transform="matrix(1 0 0 -1 0.310059 20.48)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>


                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HigherEducation;