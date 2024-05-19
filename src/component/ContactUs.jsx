import React from 'react'
import { IoIosMailOpen, IoMdCall } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'

const ContactUs = () => {
  return (
    <section className='py-20 relative '>
      <div className='max-w-[1140px] flex mx-auto relative '>
        <div className='w-1/2 relative flex '>
          <div className='content-center items-center px-9 pt-4 pb-9 flex relative w-full flex-wrap '>
            <div className='mb-5 w-full relative'>
              <div>
                <h2 className='justify-center text-2xl m-0 relative flex '>
                  <div className='flex-row z-10 flex relative'>
                    <span className='text-[40px] font-bold text-blue-900 mr-1'>Get</span>
                    <span className='mr-1 relative'></span>
                    <span className='text-[40px] font-bold text-orange-600'>In Touch</span>
                    <span className='w-[93px] border-b-[20px] border-[#FFA58542] rounded-[40px] left-[80%] bottom-0 absolute z-10 block '></span>
                  </div>
                </h2>
              </div>
            </div>
            <div className='mb-5 w-full relative'>
              <div >
                <form>
                  <div className='-mb-4 flex flex-wrap '>
                    <div className='mb-4 w-full flex-wrap relative flex '>
                      <label className='pb-2 text-lg font-normal'>Name</label>
                      <input type='text' className='rounded-3xl max-w-full w-full border-2 text-[#1f2124] py-2 px-4 text-base min-h-10'></input>
                    </div>
                    <div className='mb-4 w-full flex-wrap relative flex '>
                      <label className='pb-2 text-lg font-normal'>Email</label>
                      <input type='text' className='rounded-3xl max-w-full w-full border-2 text-[#1f2124] py-2 px-4 text-base min-h-10'></input>
                    </div>
                    <div className='mb-4 w-full flex-wrap relative flex '>
                      <label className='pb-2 text-lg font-normal'>Phone No.</label>
                      <input type='text' className='rounded-3xl max-w-full w-full border-2 text-[#1f2124] py-2 px-4 text-base min-h-10'></input>
                    </div>
                    <div className='mb-4 w-full flex-wrap relative flex '>
                      <label className='pb-2 text-lg font-normal'>Message</label>
                      <textarea className='rounded-3xl max-w-full w-full border-2 text-[#1f2124] py-2 px-4 text-base min-h-10 '></textarea>
                    </div>
                    <div className='mb-4 w-full flex flex-wrap relative'>
                      <button className='bg-[#ec531c] w-full text-white text-xl font-normal rounded-3xl p-3 min-h-10 border-none cursor-pointer'>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>

        <div className='w-1/2 relative flex '>
          <div className='p-3 flex relative w-full flex-wrap content-start '>
            <div className='mb-5 w-full mx-3 mt-3 p-3 rounded-2xl shadow-xl'>
              <div className='text-center'>
                <div className='mb-4 mx-auto '>
                  <a className='text-[#043c8c] text-[40px] inline-block '>
                    <IoLocationSharp />
                  </a>
                </div>
                <div className=''>
                  <h3 className='text-xl font-semibold mb-3 '>Address</h3>
                  <p>516, MBC Meridian Business Centre, Lajamni chowk, Mota Varachha Surat – 394101, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className='mb-5 w-full mx-3 mt-3 p-3 rounded-2xl shadow-xl'>
              <div className='text-center'>
                <div className='mb-4 mx-auto '>
                  <a className='text-[#043c8c] text-[40px] inline-block '>
                    <IoMdCall />
                  </a>
                </div>
                <div className=''>
                  <h3 className='text-xl font-semibold mb-3 '>Contact</h3>
                  <p>+91 78620465325</p>
                </div>
              </div>
            </div>


            <div className='mb-5 w-full mx-3 mt-3 p-3 rounded-2xl shadow-xl'>
              <div className='text-center'>
                <div className='mb-4 mx-auto '>
                  <a className='text-[#043c8c] text-[40px] inline-block '>
                    <IoIosMailOpen />
                  </a>
                </div>
                <div className=''>
                  <h3 className='text-xl font-semibold mb-3 '>Mail</h3>
                  <p>atlantico.int@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
