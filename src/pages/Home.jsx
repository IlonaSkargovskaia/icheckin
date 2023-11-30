import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import HeroBoxes from '../components/HeroBoxes/HeroBoxes';
import Process from '../components/Process/Process';
import About from '../components/About/About';
import FeaturesBlock from '../components/Features/FeaturesBlock';
import Banner from '../components/Banner/Banner';
import ScreenShots from '../components/Interface/ScreenShots';
import Testimonials from '../components/Testimonial/Testimonials';
import Questions from '../components/Questions/Questions';


const Home = () => {
  return (
    <>
    <Navbar />
    <main>
        <Hero />
        <HeroBoxes />
        <About />
        <Process />
        <FeaturesBlock />
        
        <ScreenShots />
        <Testimonials />
        <Banner />
        <Questions />
       
    </main>
    <Footer />
    </>
  )
}

export default Home