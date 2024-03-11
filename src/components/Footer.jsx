import React from "react";
import Maps from "./Maps";
import home from "../assets/homeicon.png";
import callicon from "../assets/call-icon.png";
import emailicon from "../assets/email icon.png";

function Footer() {
  return (
    <>
      <div
        className=" h-[70vh] w-full flex  items-center  justify-between text-white font-mono "
        style={{ backgroundColor: "#001C40" }}>
        <Maps />
        <div className="leftfoot h-[80%] w-[60%]   flex flex-col gap-10  ">
          <h2 className=" text-xl font-semibold h-[10%] pl-10">Contact</h2>
          <div className="address h-[15%] px-10 flex gap-10 p">
            <div className="lhome">
              <img src={home} alt="home" className=" h-[4vw] invert" />
              <p>
                Address <br />{" "}
              </p>
            </div>
            <div className="rhome pt-2">
              <p>
                {" "}
                street no 3 ,Ramanthapur ,hyderabad <br /> Telangana 500044
              </p>
            </div>
          </div>
          <div className="email h-[15%] px-10 flex gap-10">
            <div className="lhome">
              <img src={callicon} alt="home" className=" h-10 invert" />
              <p>
                Call us
                <br />{" "}
              </p>
            </div>
            <div className="rhome pt-4 ">
              <p>+91 9666160666</p>
            </div>
          </div>
          <div className="phone h-[20%] px-10 flex gap-10">
            <div className="lhome">
              <img src={emailicon} alt="email" className=" h-10 invert" />
              <p>
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
