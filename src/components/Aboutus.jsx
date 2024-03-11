import React from "react";
import abt from "../assets/aboutimg1.jpg";
import call from "../assets/icons8-outgoing-call-60.png";

function Aboutus() {
  return (
    <div className="h-[30vh] w-full   font-sans	 sm:h-[80vh]  sm:flex sm:items-center sm:justify-between sm:h-[80vh] sm:px-20">
      <div className="aboutimg h-[60vh]  w-full  rounded-sm  drop-shadow-2xl hover:shadow-2xl hidden sm:block sm:h-[60vh] sm:w-[50vw]  ">
        <img
          src={abt}
          alt="img"
          className=" bg-cover bg-center h-full w-full rounded-sm drop-shadow-2xl "
        />
      </div>
      <div className="abouttxt h-[70%] w-[80%] px-5 space-x-3 space-y-3 text-wrap pl-20">
        <h2 className=" font-medium text-[2.5vw] pt-9 uppercase pb-2">
          Welcome to ELT ADS !
        </h2>
        <p className=" text-[1.3vw] tracking-wide text-justify indent-8 font-light">
          <span className=" text-red-600 font-bold ">EltAutoAds</span> is the
          leading force in accelerated auto advertising services in Hyderabad,
          dedicated to revolutionizing the way you connect with your audience.
          As the pivotal link between auto owners and advertisers, EltAutoAds
          has swiftly earned a stellar reputation as the foremost auto
          advertising solution in the city. Our expansive network spans over
          5000 autos, ensuring unparalleled reach and engagement for your brand.
          EltAutoAds specializes in crafting dynamic, compelling, and
          goal-oriented advertising campaigns tailored to elevate your company,
          products, or services to new heights.{" "}
        </p>
        <div className="callus flex items-center  pt-7  "></div>
      </div>
    </div>
  );
}

export default Aboutus;
