import React from 'react';
import abt from '../assets/aboutimg1.jpg';
import call from '../assets/icons8-outgoing-call-60.png'

function Aboutus() {
  return (
      <div className='h-[80vh] w-full bg-white flex items-center justify-between px-40 bg-gradient-to-r from-indigo-100 font-sans	 '>
          <div className="aboutimg h-[60vh]  w-[60vh]  rounded-sm  drop-shadow-2xl">
              <img src={abt} alt="img"  className=' bg-cover bg-center h-full w-full rounded-sm drop-shadow-2xl'/>
          </div>
          <div className="abouttxt h-[70%] w-[50%] px-5 space-x-3 space-y-3 text-wrap ">
              <h2 className=' font-medium text-[2.2vw] capitalize pb-7'>About us</h2>
              <p className=' text-[1.4vw]'>XYZ Ad Agency: Where Ideas Take Flight! We're not just an agency; we're your creative partner. From bold designs to strategic campaigns, we're here to elevate your brand. Let's craft success together! #XYZCreativeSolutions #AdvertisingMagic 🚀✨</p>
        <div className="callus flex items-center  pt-7  ">
          <button className=' flex    rounded-lg p-4 bg-ind  ring-slate-900/5 shadow-lg  hover:bg-indigo-400 hover:text-white '>
          <img src={call} alt="call" className='h-8 pr-2' />
            <p className=' text-[1.2vw]'> +91 9908835692</p>
            </button>
          </div>
      </div>
      
    </div>
  )
}

export default Aboutus