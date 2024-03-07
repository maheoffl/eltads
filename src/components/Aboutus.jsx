import React from 'react';
import abt from '../assets/aboutimg1.jpg'

function Aboutus() {
  return (
      <div className='h-[80vh] w-full bg-white flex items-center justify-between px-40  border-t'>
          <div className="aboutimg h-[70%]  w-[40%]  rounded-sm  drop-shadow-2xl">
              <img src={abt} alt="img"  className=' bg-cover bg-center h-full w-full rounded-sm drop-shadow-2xl'/>
          </div>
          <div className="abouttxt h-[70%] w-[50%] bg-slate-100 p-10  ">
              <h2>About us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus fugiat labore numquam fuga aliquid suscipit voluptatem, enim sint quaerat.</p>
          </div>
    </div>
  )
}

export default Aboutus