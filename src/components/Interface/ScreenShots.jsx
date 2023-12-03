import React, { useRef } from "react";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import "./Slide.css";
import { Slide } from "./Slide";
import img1 from "../../assets/images/screenshots/1.png";
import img2 from "../../assets/images/screenshots/2.png";
import img3 from "../../assets/images/screenshots/3.png";
import img4 from "../../assets/images/screenshots/4.png";
import img5 from "../../assets/images/screenshots/5.png";
import img6 from "../../assets/images/screenshots/6.png";
import img7 from "../../assets/images/screenshots/7.png";
import frame from '../../assets/images/frame.png'

const data = [
    {
        image: img1,
        text: "desc",
    },
    {
        image: img2,
        text: "desc",
    },
    {
        image: img3,
        text: "desc",
    },
    {
        image: img4,
        text: "desc",
    },
    {
        image: img5,
        text: "desc",
    },
    {
        image: img6,
        text: "desc",
    },
    {
        image: img7,
        text: "desc",
    },
];

const ScreenShots = () => {
    const ref = useRef(StackedCarousel);
    return (
        <section className="screens mb-24">
            <div className="screens-bg py-8 px-4 lg:p-24">
                <div className="title text-center">
                    <div className="subtitle">- Quick view</div>
                    <h2 style={{ lineHeight: "1.2" }} className="mb-4">
                        Take a visual tour of our user-friendly Interface
                    </h2>
                    <p className="lg:w-1/2 mb-16 mx-auto">
                        Boost attendee experiences with our user-friendly QR
                        code scanner,
                        making event check-ins quick and enjoyable.
                    </p>
                </div>

                
                    <div className="card container mx-auto">
                        <div
                            style={{
                                width: "90%",
                                position: "relative",
                                margin: "0 auto",
                            }}
                        >
                            <img src={frame} alt="icheckin-frame" className="slider-frame"/>
                            <ResponsiveContainer
                                carouselRef={ref}
                                render={(width, carouselRef) => {
                                    return (
                                        <StackedCarousel
                                            ref={carouselRef}
                                            slideComponent={Slide}
                                            slideWidth={200}
                                            carouselWidth={width}
                                            data={data}
                                            maxVisibleSlide={7}
                                            disableSwipe
                                            customScales={[
                                                1, 0.85, 0.7, 0.55, 0.25,
                                            ]}
                                            transitionTime={450}
                                        />
                                    );
                                }}
                            />
                        </div>
                    </div>
                
            </div>
        </section>
    );
};

export default ScreenShots;
