import React from 'react'
import One from '../../assets/one.webp'
import Two from '../../assets/two.webp'
import resourceImg1 from '../../assets/resourse-img1.webp'
import resourceImg2 from '../../assets/resource-img2.webp'
import resourceImg3 from '../../assets/resource-img3.webp'
import fImg1 from '../../assets/feature1.webp'
import fImg2 from '../../assets/feature2.webp'
import fImg3 from '../../assets/feature3.webp'
import fImg4 from '../../assets/feature4.webp'
import fImg5 from '../../assets/feature5.webp'
import fImg6 from '../../assets/feature6.webp'
import Header from './Header'
import Footer from './Footer'

const Resources = () => {
    return (
        <>
        <Header />
            <div className='bgImg w-full p-5 py-20 mt-[169px]'>
                <div className="lg:w-[80%] w-[95%] lg:flex m-auto p-10 bg-white rounded-xl justify-between">
                    <div className='lg:w-[50%]'>
                        <h2 className="text-base font-semibold text-gray-500 uppercase">Resource Center

                        </h2>
                        <h1 className="mt-2  text-[24px] lg:text-[46px] font-extrabold text-[#287a9f] leading-tight">
                            The Instructure <br /> <span className="text-red-600">Study Hall</span>
                        </h1>
                        <p className="mt-4 text-[16px] text-gray-700 leading-relaxed">
                            Explore our content library to stay ahead of the learning curve. The Instructure Study Hall is full of the thought leadership articles, customer stories, research reports, videos, infographics, and product overviews that K-12 and Higher Education need to succeed.                        </p>

                    </div>

                    <div className='lg:w-[40%] mt-5 lg:mt-0'>
                        <div className='md:flex items-center'>
                            <div>
                                <img src={One} alt="" className='lg:w-[600px] rounded-lg' />
                            </div>
                            <div className='pl-2'>
                                <h2 className='text-[14px] font-semibold text-gray-500 '>RESEARCH</h2>
                                <p className='text-[16px] font-semibold text-[#287a9f]'>STATE OF STUDENT SUCCESS AND ENGAGMENT IN HIGHER EDUCATION</p>
                            </div>
                        </div>
                        <div className='md:flex mt-4 items-center'>
                            <div>
                                <img src={Two} alt="" className='lg:w-[600px] rounded-lg' />
                            </div>
                            <div className='pl-2'>
                                <h2 className='text-[14px] font-semibold text-gray-500 '>RESEARCH</h2>
                                <p className='text-[16px] font-semibold text-[#287a9f]'>STATE OF STUDENT SUCCESS AND ENGAGMENT IN HIGHER EDUCATION</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:flex lg:w-[85%] w-[95%]  m-auto mt-20  p-5 justify-evenly' >
                <div className='lg:w-[25%] w-[95%] rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                    <a href="#">
                        <img src={resourceImg1} alt="" className='rounded-r-lg rounded-l-lg' />
                        <div className='p-4 py-7'>
                            <h2 className='text-[24px] font-semibold mt-4  text-[#287a9f]'>Amplify Teaching</h2>
                            <span className='text-red-600 mt-4 font-semibold text-[16px]'>Learn more →</span>
                        </div>

                    </a>
                </div>
                <div className='lg:w-[25%] w-[95%] mt-4 lg:mt-0  rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                    <a href="#" className='' >
                        <img src={resourceImg2} alt="" className='rounded-r-lg rounded-l-lg' />
                        <div className='p-4 py-7'>
                            <h2 className='text-[24px] font-semibold mt-4  text-[#287a9f]'>Amplify Teaching</h2>
                            <span className='text-red-600 mt-4 font-semibold text-[16px]'>Learn more →</span>
                        </div>
                    </a>
                </div>
                <div className='lg:w-[25%] w-[95%] mt-4 lg:mt-0 rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                    <a href="#" className='' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}>
                        <img src={resourceImg3} alt="" className='rounded-r-lg rounded-l-lg' />
                        <div className='p-4 py-7'>
                            <h2 className='text-[24px] font-semibold mt-4  text-[#287a9f]'>Amplify Teaching</h2>
                            <span className='text-red-600 mt-4 font-semibold text-[16px]'>Learn more →</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className='p-5  mt-20 '>


                <h2 className='text-[28px] font-semibold text-[#287a9f] text-center'>Featured Resources</h2>
                <div className='lg:flex lg:w-[85%] w-[95%]  m-auto mt-2 px-5 justify-evenly' >
                    <div className='lg:w-[30%] w-[95%] rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                        <a href="#">
                            <img src={fImg1} alt="" className='rounded-r-lg rounded-l-lg' />
                            <div className='p-4 py-7'>
                                <h2 className="text-[14px] font-semibold text-gray-500 uppercase">Blogs
                                </h2>
                                <h2 className='text-[24px] leading-7 font-semibold mt-3  text-[#287a9f]'>Reducing Bias in the Classroom</h2>
                                <span className='text-red-600 mt-6 block font-semibold text-[16px]'>Read more →</span>
                            </div>

                        </a>
                    </div>
                    <div className='lg:w-[30%] w-[95%] mt-4 lg:mt-0  rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                        <a href="#" className='' >
                            <img src={fImg2} alt="" className='rounded-r-lg rounded-l-lg' />
                            <div className='p-4 py-7'>
                                <h2 className="text-[14px] leading-7 font-semibold text-gray-500 uppercase">Blogs
                                </h2>
                                <h2 className='text-[24px] font-semibold mt-3  text-[#287a9f]'>Bridging the Skills Gap with Competency-Based Education</h2>
                                <span className='text-red-600 mt-6 block font-semibold text-[16px]'>Read more →</span>
                            </div>
                        </a>
                    </div>
                    <div className='lg:w-[30%] w-[95%] mt-4 lg:mt-0 rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                        <a href="#" className='' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}>
                            <img src={fImg3} alt="" className='rounded-r-lg rounded-l-lg' />
                            <div className='p-4 py-7'>
                                <h2 className="text-[14px]  font-semibold text-gray-500 uppercase">Ebooks & Buyers Guides
                                </h2>
                                <h2 className='text-[24px] leading-7 font-semibold mt-3  text-[#287a9f]'>Your Guide to Choosing a Learning Management System</h2>
                                <span className='text-red-600 mt-6 block font-semibold text-[16px]'>Read more →</span>
                            </div>
                        </a>
                    </div>
                </div>



            </div>

            <div className='px-5'>
                <div className='lg:flex lg:w-[85%] w-[95%] mt-3  m-auto p-5 justify-evenly' >
                    <div className='lg:w-[30%] w-[95%] rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                        <a href="#">
                            <img src={fImg4} alt="" className='rounded-r-lg rounded-l-lg' />
                            <div className='p-4 py-7'>
                                <h2 className="text-[14px] font-semibold text-gray-500 uppercase">Blogs
                                </h2>
                                <h2 className='text-[24px] leading-7 font-semibold mt-3  text-[#287a9f]'>Reducing Bias in the Classroom</h2>
                                <span className='text-red-600 mt-6 block font-semibold text-[16px]'>Read more →</span>
                            </div>

                        </a>
                    </div>
                    <div className='lg:w-[30%] w-[95%] mt-4 lg:mt-0  rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                        <a href="#" className='' >
                            <img src={fImg5} alt="" className='rounded-r-lg rounded-l-lg' />
                            <div className='p-4 py-7'>
                                <h2 className="text-[14px] leading-7 font-semibold text-gray-500 uppercase">Blogs
                                </h2>
                                <h2 className='text-[24px] font-semibold mt-3  text-[#287a9f]'>Bridging the Skills Gap with Competency-Based Education</h2>
                                <span className='text-red-600 mt-6 block font-semibold text-[16px]'>Read more →</span>
                            </div>
                        </a>
                    </div>
                    <div className='lg:w-[30%] w-[95%] mt-4 lg:mt-0 rounded-xl' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                        <a href="#" className='' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}>
                            <img src={fImg6} alt="" className='rounded-r-lg rounded-l-lg' />
                            <div className='p-4 py-7'>
                                <h2 className="text-[14px]  font-semibold text-gray-500 uppercase">Ebooks & Buyers Guides
                                </h2>
                                <h2 className='text-[24px] leading-7 font-semibold mt-3  text-[#287a9f]'>Your Guide to Choosing a Learning Management System</h2>
                                <span className='text-red-600 mt-6 block font-semibold text-[16px]'>Read more →</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Resources
