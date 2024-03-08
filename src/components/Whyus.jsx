import React from 'react'

function Whyus() {
  return (
      <>
          <div className="whyus flex h-[70vh] w-full bg-gradient-to-l from-indigo-100 items-center px-40 justify-between">
              <div className="whyustxt h-[80%] w-[50%]  space-x-3 space-y-4"> 
                  <h2 className=' text-[2.2vw] capitalize pb-5 font-medium'>Why us</h2>
                  <p className=' text-[1.5vw] font-sans tracking-wide '>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, quaerat!
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad voluptatum itaque minima necessitatibus aliquam aut quae dolorum suscipit culpa.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, unde!    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, est?
                  </p>
              </div>
              <div className="whyusimg h-[80%] w-[40%] ">
                  <img src="https://i.pinimg.com/originals/18/b0/df/18b0df813c34fc5c7c456248c533db57.jpg" alt="whyus" className=' bg-cover bg-center h-full w-full shadow-2xl hover:drop-shadow-2xl	 rounded-md ' />
              </div>
          </div>
      </>
  )
}

export default Whyus