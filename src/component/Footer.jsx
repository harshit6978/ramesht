import React from 'react'
import { FaCaretRight } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMailOpen, IoMdMail } from 'react-icons/io'
import { MdCall } from 'react-icons/md'

const Footer = () => {
    return (
        <section className='bg-[#043c8c] pt-8 relative' >
            <div className='max-w-[1165px] flex mx-auto relative'>
                <div className='w-full relative flex '>
                    <div className='p-3 flex w-full flex-wrap'>
                        <div className='text-white text-2xl font-normal capitalize mb-5 w-full'>
                            <div className='mt-3'>
                                <p className='font-serif'>Signup our newsletter</p>
                            </div>
                        </div>
                        <div className='mb-5 w-full relative'>
                            <div className=''>
                                <form>
                                    <div className='-mb-3 flex flex-wrap '>
                                        <div className='mb-3 w-2/3 flex-wrap items-center relative flex '>
                                            {/* <lable className="cursor-pointer absolute w-[1px] text-[#FFFFFF] h-[1px] ">Email</lable> */}
                                            <input type='email' className='bg-transparent text-[#FFFFFF] w-full max-w-full border-[1px] border-[#fff] rounded-md text-base min-h-12 py-2 px-4' placeholder='Email'></input>
                                        </div>
                                        <div className='mb-3 w-1/4 flex ml-2'>
                                            <button className='bg-[#ec531c] justify-center mt-1 text-white text-lg rounded-md min-h-12 basis-full py-[14px] px-8 border-none cursor-pointer flex'>
                                                <span className='mr-3 '><IoIosMailOpen />
                                                </span>
                                                <span className='text-base font-mono '>Send</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <section className='pt-10 pb-5 w-full relative '>
                            <div className='max-w-[1140px] flex mx-auto relative'>
                                <div className='w-1/4 relative flex '>
                                    <div className='p-3 flex relative w-full flex-wrap content-start'>
                                        <div className='mb-5 w-full '>
                                            <div>
                                                <h2 className='text-white text-xl font-semibold'>Quick Links</h2>
                                            </div>
                                            <div className='w-full relative '>
                                                <div className='mt-[10px] '>
                                                    <ul className='list-none '>
                                                        <li className='pb-[2px] flex items-center relative'>
                                                            <a className='text-sm font-light w-full flex items-center no-underline'>
                                                                <span className='pr-[9px] '><FaCaretRight className='text-white w-6 text-sm' /></span>
                                                                <span className='text-white pl-[5px] '>Home</span>
                                                            </a>
                                                        </li>
                                                        <li className='pb-[2px] flex items-center relative'>
                                                            <a className='text-sm font-light w-full flex items-center no-underline'>
                                                                <span className='pr-[9px] '><FaCaretRight className='text-white w-6 text-sm' /></span>
                                                                <span className='text-white pl-[5px] '>About Us</span>
                                                            </a>
                                                        </li>
                                                        <li className='pb-[2px] flex items-center relative'>
                                                            <a className='text-sm font-light w-full flex items-center no-underline'>
                                                                <span className='pr-[9px] '><FaCaretRight className='text-white w-6 text-sm' /></span>
                                                                <span className='text-white pl-[5px] '>Accreditation</span>
                                                            </a>
                                                        </li>
                                                        <li className='pb-[2px] flex items-center relative'>
                                                            <a className='text-sm font-light w-full flex items-center no-underline'>
                                                                <span className='pr-[9px] '><FaCaretRight className='text-white w-6 text-sm' /></span>
                                                                <span className='text-white pl-[5px] '>Our Team</span>
                                                            </a>
                                                        </li>
                                                        <li className='pb-[2px] flex items-center relative'>
                                                            <a className='text-sm font-light w-full flex items-center no-underline'>
                                                                <span className='pr-[9px] '><FaCaretRight className='text-white w-6 text-sm' /></span>
                                                                <span className='text-white pl-[5px] '>Trade Fair Participation</span>
                                                            </a>
                                                        </li>
                                                        <li className='pb-[2px] flex items-center relative'>
                                                            <a className='text-sm font-light w-full flex items-center no-underline'>
                                                                <span className='pr-[9px] '><FaCaretRight className='text-white w-6 text-sm' /></span>
                                                                <span className='text-white pl-[5px] '>Contact </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* second part  */}
                                <div className='w-1/4 relative flex '>
                                    <div className='p-3 flex relative w-full flex-wrap content-start'>
                                        <div className='mb-5 w-full '>
                                            <div>
                                                <h2 className='text-white text-xl font-semibold'>Get In Touch</h2>
                                            </div>
                                            <div className='w-full relative '>
                                                <div className='mt-[10px] '>
                                                    <div className='mt-[10px] '>
                                                        <ul>
                                                            <li className='pb-1 flex items-center'>
                                                                <a className='text-sm font-light flex w-full no-underline '>
                                                                    <span className='pr-[9px] '><MdCall className='text-white w-6 text-lg' /></span>
                                                                    <span className='text-white font-medium'>+91 7862046534 </span>
                                                                </a>
                                                            </li>
                                                            <li className='pb-1 mt-2 flex items-center'>
                                                                <a className='text-sm font-light flex w-full no-underline '>
                                                                    <span className='pr-[9px] '><IoMdMail className='text-white w-6 text-lg' /></span>
                                                                    <span className='text-white font-medium'>atlantico.int@gmail.com</span>
                                                                </a>
                                                            </li>
                                                            <li className='pb-1 mt-2 flex items-center'>
                                                                <a className='text-sm font-light flex w-full no-underline '>
                                                                    <span className='pr-[9px] '><FaLocationDot className='text-white w-6 text-lg' /></span>
                                                                    <span className='text-white font-medium'>516, MBC-Meridian Business Center, Lajamni Chowk, Mota Varachha, Surat, Gujarat 394101 </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* third part  */}
                                <div className='w-1/4 relative flex '>
                                    <div className='p-3 flex relative w-full flex-wrap content-start'>
                                        <div className='mb-5 w-full '>
                                            <div>
                                                <h2 className='text-white text-xl font-semibold'>Quick Links</h2>
                                            </div>
                                            <div className='w-full relative '>
                                                <div className='mt-[10px] '>
                                                    <ul className='list-none '>
                                                        <li className='pb-[2px] flex items-center relative'>
                                                            <a className='text-sm font-light w-full flex items-center no-underline'>
                                                                <span className='pr-[9px] '><FaCaretRight className='text-white w-6 text-sm' /></span>
                                                                <span className='text-white pl-[5px] '>Surgical & Disosable</span>
                                                            </a>
                                                        </li>
                                                        <li className='pb-[2px] flex items-center relative'>
                                                            <a className='text-sm font-light w-full flex items-center no-underline'>
                                                                <span className='pr-[9px] '><FaCaretRight className='text-white w-6 text-sm' /></span>
                                                                <span className='text-white pl-[5px] '>Coco High & Beverages</span>
                                                            </a>
                                                        </li>
                                                        <li className='pb-[2px] flex items-center relative'>
                                                            <a className='text-sm font-light w-full flex items-center no-underline'>
                                                                <span className='pr-[9px] '><FaCaretRight className='text-white w-6 text-sm' /></span>
                                                                <span className='text-white pl-[5px] '>Insta Drink Mix Powder</span>
                                                            </a>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* four part  */}
                                <div className='w-1/4 flex '>
                                    <div className='p-[10px] flex w-full flex-wrap'>
                                        <div className='mb-5 w-full '>
                                            <div className='-mt-[23px] '>
                                                <img src='https://atlanticointernational.com/wp-content/uploads/2022/06/WHITE-PNG-212x300.png' className='w-[60%] m-auto'></img>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <div className='-mt-[34px] '>
                                                <h2 className='text-white text-xl font-extrabold '>Proud Member of SGCCI</h2>
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
    )
}

export default Footer
