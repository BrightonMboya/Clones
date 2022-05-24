import React from "react";

const GuestCard = (props) => {
  return (
    <div className="shadow-md flex flex-col w-[40vh]">
      <div className="max-w-sm rounded shadow-lg">
        <img src={props.img} alt="" className="w-full object-cover sm:h-full" />
        <div className="ml-2">
        <h3 className="text-base">{props.propertyLocation}</h3>
        <h3>{props.propertyDesc}</h3>
        <p className="font-bold text-indigo-700">
          {props.price} <span className="text-black font-normal">/night</span>
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default GuestCard;
