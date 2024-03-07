import React from 'react'
import call from '../assets/icons8-outgoing-call-60.png'

function Header() {
  return (
      <header className=' sticky top-0 z-50 h-20 py-6 border-b bg-white'>
          <div className=" h-full w-full relative flex items-center justify-between px-32">
              <a href="#" className='logolink'>
                 <img src="#" alt="Logo" />
              </a>
              <div className="links flex items-center gap-16">
                  <a href="#">
                      About Us</a>
                  <a href="#">
                      Gallery</a>
                  <a href="#" className='flex gap-2' >
                    <img src={call} alt="." className=' h-6' />
                      <span>Contact Us</span>
                  </a>
              </div>
          </div>
   </header>
  )
}

export default Header