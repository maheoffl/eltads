import React from "react";
import abt from "../assets/aboutimg1.jpg";

function Aboutus() {
  return (
    <div className="h-[55vh] w-full font-sans	 sm:h-[80vh]  sm:flex sm:items-center sm:justify-between sm:h-[80vh] sm:px-20">
      <div className="aboutimg h-[60vh]  w-full  rounded-sm  drop-shadow-2xl hover:shadow-2xl hidden sm:block sm:h-[60vh] sm:w-[50vw]  ">
        <img
          src={abt}
          alt="img"
          className=" bg-cover bg-center h-full w-full rounded-sm drop-shadow-2xl  "
        />
      </div>
      <div className="abouttxt h-[70%] w-[90%]   space-y-2  pl-12  pt-10 sm:h-[60%]  sm:pt-0">
        <h2 className=" font-medium text-[30px] pt-2 uppercase pb-2 text-blue-950 sm:text-[40px]">
          Welcome to ELT ADS !
        </h2>
        <p className=" text-[22px] text-justify indent-2 font-extralight sm:text-[22px] font-sans sm:pl-10 sm:font-normal align-super ">
          <span className=" text-red-600 font-bold ">EltAutoAds</span> is the
          leading force in accelerated auto advertising services in Hyderabad,
          dedicated to revolutionizing the way you connect with your audience.
          Our expansive network spans over 2000 autos, ensuring unparalleled
          reach and engagement for your brand.
          <span className=" hidden sm:block pt-8 text-blue-950">
            Partner with us to elevate your brand presence and drive business
            growth in Hyderabad's dynamic marketplace.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
