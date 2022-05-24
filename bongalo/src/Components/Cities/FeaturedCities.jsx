import React from "react";
import City from "./City";
import kigali from '../../assets/kigali.png'
import yaounde from '../../assets/yaounde.png'
import rubavu from '../../assets/rubavu.png'
import douala from '../../assets/douala.jpeg'

const FeaturedCities = () => {
  return (
    <div className="mt-9">
      <h3 className="font-medium mt-5 ml-6 text-lg">Featured Cities</h3>
      <div className="flex overflow-x-auto space-x-6">
        <City img={kigali} city='Kigali' />
        <City img={yaounde} city='Yaounde'/>
        <City img={rubavu} city='Rubavu'/>
        <City img={douala} city='Douala'/>
      </div>
    </div>
  );
};

export default FeaturedCities;
