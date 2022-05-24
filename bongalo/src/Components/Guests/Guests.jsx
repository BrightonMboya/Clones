import React from "react";
import GuestCard from "./GuestCard";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";


const Guests = () => {
  return (
    <div className="mt-9">
      <h3 className="font-medium mt-5 ml-6 text-lg">Loved by guests</h3>
      <div className="ml-6">
        <div className="grid grid-flow-col auto-cols-max overflow-x-auto gap-4">
          <GuestCard
            propertyDesc="Hobe- One-bedroom Apartment"
            propertyLocation="Entire Unit in Kigali, Rwanda"
            price="$50"
            img={img2}
          />
          <GuestCard
          propertyDesc="Hobe- One-bedroom Apartment"
          propertyLocation="Private Room in Kigali, Rwanda"
          price='$27'
          img={img3}
        />
        <GuestCard
          propertyDesc="Stone House Makepe 02"
          propertyLocation="Entire Unit in Douala, Cameroon"
          price='$72'
          img={img4}
        />
        </div>
      </div>
    </div>
  );
};

export default Guests;
