import React from "react";
import Hero from "../components/Hero/Hero";
import HeroBoxes from "../components/HeroBoxes/HeroBoxes";
import Process from "../components/Process/Process";
import About from "../components/About/About";
import FeaturesBlock from "../components/Features/FeaturesBlock";
import Banner from "../components/Banner/Banner";
import ScreenShots from "../components/Interface/ScreenShots";
import Testimonials from "../components/Testimonial/Testimonials";
import Questions from "../components/Questions/Questions";

const Home = () => {
    return (
        <>
            <Hero />
            <HeroBoxes />
            <About />
            <Process />
            <FeaturesBlock />
            <ScreenShots />
            <Testimonials />
            <Banner />
            <Questions />
        </>
    );
};

export default Home;
