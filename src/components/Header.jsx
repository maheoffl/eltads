import React from 'react'
import call from '../assets/icons8-outgoing-call-60.png'

function Header() {
  return (
      <header className=' sticky top-0 z-50 h-20 py-6 border-bfont-sans text-[1.1vw] opacity-80'  >
          <div className=" h-full w-full relative flex items-center justify-between px-32">
              <a href="#" className='logolink'>
                <h1 className=" text-2xl font-semibold text-red-600 font-mono">ELT ADS</h1>
              </a>
              <div className="links flex items-center gap-16 uppercase tracking-wide text-[1.0vw] font-medium text-white font-bold  invert">
                  <a href="#" className=' hover:text-red-500'>
                      About Us</a>
                  <a href="#" className=' hover:text-green-600'>
                      Gallery</a>
                  <a href="#" className='flex gap-2 hover:text-blue-500' >
                    <img src={call} alt="." className=' h-6 invert' />
                      <span>Contact Us</span>
                  </a>
              </div>
          </div>
   </header>
  )
}

export default Header