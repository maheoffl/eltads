import React from "react";

function Maps() {
  return (
    <div className="mapsoverlay w-[50%] h-[60%] sm:w-[60%] sm:h-[80%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d235.49096418890036!2d78.53702386711505!3d17.38695644194451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIzJzEzLjMiTiA3OMKwMzInMTMuOCJF!5e1!3m2!1sen!2sin!4v1710043085632!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=" h-[100%] w-[100%]"
      />
    </div>
  );
}

export default Maps;
