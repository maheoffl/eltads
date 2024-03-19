import React from "react";
import Maps from "./Maps";
import home from "../assets/homeicon.png";
import callicon from "../assets/call-icon.png";
import emailicon from "../assets/email icon.png";

function Footer() {
  return (
    <>
      <div
        className=" h-[50vh] w-full flex  items-center  justify-between text-white  sm:h-[80vh] "
        style={{ backgroundColor: "#001C40" }}>
        <Maps />
        <div className="leftfoot h-[70%] w-[50%]   flex flex-col gap-10  ">
          <h2 className=" text-base font-semibold h-[4%] pl-5">Contact</h2>
          <div className="address h-[10%] px-10 flex gap-5 p">
            <div className="lhome">
              <img src={home} alt="home" className=" h-[4vw] invert sm: h-4" />
              <p className=" text-xs">
                Address <br />{" "}
              </p>
            </div>
            <div className="rhome pt-1">
              <p className=" text-xs">
                {" "}
                street no 3 ,Ramanthapur ,hyderabad <br /> Telangana 500044
              </p>
            </div>
          </div>
          <div className="call h-[10%] px-10 flex py-2 gap-10 py-5">
            <div className="lhome">
              <img src={callicon} alt="home" className=" h-5 invert" />
            </div>
            <div className="rhome pt-1 ">
              <p>+91 9666160666</p>
            </div>
          </div>
          <div className="phone h-[20%] px-10 flex gap-3">
            <div className="lhome">
              <img src={emailicon} alt="email" className=" h-5 invert" />
              <p className=" text-xs">
                E-Mail <br />{" "}
              </p>
            </div>
            <div className="rhome pt-4">
              <p>eltautoads@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
