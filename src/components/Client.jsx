import React from 'react'

function Client(props) {
  return (
    <div className="c1 h-[80%] w-[20%] ">
      <img
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}

export default Client