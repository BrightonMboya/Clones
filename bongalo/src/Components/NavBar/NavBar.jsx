import React, { useState } from "react";
import img5 from "../../assets/img5.jpg";

const NavBar = () => {
  const [enteredDestination, setEnteredDestination] = useState("");

  const destinationChangeHandler = (event) => {
    setEnteredDestination(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredDestination("");
  };
  return (
    <div>
      <div className="w-full h-full bg-no-repeat bg-cover relative rounded-b-3xl shadow-2xl"
      style={{
        backgroundImage: `url(${img5})`,
        objectPosition: "cover",
      }}>
        {/* <img
          src={img5}
          alt=""
          className="absolute object-cover shadow-lg rounded-b-3xl opacity-80 mix-blend-overlay"
        /> */}
        <h3 className="top-0 font-bold text-white absolute text-xl mt-5 ml-4">
          Bongalo
        </h3>

        <div className="flex-col justify-center items-center py-[30vh] ml-[2vh]">
          <div>
            <h3 className="text-white font-bold text-2xl">
              Book ahead your next trip or vacation
            </h3>
            <form onSubmit={submitHandler} className="flex flex-col">
              <input
                type="text"
                placeholder="Where are you going?"
                onChange={destinationChangeHandler}
                value={enteredDestination}
                className='w-[40vh] h-10 rounded-lg p-3'
              />
              <button
                onClick={submitHandler}
                className="text-lg  text-white bg-indigo-500 rounded-lg mt-5 h-10 w-[40vh]"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
