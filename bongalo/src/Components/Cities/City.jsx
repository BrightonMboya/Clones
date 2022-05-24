import React from "react";

const City = (props) => {
  return (
    <React.Fragment>
        <div className="mt-5 ml-7 mr-5">
      <div className="h-[25vh] w-[30vh]">
        <img src={props.img} alt="" className="object-cover w-full h-full rounded-lg" />
      </div>
      <h3 className="px-[5vh]">{props.city}</h3>
      </div>
    </React.Fragment>
  );
};

export default City;
