import React from 'react'
import FeaturedCities from './Components/Cities/FeaturedCities';
import Guests from './Components/Guests/Guests';
import NavBar from './Components/NavBar/NavBar';
import TestimonialCard from './Components/Testimonials/TestimonialCard';
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <FeaturedCities/>
      <Guests/>
      <TestimonialCard/>
    </React.Fragment>
  );
}

export default App;
