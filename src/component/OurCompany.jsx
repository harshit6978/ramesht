import React from 'react'

const OurCompany = () => {
  return (
    <section className='left-0 relative'>
      <img className='w-full bg-center bg-cover absolute' src='https://atlanticointernational.com/wp-content/uploads/2022/10/5e3d798958e0295194afc4d9_541096991.jpg'></img>
      <div className='-bottom-[1px] overflow-hidden absolute left-0 w-full transform rotate-180'>
        <svg className='h-16 -z-10 block w-full relative left-1/2 -translate-x-1/2 '>
          <path className='fill-white '> </path>
          <path className='fill-white'></path>
          <path className='fill-white'></path>
        </svg>
      </div>
      <div className='min-h-[400px] items-center flex mx-auto relative '>
        <div className='w-full relative flex '>
          <div className='p-3 flex relative w-full flex-wrap content-start '>
            <div className='text-center w-full relative '>
              <div className='py-12'>
                <h2>ABOUT US</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCompany
