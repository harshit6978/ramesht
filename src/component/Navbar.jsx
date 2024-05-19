import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
// import { IoIosCall } from "react-icons/io";
// import { IoCallOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
// import {logo} from "../../public/2_logo.png"


const Navbar = () => {
    return (
        <div className=''>
            <section className='bg-blue-900 mt-0 -mb-11 p-0 relative'>
                <div className='max-w-[1140px] flex mr-auto ml-auto relative'>
                    <div className='w-full relative min-h-[1px] flex'>
                        <div className='flex relative w-full flex-wrap content-start'>
                            <section className='w-full relative mx-w-[1140px] flex ml-auto mr-auto'>
                                <div className='w-3/4 flex relative'>
                                    <div className='content-center items-center flex relative w-full flex-wrap'>
                                        <div className='w-full relative text-left'>
                                            <div className='mt-3 overflow-hidden '>
                                                <ul className='-ml-5 justify-start flex flex-wrap list-none'>
                                                    <li className='text-left justify-start flex relative ml-6 mr-6'>
                                                        <span className='flex relative'>
                                                            <IoCall className='w-5 text-base text-white mt-1' />
                                                        </span>
                                                        <span className="text-white inline-block self-center pl-1 text-base font-normal text-left">+91 7862046538</span>
                                                    </li>
                                                    <li className="h-[63%] text-white  w-auto left-auto relative"></li>
                                                    <li className="justify-start text-left flex items-center relative ">
                                                        <span className="text-center flex relative">

                                                            <IoMdMail className="text-white w-5 text-base " />
                                                        </span>
                                                        <span className="text-white inline-block pl-2 text-base font-normal">atlantico.int@gmail.com</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-1/4 relative flex ">
                                    <div className="mt-3 flex relative w-full flex-wrap content-start ">
                                        <div className="w-full relative">
                                            <div className=" text-right">
                                                <div className="inline-block w-full ">
                                                    <span className="inline-block ">
                                                        <a className="rounded-3xl bg-blue-900 border text-2xl p-2 inline-flex text-white content-center cursor-pointer text-center">
                                                            <FaFacebookF className="text-white relative block h-4 w-4" />
                                                        </a>
                                                    </span> <span className="inline-block ">
                                                        <a className="rounded-3xl bg-blue-900 border text-2xl p-2 inline-flex text-white content-center cursor-pointer text-center">
                                                            <FaXTwitter className="text-white relative block h-4 w-4" />
                                                        </a>
                                                    </span> <span className="inline-block ">
                                                        <a className="rounded-3xl bg-blue-900 border text-2xl p-2 inline-flex text-white content-center cursor-pointer text-center">
                                                            <FaLinkedin className="text-white relative block h-4 w-4" />
                                                        </a>
                                                    </span> <span className="inline-block ">
                                                        <a className="rounded-3xl bg-blue-900 border text-2xl p-2 inline-flex text-white content-center cursor-pointer text-center">
                                                            <FaInstagram className="text-white relative block h-4 w-4" />
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="bg-[#FFFFFF] rounded mt-3 -mb-9 p-3 z-10 w-full relative">
                                <div className="mx-w-[1140px] flex mr-auto ml-auto relative">
                                    <div className="w-[21.36%] relative flex ">
                                        <div className="content-center items-center p-3 flex relative w-full flex-wrap ">
                                            <div className="w-full text-center relative ">
                                                <a className="inline-block ">
                                                    <img src="https://atlanticointernational.com/wp-content/uploads/2022/09/atlogo.png"></img>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                <div className="w-[73.14%] relative flex ">
                                    <div className="items-center content-center p-3 flex relative w-full flex-wrap ">
                                        <div className="w-full">
                                            <div className="">
                                                <nav className="flex ">
                                                    <ul className="content-center mr-auto ml-auto flex flex-wrap list-none relative z-10">
                                                        <li className="flex relative list-none p-0 ">
                                                            <Link to='/' className="text-orange-600 pl-4 pr-4 text-base font-medium">Home</Link>
                                                        </li><li className="flex relative list-none p-0 ">
                                                            <Link to='/ourcompany' className=" pl-4 pr-4 text-base font-medium">Our Company</Link>
                                                        </li><li className="flex relative list-none p-0 ">
                                                            <Link to={'/product'} className="pl-4 pr-4 text-base font-medium">Product</Link>
                                                        </li><li className="flex relative list-none p-0 ">
                                                            <Link to={'/ourteam'} className="pl-4 pr-4 text-base font-medium">Our Team</Link>
                                                        </li><li className="flex relative list-none p-0 ">
                                                            <Link to={'/contactus'} className="600 pl-4 pr-4 text-base font-medium">Contact US</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    )
};

export default Navbar;
