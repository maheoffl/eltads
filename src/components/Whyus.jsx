import React from "react";

function Whyus() {
  return (
    <>
      <div className="whyus flex h-[80vh] w-full relative bg-gradient-to-l from-indigo-100 items-center flex-col sm:flex-row sm:justify-between sm:px-20 ">
        <div className="whyustxt h-[50%] w-[80%] sm:h-[80%] sm:w-[50%] ">
          <h2 className=" text-[30px] uppercase pt-5 font-medium sm:pt-0 sm:text-[2vw] text-blue-950 sm:text-[38px]">
            why choose us ?
          </h2>
          <p className="text-red-900 font-bold text-[24px]  ">
            We working for you to build your business fast.
          </p>
          <p className=" text-[22px] tracking-wide text-justify font-extralight ">
            with<span className=" text-red-600 font-bold"> 18+</span>years of
            expertise in Hyderabad, is your go-to partner for impactful and
            cost-effective auto advertising. We specialize in crafting
            innovative campaigns that establish a vibrant brand presence across
            diverse communities. Our unique approach ensures high visibility,
            leaving a lasting impression and connecting intimately with
            potential customers daily.
          </p>
        </div>
        <div className="whyusimg h-[100%] w-[100%] sm:h-[80%] sm:w-[40%] z-[-99] absolute opacity-40 sm:static sm:z-[999] sm:opacity-100">
          <img
            src="https://i.pinimg.com/originals/18/b0/df/18b0df813c34fc5c7c456248c533db57.jpg"
            alt="whyus"
            className=" bg-cover bg-center h-full w-full  hover:drop-shadow-2xl	 rounded-md  "
          />
        </div>
      </div>
    </>
  );
}

export default Whyus;
