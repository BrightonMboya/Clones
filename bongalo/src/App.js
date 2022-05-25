import React from 'react'
import FeaturedCities from './Components/Cities/FeaturedCities';
import Footer from './Components/Footer/Footer';
import Guests from './Components/Guests/Guests';
import NavBar from './Components/NavBar/NavBar';
import Newsletter from './Components/Newsletter/Newsletter';
import TestimonialCard from './Components/Testimonials/TestimonialCard';
function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <FeaturedCities/>
      <Guests/>
      <TestimonialCard/>
      <Newsletter/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
