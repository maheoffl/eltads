import React from 'react'

function Whyus() {
  return (
      <>
          <div className="whyus flex h-[70vh] w-full bg-gradient-to-l from-indigo-100 items-center px-40 justify-between">
              <div className="whyustxt h-[80%] w-[50%]  space-x-3 space-y-4"> 
                  <h2 className=' text-[2.1vw] capitalize pt-5 font-medium'>WHY CHOOSE US ?</h2>
                  <p className='text-red-600 font-bold text-[1.7vw]'>We working for you  <br />to build your business fast</p>
                  <p className=' text-[1.3vw] font-sans tracking-wide text-justify '>

 with <span className=' text-red-600 font-bold '> 18+ </span>years of expertise in Hyderabad, is your go-to partner for impactful and cost-effective auto advertising. We specialize in crafting innovative campaigns that establish a vibrant brand presence across diverse communities. Our unique approach ensures high visibility, leaving a lasting impression and connecting intimately with potential customers daily. Choose EltAds for a dynamic and distinctive advertising experience that propels your brand to new heights in Hyderabad.</p>
              </div>
              <div className="whyusimg h-[80%] w-[40%] ">
                  <img src="https://i.pinimg.com/originals/18/b0/df/18b0df813c34fc5c7c456248c533db57.jpg" alt="whyus" className=' bg-cover bg-center h-full w-full shadow-2xl hover:drop-shadow-2xl	 rounded-md ' />
              </div>
          </div>
      </>
  )
}

export default Whyus