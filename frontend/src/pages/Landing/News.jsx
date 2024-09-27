import React from "react";
import ImgNew from "../../assets/newsImg.jpeg";
import ImgNew2 from "../../assets/newsImg2.jpeg";
import ImgNew3 from "../../assets/newsImg3.jpeg";
import ImgWebinar from "../../assets/newsImg4.jpeg"
import Header from './Header'
import Footer from './Footer'

function News() {
    return (
        <>
        <Header />
            <div className="bg-[#f2f8fa] px-4 py-10 lg:mt-44">
                <div className="lg:flex justify-around  lg:text-left text-center w-[90%] lg:w-[80%] m-auto ">
                    <div className="lg:w-[40%]">
                        <h2 className="text-[14px] font-semibold text-gray-500 uppercase">
                            COMING IN HOT
                        </h2>
                        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
                            Instructure <span className="text-red-600">News & Events</span>
                        </h1>
                    </div>
                    <div className="lg:w-[40%]">
                        <p className="mt-4 text-[16px] text-gray-700 leading-relaxed">
                            Press releases, product updates, InstructureCons, webinars, and
                            more—stay up to date on the latest Instructure and Canvas
                            happenings.{" "}
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:flex justify-around items-center text-center lg:text-left  w-[90%] lg:w-[80%] m-auto py-12">
                <div className="lg:w-[40%]">
                    <img src={ImgNew} alt="" className="rounded-lg m-auto lg:m-0" />
                </div>
                <div className="lg:w-[40%] lg:mt-0 mt-5">
                    <h2 className="text-[14px] font-semibold text-gray-500 uppercase">
                        Unlock the Power of Your Data
                    </h2>
                    <h1 className="mt-2 text-[22px] lg:text-4xl font-extrabold text-[#287a9f] leading-tight">
                        Introducing Intelligent Insights by Instructure
                    </h1>
                    <p className="mt-4 text-[16px] text-gray-700 leading-relaxed">
                        Supercharge your decision-making with Intelligent Insights. This
                        AI-driven tool for Canvas Admins turns raw data into actionable
                        insights, helping you enhance teaching and learning outcomes. See
                        what's working, spot areas for improvement, and take action to drive
                        success.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700  transition duration-300 active:scale-90">
                        Learn more →
                    </button>
                </div>
            </div>

            <div className="lg:flex justify-around items-center text-center lg:text-left w-[90%] lg:w-[80%] m-auto py-12">
                <div className="lg:w-[40%]">
                    <h2 className="text-[14px] font-semibold text-gray-500 uppercase">
                        Instructure + Parchment
                    </h2>
                    <h1 className="mt-2 text-[22px] lg:text-4xl font-extrabold text-[#287a9f] leading-tight">
                        Parchment Acquisition Boosts Learning Ecosystem{" "}
                    </h1>
                    <p className="mt-4 text-[16px] text-gray-700 leading-relaxed">
                        Parchment provides a seamless way for learners to demonstrate skill
                        mastery throughout their journey. The addition of Parchment expands
                        the Instructure teaching and learning ecosystem by providing
                        learners with a lifelong record of their journey.{" "}
                    </p>
                    <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700  transition duration-300 active:scale-90">
                        Read the Full Announcement
                    </button>
                </div>
                <div className="lg:w-[40%] mt-5 lg:mt-0">
                    <img src={ImgNew2} alt="" className="rounded-lg m-auto lg:m-0" />
                </div>
            </div>

            <div className="py-12 bg-[#f2f8fa]">
                <h1 className="mt-2 lg:text-4xl text-[22px] text-center font-extrabold text-[#287a9f] leading-tight">
                    Instructure News & Media Resources
                </h1>

                <div className="lg:flex justify-evenly w-[90%] lg:w-[80%] mt-8 m-auto">
                    <div
                        className="lg:w-[30%]  lg:mt-0   mt-5 m-auto lg:m-0 w-[90%] rounded-lg"
                        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                    >
                        <img src={ImgNew3} alt="" className="rounded-l-lg rounded-r-lg" />
                        <div className="p-7 ">
                            <div className="mt-2 text-[20px]  font-extrabold text-[#287a9f] leading-tight">
                                Relive <br /> InstructureCon 2023{" "}
                            </div>

                            <a
                                href=""
                                className="text-[16px] text-red-600  mt-2 block font-semibold"
                            >
                                {" "}
                                Learn more →
                            </a>
                        </div>
                    </div>
                    <div
                        className="rounded-lg lg:w-[30%]  lg:mt-0   mt-5 m-auto lg:m-0 w-[90%]"
                        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                    >
                        <img src={ImgNew3} alt="" className="rounded-l-lg rounded-r-lg" />
                        <div className="p-7 ">
                            <div className="mt-2 text-[20px]  font-extrabold text-[#287a9f] leading-tight">
                                Relive <br /> InstructureCon 2023{" "}
                            </div>

                            <a
                                href=""
                                className="text-[16px] text-red-600  mt-2 block font-semibold"
                            >
                                {" "}
                                Learn more →
                            </a>
                        </div>
                    </div>
                    <div
                        className=" lg:w-[30%] m-auto  lg:mt-0   mt-5 lg:m-0 w-[90%] rounded-lg"
                        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                    >
                        <img src={ImgNew3} alt="" className="rounded-l-lg rounded-r-lg" />
                        <div className="p-7 ">
                            <div className="mt-2 text-[20px]  font-extrabold text-[#287a9f] leading-tight">
                                Relive <br /> InstructureCon 2023{" "}
                            </div>


                        </div>
                    </div>{" "}
                </div>

                <button className="mt-6 m-auto block px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700  transition duration-300 active:scale-90">
                    View all Press Releases →
                </button>
            </div>



            <div className="py-12">
                <h1 className="mt-2 text-[22px] lg:text-4xl text-center font-extrabold text-[#287a9f] leading-tight">
                    Watch Our Webinars        </h1>
                <div className="lg:flex justify-evenly w-[90%]  lg:w-[60%] mt-8 m-auto">
                    <div
                        className="lg:w-[40%] m-auto lg:m-0 w-[90%] rounded-lg"
                        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                    >
                        <img src={ImgWebinar} alt="" className="rounded-l-lg rounded-r-lg" />
                        <div className="p-7 ">
                            <h2 className="text-[14px] font-semibold text-gray-500 uppercase">
                                On-Demand Webinars
                            </h2>
                            <div className="mt-2 text-[20px]  font-extrabold text-black leading-tight">
                                Measuring Impact: Elevate Your EdTech Investments.
                            </div>

                            <a
                                href=""
                                className="text-[16px] text-red-600  mt-2 block font-semibold"
                            >
                                {" "}
                                Learn more →
                            </a>
                        </div>
                    </div>

                    <div
                        className=" lg:w-[40%] m-auto lg:m-0 lg:mt-0   mt-5 w-[90%] rounded-lg"
                        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                    >
                        <img src={ImgWebinar} alt="" className="rounded-l-lg rounded-r-lg" />
                        <div className="p-7 ">
                            <h2 className="text-[14px] font-semibold text-gray-500 uppercase">
                                On-Demand Webinars
                            </h2>
                            <div className="mt-2 text-[20px]  font-extrabold text-black leading-tight">
                                How Student UX and Accessibility Support Retention              </div>
                            <a
                                href=""
                                className="text-[16px] text-red-600  mt-2 block font-semibold"
                            >
                                {" "}
                                Learn more →
                            </a>

                        </div>
                    </div>{" "}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default News